const benefits = [
  {
    title: "Break Limiting Patterns",
    description:
      "Identify and release the subconscious blocks that keep you stuck in the same cycles.",
  },
  {
    title: "Rebuild Self-Esteem",
    description:
      "Practical tools to rebuild confidence from the inside out — not just surface-level affirmations.",
  },
  {
    title: "Reconnect with Your Truth",
    description:
      "Learn how to hear your inner wisdom clearly and make decisions aligned with who you really are.",
  },
  {
    title: "Live Interactive Session",
    description:
      "Ask questions, get real-time guidance, and experience a safe space of transformation.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-space-cadet text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            What You Will Experience
          </h2>
          <p className="mt-4 text-tan max-w-2xl mx-auto">
            This is not another motivational talk. This is a deep, practical
            session designed to create real shifts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream/10 backdrop-blur rounded-xl p-6 border border-tan/20"
            >
              <div className="w-10 h-10 rounded-full bg-tan text-space-cadet flex items-center justify-center font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-cream/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}