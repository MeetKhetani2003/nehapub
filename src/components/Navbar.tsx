"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "shadow-sm py-3" : "py-4"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Fallback */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              {!logoFailed ? (
                <img
                  src="/logo.png"
                  alt="Neha Book Publication Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div
                  id="logo-fallback"
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-sm">
                    <i className="fa-solid fa-book-open text-lg"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-lg leading-tight text-brand-primaryDark group-hover:text-brand-primary transition-colors">
                      Neha Book
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-brand-textMuted font-bold leading-none">
                      Publication
                    </span>
                  </div>
                </div>
              )}
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-brand-textMuted hover:text-brand-primary transition-colors"
            >
              How it Works
            </a>
            <a
              href="https://t.me/+-Tr7rSP30yQyZWFl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-md font-medium hover:bg-brand-primaryDark transition-all flex items-center gap-2 text-sm shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <i className="fa-brands fa-telegram text-base"></i>
              Join Telegram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
