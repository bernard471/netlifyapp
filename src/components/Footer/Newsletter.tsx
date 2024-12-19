import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
      <p className="text-gray-300">
        Subscribe to our newsletter for updates on government transparency initiatives.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#ffb703] text-black rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Subscribe</span>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;