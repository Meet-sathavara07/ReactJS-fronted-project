import React from 'react';

function RoleSelection({ onSelectRole }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Select Your Role</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onSelectRole('CA')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          CA
        </button>
        <button
          onClick={() => onSelectRole('Client')}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Client
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;
