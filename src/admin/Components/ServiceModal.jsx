import React, { useState, useEffect } from 'react';
import { api_url } from '../../config';

const ServiceModal = ({ isOpen, onClose, onSave, onUpdate, btn, data }) => {
  const base_url = api_url

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWorkAreas, setSelectedWorkAreas] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [workAreas, setWorkAreas] = useState([]);

  // Load data into the form when editing
  // Load data into the form when editing
useEffect(() => {
  if (data) {    
    setName(data.name || '');
    setDescription(data.description || '');
    setSelectedCategories(data.categoryId ? data.categoryId?.length ? data.categoryId.map(category => category._id) : []:[]); // Store only the category ID
    setSelectedWorkAreas(data.workAreaId ? data.workAreaId?.length ? data.workAreaId.map(workarea => workarea._id) : []: []); // Store only the work area ID
    setImages(data.images || []);
  }
}, [data]);


  // Fetch categories and work areas from the backend
  useEffect(() => {
    if (isOpen) {
      fetch(`${base_url}/api/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error('Error fetching categories:', error));

      fetch(`${base_url}/api/workareas`)
        .then((res) => res.json())
        .then((data) => setWorkAreas(data))
        .catch((error) => console.error('Error fetching work areas:', error));
    }
  }, [isOpen]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages([...images, ...files].slice(0, 5));
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

 // Checkbox handler for work areas
const handleWorkAreaChange = (workAreaId) => {
  setSelectedWorkAreas((prev) =>
    prev.includes(workAreaId)
      ? prev.filter((id) => id !== workAreaId) // Remove if already selected
      : [...prev, workAreaId] // Add if not selected
  );
};

// Checkbox handler for categories
const handleCategoryChange = (categoryId) => {
  setSelectedCategories((prev) =>
    prev.includes(categoryId)
      ? prev.filter((id) => id !== categoryId) // Remove if already selected
      : [...prev, categoryId] // Add if not selected
  );
};

  const handleSave = (e) => {
    e.preventDefault();
    const itemData = {
      name,
      description,
      categories: selectedCategories,
      workAreas: selectedWorkAreas,
      images,
    };

    if (btn === 'Add New') {
      onSave(itemData);
    } else {
      const id = data._id;
      
      
      onUpdate({ ...itemData, id });
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-5xl"
        >
          &times;
        </button>

        <h2 className="text-xl md:text-3xl font-bold mb-4 text-center text-[var(--primary-color)]">
          {btn === 'Add New' ? 'Add New Item' : 'Update Item'}
        </h2>

        <form onSubmit={handleSave}>
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <label key={category._id} className="flex items-center">
                      <input
                        type="checkbox"
                        value={category._id}
                        checked={selectedCategories.includes(category._id)}
                        onChange={() => handleCategoryChange(category._id)}
                        className="mr-2 "
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Work Areas</label>
                <div className="flex flex-wrap gap-2">
                  {workAreas.map((workArea) => (
                    <label key={workArea._id} className="flex items-center">
                      <input
                        type="checkbox"
                        value={workArea._id}
                        checked={selectedWorkAreas.includes(workArea._id)}
                        onChange={() => handleWorkAreaChange(workArea._id)}
                        className="mr-2"
                      />
                      {workArea.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-4">
                <label className="block text-gray-700">Select Images (Max 5)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  disabled={images.length >= 5}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.split ?`${base_url}/${image}`:URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-white px-4 py-2 rounded"
              disabled={images.length === 0}
            >
              {btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
