const mongoose = require('mongoose');

const caPostSchema = new mongoose.Schema({
  clientIds: [{
    type: mongoose.Schema.Types.String,
    ref: 'Client',
  }],
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  attachments: [String],
  clientName: {  
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Unread',
  },
  postType: {  // New field for post type
    type: String,
    enum: ['Regular', 'Urgent'], // Enumerate possible values
    default: 'Regular', // Default value
  },
  sentDate: {
    type: Date,
    default: Date.now,
  },
});

const CaPost = mongoose.model('CaPost', caPostSchema);

module.exports = CaPost;
