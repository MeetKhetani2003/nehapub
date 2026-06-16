export default function Pricing() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">
            Earnings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-primaryDark mb-4">
            Choose Your Package
          </h2>
          <p className="text-brand-textMuted text-lg max-w-2xl mx-auto">
            Select a workload that perfectly fits your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {/* Package 1 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col h-full reveal delay-100 active hover:border-brand-primary hover:shadow-md transition-all duration-300">
            <h3 className="font-sans font-bold text-brand-textMuted mb-2 uppercase tracking-widest text-sm">
              Starter
            </h3>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <span className="font-serif text-4xl font-bold text-brand-primaryDark">
                ₹22,000
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-brand-text text-sm">
                <i className="fa-solid fa-check text-brand-primary mr-3"></i>
                <span>
                  <strong>50 Pages</strong> workload
                </span>
              </li>
              <li className="flex items-center text-brand-text text-sm">
                <i className="fa-solid fa-check text-brand-primary mr-3"></i>
                <span>
                  <strong>7 Days</strong> duration
                </span>
              </li>
              <li className="flex items-center text-brand-text text-sm">
                <i className="fa-solid fa-check text-brand-primary mr-3"></i>
                Telegram Support
              </li>
            </ul>
            <a
              href="https://t.me/+-Tr7rSP30yQyZWFl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-brand-surface text-brand-primaryDark border border-gray-200 font-medium py-3 rounded-md hover:bg-gray-100 transition-colors text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Select Starter
            </a>
          </div>

          {/* Package 2 (Most Popular) */}
          <div className="relative reveal delay-200 active z-10">
            <div className="bg-brand-primaryDark rounded-xl p-8 shadow-xl relative flex flex-col h-full border border-brand-primary md:-my-4">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white font-bold px-4 py-1 rounded text-xs uppercase tracking-widest shadow-sm border border-blue-400/30">
                Most Popular
              </div>
              <h3 className="font-sans font-bold text-blue-200 mb-2 uppercase tracking-widest text-sm mt-2">
                Professional
              </h3>
              <div className="mb-6 pb-6 border-b border-brand-primary/30">
                <span className="font-serif text-5xl font-bold text-white">
                  ₹30,000
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-200 text-sm">
                  <i className="fa-solid fa-star text-brand-accent mr-3 animate-spin-slow"></i>
                  <span>
                    <strong>80 Pages</strong> workload
                  </span>
                </li>
                <li className="flex items-center text-gray-200 text-sm">
                  <i className="fa-solid fa-star text-brand-accent mr-3"></i>
                  <span>
                    <strong>15 Days</strong> duration
                  </span>
                </li>
                <li className="flex items-center text-gray-200 text-sm">
                  <i className="fa-solid fa-check text-brand-accent mr-3 text-white/50"></i>
                  Priority VIP Support
                </li>
                <li className="flex items-center text-gray-200 text-sm">
                  <i className="fa-solid fa-check text-brand-accent mr-3 text-white/50"></i>
                  Bonus Eligibility
                </li>
              </ul>
              <a
                href="https://t.me/+-Tr7rSP30yQyZWFl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-brand-primary text-white font-medium py-3 rounded-md hover:bg-brand-accentHover transition-colors text-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                Select Professional
              </a>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col h-full reveal delay-300 active hover:border-brand-primary hover:shadow-md transition-all duration-300">
            <h3 className="font-sans font-bold text-brand-textMuted mb-2 uppercase tracking-widest text-sm">
              Expert
            </h3>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <span className="font-serif text-4xl font-bold text-brand-primaryDark">
                ₹45,000
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-brand-text text-sm">
                <i className="fa-solid fa-check text-brand-primary mr-3"></i>
                <span>
                  <strong>120 Pages</strong> workload
                </span>
              </li>
              <li className="flex items-center text-brand-text text-sm">
                <i className="fa-solid fa-check text-brand-primary mr-3"></i>
                <span>
                  <strong>30 Days</strong> duration
                </span>
              </li>
              <li className="flex items-center text-brand-text text-sm">
                <i className="fa-solid fa-check text-brand-primary mr-3"></i>
                Telegram Support
              </li>
            </ul>
            <a
              href="https://t.me/+-Tr7rSP30yQyZWFl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-brand-surface text-brand-primaryDark border border-gray-200 font-medium py-3 rounded-md hover:bg-gray-100 transition-colors text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Select Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
