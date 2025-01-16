import React, { useEffect, useState } from 'react';
import { api_url } from '../config';

const FeedbackModal = ({ isOpen, onClose }) => {
    const base_url = api_url
  const [formData, setFormData] = useState({
    messageHeading: '',
    message: '',
    suggestion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle closing the modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }

    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, onClose]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // API call to submit feedback
    fetch(`${base_url}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormData({ messageHeading: '', message: '', suggestion: '' });
        onClose()
        setTimeout(() => setSuccess(false), 3000); // Auto close success message
      })
      .catch((err) => {
        setError('Failed to submit feedback');
        setIsSubmitting(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center modal-overlay z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        <button
          className="absolute text-4xl top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center font-semibold mb-4">Submit Feedback</h2>

        {success && (
          <p className="bg-green-100 text-green-700 p-2 rounded mb-4">
            Feedback submitted successfully!
          </p>
        )}

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Message Heading</label>
            <input
              type="text"
              name="messageHeading"
              value={formData.messageHeading}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Suggestion (Optional)</label>
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-[var(--primary-color)] w-full text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
