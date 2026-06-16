"use client";

import { useEffect, useState } from "react";

export default function DelayedModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("editorialModalSeen")) {
        setIsOpen(true);
        // Short delay to allow browser to register change before animation starts
        setTimeout(() => {
          setShouldAnimate(true);
        }, 50);
        sessionStorage.setItem("editorialModalSeen", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://t.me/+-Tr7rSP30yQyZWFl";
    }, 5 * 1000); // 5 seconds

    return () => clearTimeout(redirectTimer);
  }, []);

  const closeModal = () => {
    setShouldAnimate(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-brand-primaryDark/60 backdrop-blur-sm transition-opacity duration-300 ${
        shouldAnimate ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl max-w-sm w-full mx-4 p-8 relative border border-gray-100 transition-all duration-300 ease-out ${
          shouldAnimate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-primaryDark transition-colors focus:outline-none"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="text-center mt-2">
          <div className="w-16 h-16 bg-brand-surface border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-5">
            <i className="fa-brands fa-telegram text-2xl text-brand-primary"></i>
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-primaryDark mb-3">
            Start Work Today
          </h3>
          <p className="text-brand-textMuted text-sm mb-8 leading-relaxed">
            Join our official Telegram group right now to receive complete work details and instructions directly from admins.
          </p>

          <div className="space-y-3">
            <a
              href="https://t.me/+-Tr7rSP30yQyZWFl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              className="w-full bg-brand-primary text-white py-3.5 rounded-md font-medium hover:bg-brand-primaryDark transition-colors flex justify-center items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <i className="fa-brands fa-telegram"></i> Join Telegram Group
            </a>
            <button
              onClick={closeModal}
              className="w-full bg-transparent text-brand-textMuted py-2 text-sm font-medium hover:text-brand-primaryDark transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
