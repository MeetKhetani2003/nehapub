export default function Timeline() {
  const steps = [
    {
      num: 1,
      title: "Join Telegram Group",
      desc: "Click the join button to enter our official communication channel where all work is assigned securely.",
      delay: "",
      accent: false,
    },
    {
      num: 2,
      title: "Receive Work Details",
      desc: "Once joined, you will receive PDF files and detailed instructions on exactly what needs to be written.",
      delay: "delay-100",
      accent: false,
    },
    {
      num: 3,
      title: "Complete Assigned Pages",
      desc: "Write the content clearly in your notebook within the duration of your chosen comfortable package.",
      delay: "delay-200",
      accent: false,
    },
    {
      num: 4,
      title: "Submit Work",
      desc: "Scan or take clear high-quality photos of your handwritten pages and submit them through the designated process.",
      delay: "delay-300",
      accent: false,
    },
    {
      num: 5,
      title: "Payment Process",
      desc: "After quick quality verification, your guaranteed salary is processed and transferred directly to you.",
      delay: "delay-300",
      accent: true,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-surface border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-primaryDark mb-4">
            How It Works
          </h2>
          <p className="text-brand-textMuted text-lg max-w-2xl mx-auto">
            Start earning in five structured steps designed for your convenience.
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal active ${step.delay}`}
            >
              {/* Step circle */}
              {step.accent ? (
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200 bg-blue-50 text-brand-primary font-bold text-sm shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <i className="fa-solid fa-check"></i>
                </div>
              ) : (
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-brand-primary font-bold text-sm shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:bg-brand-primary group-hover:text-white group-hover:border-white">
                  {step.num}
                </div>
              )}

              {/* Step box */}
              <div
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-md ${
                  step.accent ? "border-l-4 border-l-brand-primary" : ""
                }`}
              >
                <h3 className="font-serif font-bold text-xl text-brand-primaryDark mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-textMuted text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal active">
          <a
            href="https://t.me/+-Tr7rSP30yQyZWFl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primaryDark text-white px-8 py-3.5 rounded-md font-medium hover:bg-brand-primary transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Step 1 Now <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
