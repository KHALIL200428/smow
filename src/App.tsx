import React from 'react';
import { MessageCircle, Camera, Instagram, Users } from 'lucide-react';

function App() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/966542388549`, '_blank');
  };

  const handleTikTok = () => {
    window.open(`https://www.tiktok.com/@smowprinting?_t=ZN-8yU64sk9zcM&_r=1`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://www.instagram.com/smow_printing`, '_blank');
  };

  const handleSnapchat = () => {
    window.open(`https://www.snapchat.com/add/smwltbh?share_id=p4SYk5J6X_A&locale=ar-SA`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logo and Title */}
        <div className="text-center mb-12">
          {/* Circular Logo */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <div className="text-white font-bold text-2xl">سمو</div>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-2">سمو الطباعة</h1>
          <p className="text-lg text-gray-300">للتواصل معنا عبر وسائل التواصل الاجتماعي</p>
        </div>

        {/* Social Media Buttons */}
        <div className="max-w-md mx-auto space-y-4">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-2 border-white"
          >
            <MessageCircle size={24} />
            <span className="text-lg font-semibold">واتس اب</span>
          </button>

          {/* TikTok Button */}
          <button
            onClick={handleTikTok}
            className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-2 border-white"
          >
            <Users size={24} />
            <span className="text-lg font-semibold">تيك توك</span>
          </button>

          {/* Instagram Button */}
          <button
            onClick={handleInstagram}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-2 border-white"
          >
            <Instagram size={24} />
            <span className="text-lg font-semibold">انستغرام</span>
          </button>

          {/* Snapchat Button */}
          <button
            onClick={handleSnapchat}
            className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-2 border-white"
          >
            <Camera size={24} />
            <span className="text-lg font-semibold">سناب شات</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            <span className="text-gray-400">جميع الحقوق محفوظة © 2025 سمو الطباعة</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;