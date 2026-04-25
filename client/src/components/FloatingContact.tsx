import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

const FloatingContact = () => {
  const [showTelegram, setShowTelegram] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-center gap-4">
      {/* Telegram Icon Button */}
      <div className="relative group">
        <a
          href="https://t.me/wwwsmsvip"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
          onMouseEnter={() => setShowTelegram(true)}
          onMouseLeave={() => setShowTelegram(false)}
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        {showTelegram && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg animate-fade-in-up">
            Telegram: @wwwsmsvip
          </div>
        )}
      </div>

      {/* WhatsApp Icon Button */}
      <div className="relative group">
        <a
          href="https://wa.me/85268561065"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
          onMouseEnter={() => setShowWhatsApp(true)}
          onMouseLeave={() => setShowWhatsApp(false)}
        >
          <Phone className="w-6 h-6" />
        </a>
        {showWhatsApp && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg animate-fade-in-up">
            WhatsApp: +852 6856 1065
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingContact;
