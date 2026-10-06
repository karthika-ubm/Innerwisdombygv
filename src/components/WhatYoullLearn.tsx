const learnings = [
  {
    title: "Master Your Mindset",
    text: "Understand how your everyday thoughts shape your decisions, confidence, and the direction of your life.",
  },
  {
    title: "Reprogram Limiting Beliefs",
    text: "Identify the old beliefs that quietly stop you from pursuing opportunities, relationships, and growth.",
  },
  {
    title: "Understand Your Subconscious",
    text: "Discover how deep thought patterns and emotional conditioning influence your behaviour without you realising.",
  },
  {
    title: "Transform Thought Patterns",
    text: "Learn to recognise negative cycles, challenge unhelpful inner dialogue, and respond differently.",
  },
  {
    title: "Align Energy & Emotions",
    text: "Explore how your emotional state and daily habits affect the energy you bring into every area of life.",
  },
  {
    title: "Break Self-Sabotage",
    text: "Recognise procrastination, fear of failure, overthinking, and resistance that keep you stuck.",
  },
  {
    title: "Build Emotional Resilience",
    text: "Navigate uncertainty, rejection, and setbacks without losing sight of your growth.",
  },
  {
    title: "Create a New Vision",
    text: "Get clear on the person you want to become and the practical steps to start moving there.",
  },
];

export default function WhatYoullLearn() {
  return (
    <section className="py-16 lg:py-24 bg-space-cadet text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            What You’ll Learn in This Masterclass
          </h2>
          <p className="mt-4 text-tan">
            This is more than positive thinking.  
            It’s about understanding what’s happening inside your mind — and changing the patterns that hold you back.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {learnings.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-cream/10 rounded-xl p-5 border border-tan/20"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tan text-space-cadet flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}