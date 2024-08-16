const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const Client = require('./src/models/clientSchema');
const Post = require('./src/models/postSchema');
const CaPost = require('./src/models/caPostSchema');
const authRoutes = require('./src/routes/auth');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads', 'CA_Send_Post');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

mongoose.connect('mongodb://localhost:27017/client-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});


const JWT_SECRET = 'your_jwt_secret_key';

function generateToken(client) {
  return jwt.sign(
    { id: client._id, username: client.name }, 
    JWT_SECRET, 
    { expiresIn: '1h' } 
  );
}

module.exports = generateToken; 


app.use('/api', authRoutes);

// Client Routes
app.post('/clients', async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    console.error('Error saving client:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    console.error('Error fetching clients:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/clients/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Client.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json({ message: 'Client deleted' });
  } catch (err) {
    console.error('Error deleting client:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Function to parse and validate clientIds
const parseAndValidateClientIds = (clientIds) => {
  if (typeof clientIds !== 'string') {
    throw new Error('clientIds should be a stringified JSON array');
  }

  let parsedClientIds = [];
  try {
    parsedClientIds = JSON.parse(clientIds);
  } catch (e) {
    throw new Error('Invalid clientIds format');
  }

  if (!Array.isArray(parsedClientIds) || !parsedClientIds.every(id => mongoose.Types.ObjectId.isValid(id))) {
    throw new Error('clientIds should be an array of valid ObjectIDs');
  }

  return parsedClientIds;
};

// Post Routes
app.post('/posts', upload.array('attachments'), async (req, res) => {
  try {
    const { clientIds, subject, description } = req.body;
    const attachments = req.files;

    let parsedClientIds = [];
    try {
      parsedClientIds = JSON.parse(clientIds);
    } catch (e) {
      console.error('Failed to parse clientIds:', e);
      return res.status(400).json({ error: 'Invalid clientIds format' });
    }

    if (!Array.isArray(parsedClientIds) || !parsedClientIds.every(id => mongoose.Types.ObjectId.isValid(id))) {
      return res.status(400).json({ error: 'clientIds should be an array of valid ObjectIDs' });
    }

    const attachmentUrls = attachments.map(file => `${req.protocol}://${req.get('host')}/uploads/CA_Send_Post/${file.filename}`);

    const newPost = new Post({
      clientIds: parsedClientIds,
      subject,
      description,
      attachments: attachmentUrls,
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    console.error('Error saving post:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const getClientNamesMap = async (clientIds) => {
  try {
    const clients = await Client.find({ _id: { $in: clientIds } }).lean();
    return clients.reduce((map, client) => {
      map[client._id] = client.name;
      return map;
    }, {});
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw new Error('Failed to fetch clients');
  }
};

// Refactor existing routes
app.get('/posts-with-client-names', async (req, res) => {
  try {
    const posts = await Post.find({}).lean();
    const clientIds = [...new Set(posts.flatMap(post => post.clientIds))];
    const clientMap = await getClientNamesMap(clientIds);

    const postsWithNames = posts.map(post => ({
      ...post,
      clientNames: post.clientIds.map(id => clientMap[id] || 'Unknown'),
    }));

    res.json(postsWithNames);
  } catch (error) {
    console.error('Error fetching posts with client names:', error);
    res.status(500).json({ error: error.message });
  }
});


// CaPost Routes
app.get('/client-with-posts', async (req, res) => {
  try {
    const caposts = await CaPost.find({}).lean();
    if (caposts.length === 0) {
      return res.json([]);
    }

    const clientIds = [...new Set(caposts.flatMap(post => post.clientIds))]
      .map(id => Number(id))
      .filter(id => !isNaN(id));

    const clients = await Client.find({ _id: { $in: clientIds } }).lean();
    const clientMap = clients.reduce((map, client) => {
      map[client._id] = client.name;
      return map;
    }, {});

    const capostsWithNames = caposts.map(post => ({
      ...post,
      clientNames: post.clientIds.map(id => clientMap[id] || 'Unknown'),
    }));

    res.json(capostsWithNames);
  } catch (error) {
    console.error('Error fetching CA posts with client names:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/ca-posts', upload.array('attachments'), async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { clientIds, subject, description, clientName, postType } = req.body;
    const attachments = req.files;

    console.log('clientIds:', clientIds);

    const parsedClientIds = parseAndValidateClientIds(clientIds);

    const attachmentUrls = attachments.map(file => `${req.protocol}://${req.get('host')}/uploads/CA_Send_Post/${file.filename}`);

    const newCaPost = new CaPost({
      clientIds: parsedClientIds,
      subject,
      description,
      clientName,
      attachments: attachmentUrls,
      status: 'Unread',
      postType,
    });

    const savedCaPost = await newCaPost.save();
    res.status(201).json(savedCaPost);
  } catch (err) {
    console.error('Error saving CA post:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.patch('/ca-posts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    if (typeof status !== 'string') {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updatedPost = await CaPost.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (err) {
    console.error('Error updating post status:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Find the user by username and validate password
  // For example:
  const client = await Client.findOne({ name: username });
  if (!client || client.pan !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // Generate a token or session for the client
  const token = generateToken(client); // Implement generateToken function as needed
  res.json({ token });
});


app.get('/ca-posts', async (req, res) => {
  try {
    const posts = await CaPost.find().populate('clientIds', 'name').exec();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching CA posts:', error);
    res.status(500).json({ error: error.message });
  }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
