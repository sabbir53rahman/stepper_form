import React from 'react';
import { motion } from 'framer-motion'; // For smooth animations

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Animated Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="bg-white p-8 rounded-3xl shadow-xl relative max-w-lg mx-auto w-full"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transform hover:scale-105 transition duration-300"
        >
          &#10005;
        </button>

        {/* Modal Content */}
        <div className="space-y-6 text-left">
          <h2 className="text-2xl font-bold text-gray-800">Modal Title</h2>
          <div className="text-gray-600 leading-relaxed">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Modal;
