const audiences = [
  {
    title: "You Feel Stuck, But You Want More",
    text: "You wake up knowing something needs to change, but you don’t know where to start. You overthink, postpone, and wonder “What am I even doing with my life?”",
    image: "/wantmore.jpeg", // thoughtful / stuck feeling
  },
  {
    title: "Life Has Hit You Hard",
    text: "Rejection, failure, heartbreak, burnout, or a phase where nothing went your way. You’re trying to move forward while still recovering.",
    image: "/hithard1.jpeg", // emotional / rainy mood
  },
  {
    title: "You’ve Lost a Little Bit of Yourself",
    text: "You’ve spent so much time being there for everyone else that you’ve forgotten what you actually want. You want to feel like yourself again.",
    image: "/losturself.jpeg", // reflection / looking in mirror feeling
  },
  {
    title: "You’re Ready to Start Again — Differently",
    text: "You don’t need someone telling you how to live. You need help to slow down, understand what’s really going on, and take the next step with confidence.",
    image: "/startagain.jpeg", // new beginning / path
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-space-cadet">
      {/* Soft glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-coffee/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-tan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tan">
              Is This For You?
            </span>
            <div className="h-px w-8 bg-tan" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-cream">
            Who Is This Masterclass For?
          </h2>
          <p className="mt-5 text-lg text-cream/80">
            Maybe you’re not “broken.”  
            Maybe you’re just tired of figuring everything out on your own.
          </p>
        </div>

        {/* Cards with Images */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/95 via-space-cadet/70 to-space-cadet/30" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-cream mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-cream/85 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-7 text-tan max-w-xl mx-auto">
            Maybe you don’t need a completely new life.  
            Maybe you just need a new way of looking at the one you already have.
          </p>
          <a
            href="https://rzp.io/rzp/hvbBq2W"
            className="inline-flex items-center gap-2 bg-tan hover:bg-cream text-space-cadet font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}