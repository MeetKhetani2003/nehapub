export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-brand-surface bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left reveal active">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-brand-primary/20 bg-brand-primary/5 text-xs font-semibold text-brand-primary uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Trusted Work Opportunity
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-brand-primaryDark leading-[1.1] mb-6">
              Work From Home <br />
              <span className="text-brand-primary italic font-light">Handwriting Job</span>
            </h1>

            <p className="text-lg text-brand-textMuted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A reliable, flexible opportunity allowing you to earn a steady income through handwriting tasks. Manage your own schedule with guaranteed weekly payouts.
            </p>

            {/* Trust Badges List */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm font-medium text-brand-text">
                <i className="fa-solid fa-check text-brand-primary"></i> Work From Home
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-text">
                <i className="fa-solid fa-check text-brand-primary"></i> Weekly Payouts
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-text">
                <i className="fa-solid fa-check text-brand-primary"></i> Telegram Support
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://t.me/+-Tr7rSP30yQyZWFl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-brand-primaryDark transition-all flex items-center justify-center gap-3 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <i className="fa-brands fa-telegram text-xl"></i>
                JOIN TELEGRAM GROUP
              </a>
              <a
                href="#how-it-works"
                className="bg-white border border-gray-300 text-brand-text px-8 py-4 rounded-md font-medium text-lg hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Structured Image Side */}
          <div className="relative flex items-center justify-center reveal delay-200 mt-10 lg:mt-0 hidden md:block active">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-brand-primary rounded-xl transform translate-x-4 translate-y-4 opacity-10"></div>
              
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional work from home"
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-editorial border border-gray-100"
              />

              {/* Floating Data Tag */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-editorial border border-gray-100 z-20 flex items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-brand-primary mt-1">
                  <i className="fa-solid fa-shield-halved text-lg"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-1">
                    Guaranteed
                  </p>
                  <p className="font-serif font-bold text-xl text-brand-primaryDark">
                    Weekly Payouts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
