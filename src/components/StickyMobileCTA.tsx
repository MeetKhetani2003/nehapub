export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] reveal active">
      <a
        href="https://t.me/+-Tr7rSP30yQyZWFl"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-brand-primary text-white py-3.5 rounded-md font-bold text-sm text-center flex justify-center items-center gap-2 active:bg-brand-primaryDark transition-colors shadow-sm"
      >
        <i className="fa-brands fa-telegram text-lg"></i> Join Telegram Group
      </a>
    </div>
  );
}
