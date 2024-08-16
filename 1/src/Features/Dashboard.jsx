import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [clients, setClients] = useState([]);
  const [selectedClients, setSelectedClients] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [pan, setPan] = useState('');
  const [, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [fileInputs, setFileInputs] = useState([{ id: Date.now() }]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showClientSelectionPopup, setShowClientSelectionPopup] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('todayUnread');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:5000/clients');
        if (!response.ok) throw new Error('Failed to fetch clients');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching clients:', error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/client-with-posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        data.sort((a, b) => new Date(b.sentDate) - new Date(a.sentDate));
        setPosts(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
    fetchClients();
  }, []);

  // Helper functions
  const addClient = async (clientData) => {
    try {
      const response = await fetch('http://localhost:5000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add client');
      }

      const newClient = await response.json();
      setClients([newClient, ...clients]);
      return newClient;
    } catch (error) {
      setError(error.message);
      console.error('Error adding client:', error);
      throw error;
    }
  };

  const loginClient = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to log in');
      }

      const data = await response.json();
      console.log('Logged in successfully:', data);
    } catch (error) {
      setError(error.message);
      console.error('Error logging in client:', error);
    }
  };

  const handlePostFormSubmit = (e) => {
    e.preventDefault();
    setShowClientSelectionPopup(true);
  };

  const handleClientSelectionSubmit = async () => {
    const formData = new FormData();
    formData.append('clientIds', JSON.stringify(selectedClients));
    formData.append('subject', postTitle);
    formData.append('description', postContent);
    fileInputs.forEach(input => {
      const files = document.getElementById(`postAttach-${input.id}`).files;
      for (let i = 0; i < files.length; i++) {
        formData.append('attachments', files[i]);
      }
    });

    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

;
      setPostTitle('');
      setPostContent('');
      setSelectedFile(null);
      setSelectedClients([]);
      setShowClientSelectionPopup(false);
      setFileInputs([{ id: Date.now() }]);
    } catch (error) {
      setError(error.message);
      console.error('Error sending post:', error);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedClients(clients.map(client => client._id));
    } else {
      setSelectedClients([]);
    }
  };

  const handleCheckboxChange = (e, clientId) => {
    if (e.target.checked) {
      setSelectedClients([...selectedClients, clientId]);
    } else {
      setSelectedClients(selectedClients.filter(id => id !== clientId));
    }
  };

  const handleAddClientSubmit = async (e) => {
    e.preventDefault();
    const clientData = { name, pan };

    try {
      await addClient(clientData);
      await loginClient(name, pan);
      setName('');
      setPan('');
    } catch (error) {
      setError(error.message);
    }
  };

  const togglePostStatus = async (postId) => {
    try {
      const updatedPosts = posts.map(post => {
        if (post._id === postId) {
          return { ...post, status: post.status === 'Read' ? 'Unread' : 'Read' };
        }
        return post;
      });

      setPosts(updatedPosts);

      const updatedPost = updatedPosts.find(post => post._id === postId);

      const response = await fetch(`http://localhost:5000/ca-posts/${postId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedPost.status }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${responseData.error}`);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error updating post status:', error);
    }
  };

  // Counts Post
  const today = new Date().toISOString().split('T')[0];

  const totalUnread = posts.filter(post => post.status === 'Unread').length;
  const todayUnread = posts.filter(post => post.status === 'Unread' && post.sentDate.startsWith(today)).length;
  const readed = posts.filter(post => post.status === 'Read').length;
  const totalPost = posts.length;

  // Filter posts based on active filter
  const filteredPosts = () => {
    let filtered = posts;

    // Filter based on status
    switch (activeFilter) {
      case 'todayUnread':
        filtered = filtered.filter(post => post.status === 'Unread' && post.sentDate.startsWith(today));
        break;
      case 'totalUnread':
        filtered = filtered.filter(post => post.status === 'Unread');
        break;
      case 'readed':
        filtered = filtered.filter(post => post.status === 'Read');
        break;
      case 'totalPosts':
        break;
      default:
        filtered = [];
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.clientNames.some(name => name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const options = [
    { value: 'EasyOFFICE', label: 'EasyOFFICE' },
    { value: 'EasyGST', label: 'EasyGST' },
    { value: 'EasyACC', label: 'EasyACC' },
  ];

  const addFileInput = () => {
    setFileInputs([...fileInputs, { id: Date.now() }]);
  };

  const removeFileInput = (id) => {
    setFileInputs(fileInputs.filter(input => input.id !== id));
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-6 max-w-screen-lg mx-auto'>
        <h1 className='text-3xl font-bold py-3'>CA Side</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div>
          <div>
            <h1 className='text-2xl font-bold'>Post Status</h1>
          </div>
          <div className='grid grid-cols-3 pt-3 pb-7 gap-6'>
            <div
              onClick={() => setActiveFilter('todayUnread')}
              className='border-2 shadow-md text-center py-2 cursor-pointer'
            >
              <p className='text-lg'>Today Unread</p>
              <p className='text-xl font-bold'>{todayUnread}</p>
            </div>
            <div
              onClick={() => setActiveFilter('totalUnread')}
              className='border-2 shadow-md text-center py-2 cursor-pointer'
            >
              <p className='text-lg'>Total Unread</p>
              <p className='text-xl font-bold'>{totalUnread}</p>
            </div>
            <div
              onClick={() => setActiveFilter('readed')}
              className='border-2 shadow-md text-center py-2 cursor-pointer'
            >
              <p className='text-lg'>Readed</p>
              <p className='text-xl font-bold'>{readed}</p>
            </div>
            <div
              onClick={() => setActiveFilter('totalPosts')}
              className='border-2 shadow-md text-center py-2 col-span-3 cursor-pointer'
            >
              <p className='text-lg'>Total Posts</p>
              <p className='text-xl font-bold'>{totalPost}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mb-8">
          <div>
            <button
              onClick={() => {
                setShowAddClientForm(!showAddClientForm);
                setShowPostForm(false);
                setShowClientSelectionPopup(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
            >
              {showAddClientForm ? 'Hide Add Client Form' : 'Add Client'}
            </button>
            <button
              onClick={() => {
                setShowPostForm(!showPostForm);
                setShowAddClientForm(false);
                setShowClientSelectionPopup(false);
              }}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md ml-4"
            >
              {showPostForm ? 'Hide Post Form' : 'Send Post'}
            </button>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md ml-4">
            Delete Post
          </button>
        </div>

        {/* Show Post Form with Client List */}
        {showPostForm && (
          <div className="mb-8 bg-white shadow-md rounded-lg p-6">
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
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className=' w-full justify-between'>
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
                  className="bg-gray-300 hover:bg-gray-400 text-black mb-4 px-4 h-8 rounded-lg shadow-md"
                >
                  Add Attachments +
                </button>

              </div>

              {error && <p className="text-red-600 mt-4">{error}</p>}
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md"
              >
                Select Client
              </button>
            </form>
          </div>
        )}

        {/* Client Selection Pop-up */}
        {showClientSelectionPopup && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <div className='flex items-center justify-between mb-4'>
                  <h3 className="text-2xl font-bold">Select Clients</h3>
                  <div>
                    <select
                      value={selectedValue}
                      className='py-1 px-2 border rounded-md shadow-md'
                      onChange={(e) => setSelectedValue(e.target.value)}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto bg-white shadow-md rounded-lg border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr className="border-b border-gray-300">
                        <th className="p-3 text-left w-32">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              onChange={handleSelectAll}
                              className="form-checkbox h-5 w-5"
                            />
                            <span className="text-sm">Select All</span>
                          </label>
                        </th>
                        <th className="p-3 text-left">Name</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {clients.slice().reverse().map((client) => (
                        <tr key={client._id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <input
                              type="checkbox"
                              checked={selectedClients.includes(client._id)}
                              onChange={(e) => handleCheckboxChange(e, client._id)}
                              className="form-checkbox h-5 w-5"
                            />
                          </td>
                          <td className="p-4">{client.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-end gap-4">
                  <button
                    onClick={() => setShowClientSelectionPopup(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleClientSelectionSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                  >
                    Send Post
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Show Add Client Form */}
        {showAddClientForm && (
          <form onSubmit={handleAddClientSubmit} className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-lg mb-8">
            <label htmlFor="name" className="font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter client name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="pan" className="font-medium text-gray-700">PAN</label>
            <input
              id="pan"
              type="text"
              placeholder="Enter client PAN"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md mt-4"
            >
              Add Client
            </button>
          </form>
        )}

        {/* Posts Section with Cards */}
        <div className="p-6 min-h-screen mx-auto">
          <div className='flex justify-between'>
            <h2 className="text-3xl font-bold mb-6">
              {activeFilter === 'todayUnread'
                ? "Today's Unread Posts"
                : activeFilter === 'totalUnread'
                  ? 'Total Unread Posts'
                  : activeFilter === 'readed'
                    ? 'Read Posts'
                    : 'All Posts'}
            </h2>
            <div className='w-1/3'>
              <div className='bg-white h-10 w-full rounded-md flex items-center'>
                <input
                  type="text"
                  placeholder='Search Post...'
                  name="searchBox"
                  className='h-full px-2 w-full hover:shadow-md rounded-md focus:border focus:border-blue-200'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-3 cursor-pointer bi bi-calendar2-week" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredPosts().map((post) => (
              <div
                key={post._id}
                className={`shadow-md rounded-lg p-6 ${post.postType === 'Urgent' ? 'bg-red-100' : 'bg-white'}`}
              >
                <div className="mb-4 text-2xl">
                  <span className='text-base font-normal'>Client:</span> {post.clientName || 'Unknown'}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <span className='text-base font-normal'>Subject:</span> {post.subject}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  <span className='text-base font-normal'>Description:</span> {post.description}
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
                <div className='flex justify-between items-center'>
                  <p className="text-gray-500 text-sm mb-2">
                    Sent Date: {new Date(post.sentDate).toLocaleString()}
                  </p>
                  <button
                    onClick={() => togglePostStatus(post._id)}
                    className={`py-1 px-3 rounded-lg shadow-md ${post.status === 'Read' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                  >
                    {post.status === 'Read' ? 'Read' : 'Unread'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
