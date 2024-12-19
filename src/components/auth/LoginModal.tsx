import React, { useState } from 'react';
import { User, Shield, Users, X } from 'lucide-react';

type UserType = 'government' | 'citizen' | 'admin';

interface LoginModalProps {
  onClose: () => void;
}


const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [userType, setUserType] = useState<UserType>('citizen');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={() => setUserType('government')}
            className={`w-full flex items-center space-x-3 p-4 rounded-lg border ${
              userType === 'government' ? 'border-[#1a4d2e] bg-[#1a4d2e]/10' : 'border-gray-200'
            }`}
          >
            <Shield className="w-5 h-5 text-gray-900" />
            <span className='text-gray-900'>Government Official</span>
          </button>
          
          <button
            onClick={() => setUserType('citizen')}
            className={`w-full flex items-center space-x-3 p-4 rounded-lg border ${
              userType === 'citizen' ? 'border-[#1a4d2e] bg-[#1a4d2e]/10' : 'border-gray-200'
            }`}
          >
            <User className="w-5 h-5 text-[#1a4d2e]" />
            <span className='text-gray-900'>Citizen/General Public</span>
          </button>
          
          <button
            onClick={() => setUserType('admin')}
            className={`w-full flex items-center space-x-3 p-4 rounded-lg border ${
              userType === 'admin' ? 'border-[#1a4d2e] bg-[#1a4d2e]/10' : 'border-gray-200'
            }`}
          >
            <Users className="w-5 h-5 text-[#1a4d2e]" />
            <span className='text-gray-900'>Administrator</span>
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 focus:border-[#1a4d2e] focus:ring-[#1a4d2e]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 focus:border-[#1a4d2e] focus:ring-[#1a4d2e]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a4d2e] text-white py-2 px-4 rounded-lg hover:bg-[#2d694d] transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-[#1a4d2e] hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
