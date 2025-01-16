import React, { useState,useEffect } from "react";

const Modal = ({ isOpen, onClose, onSave,btn,data ,onUpdate}) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      if (data.image) {
        setImage(data.image); // Assuming `data.image` is a URL or file path
      }
    }
  }, [data]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSave = () => {
    if(btn ==="Add New"){
    onSave({ image, name });
    }else{
      const id = data._id
      onUpdate({image,name,id})
    }
    onClose();
  };

  const handleBackgroundClick = (e) => {
    // Check if the click target is the background (outside modal content)
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        {/* Close Button (Cross) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold"
        >
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="text-center text-3xl font-bold mb-4 text-[var(--primary-color)]">
          Add Image and Name
        </h2>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 mt-4 w-full"
        />

        {/* Image Upload Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-4 mb-8 w-full"
        />

        {/* Save Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSave}
            className="bg-[var(--primary-color)] text-white px-6 py-2 rounded w-full"
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
