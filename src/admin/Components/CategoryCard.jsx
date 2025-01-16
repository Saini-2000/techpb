import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { api_url } from '../../config';

const CategoryCard = ({ w, onDelete, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null); // Tracks the item to delete
  const base_url = api_url;

  const handleDeleteClick = (id) => {
    setItemToDelete(id); // Set the item to be deleted
    setIsModalOpen(true); // Open the modal
  };

  const confirmDelete = () => {
    onDelete(itemToDelete); // Call the onDelete function
    setIsModalOpen(false); // Close the modal after deletion
  };

  return (
    <>
      <div key={w._id} className="w-full sm:w-1/2 lg:w-1/3 3xl:w-1/6 p-6">
        <div className="relative max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transform transition duration-500 hover:scale-105 group">
          <img
            className="w-full h-48 object-cover"
            src={`${base_url}/${w.image}`}
            alt={w.name}
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              {w.name}
            </h2>
          </div>

          {/* Icons that show on hover */}
          <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => onUpdate(w._id)}
              className="bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleDeleteClick(w._id)} // Open modal on delete
              className="bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for delete confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete} // Call the confirmDelete function
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
