"use client";

import { useState } from "react";

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-white py-12 text-center text-brand-textMuted border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          {/* Logo with Fallback */}
          {!logoFailed ? (
            <img
              src="/logo.png"
              alt="Neha Book Publication Logo"
              className="h-14 md:h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div
              id="footer-logo-fallback"
              className="flex items-center gap-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center text-white">
                <i className="fa-solid fa-book-open text-sm"></i>
              </div>
              <span className="font-serif font-bold text-sm text-brand-primaryDark">
                Neha Book Publication
              </span>
            </div>
          )}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Neha Book Publication. All Rights Reserved.</p>
        <p className="mt-3 text-xs max-w-lg mx-auto opacity-70">
          This site is an independent platform and is not officially affiliated with Telegram Messenger LLP. Earnings depend on the successful completion of assigned work packages according to guidelines.
        </p>
      </div>
    </footer>
  );
}
