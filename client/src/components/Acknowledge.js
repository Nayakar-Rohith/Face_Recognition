import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Acknowledge({ onConsent, onReject }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate=useNavigate();

  const handleConsent = () => {
    setIsOpen(false);
  };

  const handleReject = () => {
    navigate('/landing')

  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-75">
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
          <h3 className="text-lg font-medium text-gray-900">Acknowledge</h3>
          <p className="text-sm text-gray-500 mt-2">
            This app will automatically record a video. Do you consent to this?
          </p>
          <div className="mt-4 flex justify-end space-x-3">
            <button
              onClick={handleConsent}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200"
            >
              I Consent
            </button>
            <button
              onClick={handleReject}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Acknowledge;
