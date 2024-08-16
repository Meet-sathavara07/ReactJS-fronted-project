import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [error, setError] = useState(null);
  const [fileInputs, setFileInputs] = useState([{ id: Date.now() }]);
  const [selectedClients, setSelectedClients] = useState(new Set());
  const [showPostForm, setShowPostForm] = useState(false);
  const [clientName, setClientName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [postType, setPostType] = useState('Regular'); // New state for post type
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts-with-client-names');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        data.sort((a, b) => new Date(b.sentDate) - new Date(a.sentDate));
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();

    // Retrieve username from local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setClientName(storedUsername);
    }
  }, []);

  const handlePostFormSubmit = async (e) => {
    e.preventDefault();

    if (!postTitle || !postContent || !clientName) {
      setError('Please fill in all required fields');
      return;
    }

    const clientIds = Array.from(selectedClients);
    const formData = new FormData();
    formData.append('clientIds', JSON.stringify(clientIds));
    formData.append('subject', postTitle);
    formData.append('description', postContent);
    formData.append('clientName', clientName);
    formData.append('postType', postType); // Add post type to form data

    fileInputs.forEach(input => {
      const files = document.getElementById(`postAttach-${input.id}`).files;
      for (let i = 0; i < files.length; i++) {
        formData.append('attachments', files[i]);
      }
    });

    try {
      const response = await fetch('http://localhost:5000/ca-posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send post');
      }

      alert('Post sent successfully!');
      setShowPostForm(false);
      setPostTitle('');
      setPostContent('');
      setSelectedClients(new Set());
      setFileInputs([{ id: Date.now() }]);
      setPostType('Regular'); // Reset post type to default
    } catch (error) {
      setError(error.message);
    }
  };

  const addFileInput = () => {
    setFileInputs([...fileInputs, { id: Date.now() }]);
  };

  const removeFileInput = (id) => {
    setFileInputs(fileInputs.filter(input => input.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-gray-100'>
      <div className='p-6 max-w-screen-lg mx-auto'>
        <h1 className='text-3xl font-bold py-3'>Client Side</h1>
        <div className="mb-8">
          <button
            onClick={() => setShowPostForm(prev => !prev)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
          >
            {showPostForm ? 'Hide Post Form' : 'Send Post'}
          </button>
        </div>

        {showPostForm && (
          <div className="mb-8 bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Send Post</h3>
            <form onSubmit={handlePostFormSubmit}>
              <div className="mb-4">
                <label htmlFor="postTitle" className="font-medium text-gray-700">Title</label>
                <input
                  id="postTitle"
                  type="text"
                  placeholder="Post title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postContent" className="font-medium text-gray-700">Content</label>
                <textarea
                  id="postContent"
                  placeholder="Post content"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="clientName" className="font-medium text-gray-700">Client Name</label>
                <input
                  id="clientName"
                  type="text"
                  placeholder="Client name"
                  value={clientName}
                  className="w-full p-2 border rounded-lg"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="font-medium text-gray-700">Post Type</label>
                <div className="flex items-center">
                  <input
                    id="postTypeRegular"
                    type="radio"
                    name="postType"
                    value="Regular"
                    checked={postType === 'Regular'}
                    onChange={(e) => setPostType(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="postTypeRegular" className="mr-4">Regular</label>

                  <input
                    id="postTypeUrgent"
                    type="radio"
                    name="postType"
                    value="Urgent"
                    checked={postType === 'Urgent'}
                    onChange={(e) => setPostType(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="postTypeUrgent">Urgent</label>
                </div>
              </div>
              <div className='w-full justify-between'>
                <label htmlFor="postAttachment" className="font-medium text-gray-700">Attachment</label>
                <div className='grid grid-cols-2 gap-2 items-center'>
                  {fileInputs.map(input => (
                    <div key={input.id} className="relative mb-4">
                      <input
                        id={`postAttach-${input.id}`}
                        type="file"
                        name="attachments"
                        className="w-full p-2 border rounded-lg"
                        multiple
                      />
                      {fileInputs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFileInput(input.id)}
                          className="absolute top-3 right-4 bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-lg text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addFileInput}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 h-8 rounded-lg shadow-md"
                >
                  Add Attachments +
                </button>
              </div>
              {error && <p className="text-red-600 mt-4">{error}</p>}
              <br />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md"
              >
                Send Post
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="p-6 min-h-screen max-w-screen-lg mx-auto">
        <div className='flex justify-between'>
          <h2 className="text-3xl font-bold mb-6">Posts</h2>
          <div className='w-1/3'>
            <div className='bg-white h-10 w-full rounded-md'>
              <input
                type="text"
                placeholder='Search Post...'
                name="searchBox"
                className='h-full px-2 w-full hover:shadow-md rounded-md focus:border focus:border-blue-200'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div key={post._id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                <span className='text-base font-normal'>Subject:</span> {post.subject}
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                <span className='text-base font-normal'>Description:</span> {post.description}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                <span className='text-base font-normal'>Post Type:</span> {post.postType}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {post.attachments && post.attachments.length > 0 ? (
                  post.attachments.map((attachment, index) => (
                    <div key={index} className="mb-2">
                      <a
                        href={attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline bg-gray-200 bg-opacity-65 px-2 py-[6px] rounded-md"
                      >
                        Attachment {index + 1}
                      </a>
                    </div>
                  ))
                ) : (
                  <p>No attachments</p>
                )}
              </div>
              <p className="text-gray-500 text-sm mb-2">
                Sent Date: {new Date(post.sentDate).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
