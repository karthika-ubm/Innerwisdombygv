const outcomes = [
  "Think with clarity and confidence — without constant second-guessing",
  "Break free from limiting beliefs that have defined your past",
  "Feel emotionally strong and grounded during challenges",
  "Build a healthier relationship with yourself",
  "Take consistent action instead of waiting for motivation",
  "Develop an abundant, possibility-focused mindset",
  "Become more intentional with your energy and focus",
  "Create healthier boundaries and meaningful relationships",
  "Feel more in control of your future",
  "Become the version of yourself you’ve always wanted to be",
];

export default function Transformation() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F8F5F0]">
      {/* Soft background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#D5B893_0%,_transparent_65%)] opacity-25" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-tan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-coffee/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-coffee" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-coffee">
              The Transformation
            </span>
            <div className="h-px w-8 bg-coffee" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-space-cadet">
            Where You Could Be
          </h2>
          
          <p className="mt-5 text-lg text-slate-gray leading-relaxed">
            Imagine waking up and realising you no longer think, react, or see
            yourself the way you used to.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-tan/30 shadow-sm hover:shadow-lg hover:border-tan/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Check icon */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tan/30 text-coffee flex items-center justify-center mt-0.5 group-hover:bg-coffee group-hover:text-cream transition-all duration-300">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              
              <p className="text-space-cadet leading-relaxed pt-0.5">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement + CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl sm:text-2xl text-coffee font-medium leading-relaxed max-w-2xl mx-auto">
            Your past may have shaped who you are today —  
            but it doesn’t have to define who you become tomorrow.
          </p>
          
          <div className="mt-10">
            <a
              href="https://rzp.io/rzp/hvbBq2W"
              className="inline-flex items-center gap-2 bg-coffee hover:bg-space-cadet text-cream font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Your Transformation
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}