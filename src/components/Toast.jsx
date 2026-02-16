import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center space-x-3 space-x-reverse">
        <CheckCircle className="w-6 h-6 ml-3" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast;