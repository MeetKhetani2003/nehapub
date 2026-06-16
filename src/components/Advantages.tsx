export default function Advantages() {
  const items = [
    {
      icon: "fa-solid fa-house",
      title: "100% Work From Home",
      desc: "Complete all your assigned tasks from the comfort of your own home. No office visits required ever.",
      delay: "delay-100",
    },
    {
      icon: "fa-regular fa-clock",
      title: "Flexible Working Hours",
      desc: "Work at your own pace. Whether it's morning, afternoon, or late night, you set your own schedule.",
      delay: "delay-200",
    },
    {
      icon: "fa-solid fa-wallet",
      title: "Weekly Payout Support",
      desc: "Enjoy reliable and transparent payment cycles. Get compensated for your hard work every week.",
      delay: "delay-300",
    },
    {
      icon: "fa-brands fa-telegram",
      title: "Telegram-Based Work",
      desc: "Seamless communication, assignment delivery, and support directly through our official Telegram group.",
      delay: "delay-100",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Easy Process",
      desc: "A straightforward system designed for efficiency. Get your work, complete it, submit, and get paid.",
      delay: "delay-200",
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "Beginner Friendly",
      desc: "No prior experience needed. If you have clear handwriting, you are highly qualified to start earning.",
      delay: "delay-300",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primaryDark">
            Our Core Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-brand-surface p-8 rounded-xl border border-gray-200 hover:border-brand-primary hover:shadow-editorial-hover transition-all duration-300 reveal active ${item.delay}`}
            >
              <div className="w-12 h-12 bg-white rounded-md shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-brand-primary">
                <i className={`${item.icon} text-xl`}></i>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primaryDark mb-3">
                {item.title}
              </h3>
              <p className="text-brand-textMuted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
