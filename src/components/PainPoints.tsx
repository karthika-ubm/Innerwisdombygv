const points = [
  {
    title: "Overthinking Every Decision",
    text: "You spend so much time thinking about what could go wrong that you struggle to take the first step.",
    image: "/overthinking.jpeg", // person thinking / overwhelmed
  },
  {
    title: "Feeling Stuck Despite Your Potential",
    text: "Deep down you know you’re capable of more, but your current reality doesn’t match the life you imagine.",
    image: "/feelingstuck1.jpeg", // person looking out window / stuck feeling
  },
  {
    title: "Struggling with Self-Doubt",
    text: "You constantly question your abilities, compare yourself with others, and wonder if you’re good enough.",
    image: "/selfdoubt.jpeg", // mirror / self-reflection
  },
  {
    title: "Repeating the Same Patterns",
    text: "You feel motivated for a few days… then fall back into the same old habits and routines.",
    image: "/samepattern1.jpeg", // circular / looping feeling
  },
  {
    title: "Knowing What to Do but Not Doing It",
    text: "You read books, watch videos, make plans — yet struggle to turn knowledge into consistent action.",
    image: "notdoing.jpeg", // person with checklist / procrastination
  },
  {
    title: "Waiting for the ‘Right Time’",
    text: "You keep telling yourself you’ll start when you have more confidence, money, or clarity.",
    image: "/righttime.jpeg", // person looking at clock / waiting feeling
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F8F5F0]">
      {/* Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D5B893_0%,_transparent_70%)] opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-coffee" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-coffee">
              The Reality Check
            </span>
            <div className="h-px w-8 bg-coffee" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-space-cadet">
            Where You Are Today
          </h2>
          
          <p className="mt-5 text-lg text-slate-gray leading-relaxed">
            You have dreams. You know you’re capable of more.  
            So why does it feel like you’re standing in the same place?
          </p>
        </div>

        {/* Image + Text Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-tan/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Number */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-space-cadet text-cream flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-semibold text-space-cadet text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl bg-white border border-tan/40 rounded-2xl px-8 py-6 shadow-sm">
            <p className="text-lg sm:text-xl text-coffee font-medium leading-relaxed">
              What if the biggest obstacle isn’t a lack of potential…  
              but a set of patterns you haven’t yet learned how to change?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}