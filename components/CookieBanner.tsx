'use client'; // E o componentă de client (are interacțiune)
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificăm dacă utilizatorul a închis deja bannerul în trecut
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleClose = () => {
    // Salvăm faptul că l-a văzut, ca să nu i-l mai arătăm
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 flex flex-col sm:flex-row justify-between items-center shadow-lg border-t border-gray-700">
      <div className="text-sm mb-4 sm:mb-0 pr-4">
        <p>
          Folosim cookie-uri strict necesare pentru a asigura securitatea plăților și funcționarea site-ului. 
          Continuarea navigării implică acceptul tău. Vezi{' '}
          {/* Link către politica clientului, dacă o ai pe o pagină separată, sau ancorează spre footer */}
          <Link target="_blank" 
  rel="noopener noreferrer" href="/termeni_si_conditii" className="underline text-blue-400 hover:text-blue-300">
            Politica de Confidențialitate
          </Link>.
        </p>
      </div>
      <button
        onClick={handleClose}
        className="bg-[#8ecb40ff] text-gray-800 font-bold py-2 px-6 rounded hover:bg-[#7ab332] transition-colors whitespace-nowrap"
      >
        Am înțeles
      </button>
    </div>
  );
}