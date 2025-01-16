import React from 'react';

const FeedbackCard = ({ messageHeading, message, suggestion }) => {
  return (
    <div className='p-4   flex'>
      <div className="flex-grow  bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{messageHeading}</h2>
          <p className="text-gray-700">{message}</p>
          {suggestion && (
            <p className="text-gray-600 italic border-t pt-2">
              <strong>Suggestion:</strong> {suggestion}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
