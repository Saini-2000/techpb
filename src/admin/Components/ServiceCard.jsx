import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { api_url } from '../../config';

const ServiceCard = ({ service, onUpdate, onDelete }) => {
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
    <div className='relative flex flex-col lg:flex-row overflow-x-hidden w-full p-6 shadow-lg rounded-lg bg-white m-2 max-h-screen group'>
      {/* Update and Delete Icons - Top Right */}
      <div className="absolute top-4 right-4 space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => onUpdate(service._id)}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleDeleteClick(service._id)}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Left Side: Content */}
      <div className="lg:w-1/2 w-full p-4">
        <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
        <p className="text-gray-700 mb-4">{service.description}</p>

        {/* Display Categories */}
        {service.categoryId && service.categoryId.length > 0 && (
          <div className="mb-4">
            <span className="font-semibold">Categories:</span>{" "}
            {service.categoryId.map((category, index) => (
              <span key={index} className="text-gray-600">
                {category.name}
                {index < service.categoryId.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        )}

        {/* Display Work Areas */}
        {service.workAreaId && Array.isArray(service.workAreaId) && service.workAreaId.length > 0 && (
          <div className="mb-4">
            <span className="font-semibold">Work Areas:</span>{" "}
            {service.workAreaId.map((workArea, index) => (
              <span key={index} className="text-gray-600">
                {workArea.name}
                {index < service.workAreaId.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Image Slider */}
      <div className="lg:w-1/2 w-full p-4">
        <h3 className="text-xl font-semibold mb-4">Images:</h3>
        {service.images && service.images.length > 0 ? (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="rounded-lg overflow-hidden"
          >
            {service.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={`${base_url}/${image}`} 
                  alt={`Service Image ${index + 1}`} 
                  className="w-full h-64 lg:h-80 object-cover rounded-md" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
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

export default ServiceCard;
