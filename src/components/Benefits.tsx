export default function Benefits() {
  const benefits = [
    {
      icon: "fa-solid fa-house-user",
      title: "Work From Home",
      desc: "Total comfort and zero commute time. Work exclusively from your own residence.",
      delay: "delay-100",
    },
    {
      icon: "fa-solid fa-calendar-check",
      title: "Flexible Timing",
      desc: "You are your own boss regarding hours. Choose when you want to write.",
      delay: "delay-200",
    },
    {
      icon: "fa-solid fa-building-circle-xmark",
      title: "No Office Visits",
      desc: "Everything is handled entirely digitally. No meetings or physical reporting required.",
      delay: "delay-300",
    },
    {
      icon: "fa-brands fa-telegram",
      title: "Telegram System",
      desc: "A secure, fast, and familiar communication channel for all assignments.",
      delay: "delay-100",
    },
    {
      icon: "fa-solid fa-arrow-right-to-bracket",
      title: "Easy Joining Process",
      desc: "A simple onboarding process without complex interviews or long waits.",
      delay: "delay-200",
    },
    {
      icon: "fa-solid fa-headset",
      title: "Weekly Support",
      desc: "Our dedicated admin team is always ready to help you succeed every week.",
      delay: "delay-300",
    },
  ];

  return (
    <section className="py-24 bg-brand-primaryDark text-white border-t border-brand-primary/20 bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-16 text-center reveal active">
          Benefits of Working With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((item, idx) => (
            <div key={idx} className={`flex items-start gap-4 reveal active ${item.delay}`}>
              <div className="bg-brand-primary p-3 rounded-md text-white shrink-0 border border-blue-400/20">
                <i className={`${item.icon} text-lg`}></i>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
