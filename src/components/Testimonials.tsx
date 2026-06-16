export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: '"This handwriting job is perfect for me as a homemaker. I manage my time and get paid exactly on time every week. The Telegram support is incredibly fast."',
      name: "Priya Sharma",
      package: "Starter Package",
      img: "https://i.pravatar.cc/150?img=5",
      delay: "delay-100",
    },
    {
      stars: 5,
      text: '"I was skeptical at first, but taking the Professional package was the best decision. The instructions are clear, and the payout is 100% genuine. Highly recommend."',
      name: "Anjali Desai",
      package: "Professional Package",
      img: "https://i.pravatar.cc/150?img=9",
      delay: "delay-200",
    },
    {
      stars: 5,
      text: '"Very simple and straightforward process. Joining the Telegram group was easy, and I got my first assignment within a day. Perfect side income opportunity."',
      name: "Meera Patel",
      package: "Expert Package",
      img: "https://i.pravatar.cc/150?img=1",
      delay: "delay-300",
    },
  ];

  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block text-blue-600">
            Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-primaryDark mb-4">
            What Our Writers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-xl border border-gray-200 shadow-sm reveal active hover:shadow-md transition-all duration-300 ${rev.delay}`}
            >
              <div className="text-[#F59E0B] mb-4 flex gap-1 text-xs">
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-brand-text font-medium mb-8 text-sm leading-relaxed">
                {rev.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={rev.img}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover grayscale opacity-80"
                />
                <div>
                  <h5 className="font-serif font-bold text-sm text-brand-primaryDark">
                    {rev.name}
                  </h5>
                  <span className="text-[10px] font-bold text-brand-textMuted uppercase tracking-wider">
                    {rev.package}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
