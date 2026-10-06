import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gargi2.jpeg"
                alt="Gargi Verma"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-4 border-cream shadow-lg hidden sm:block">
              <Image
                src="/gargi1.jpeg"
                alt="Gargi Verma"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-slate-gray font-medium tracking-wide uppercase text-sm mb-2">
                Meet Your Coach
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-space-cadet">
                Gargi Verma
              </h2>
            </div>

            <p className="text-slate-gray leading-relaxed">
              Gargi is a Certified Life Coach, Business Communication Strategist,
              Counsellor, and Filmmaker who believes real transformation begins
              from within.
            </p>

            <p className="text-slate-gray leading-relaxed">
              She has trained over <strong>200 individuals</strong> to develop
              mental strength, emotional resilience, and a deeper understanding
              of their thought patterns and behaviours.
            </p>

            <p className="text-slate-gray leading-relaxed">
              Through mindset transformation, subconscious belief work, and
              energy practices, she helps people break free from self-imposed
              limitations and move towards the lives they truly desire.
            </p>

            <blockquote className="border-l-4 border-coffee pl-5 italic text-space-cadet font-medium">
              “You cannot create a new reality with the same thoughts, beliefs,
              and patterns that created your current one.”
            </blockquote>

            <div className="pt-2">
              <a
                 href={process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK}
                className="inline-block bg-coffee text-cream px-8 py-3.5 rounded-full font-medium hover:bg-space-cadet transition"
              >
                Join the Next Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}