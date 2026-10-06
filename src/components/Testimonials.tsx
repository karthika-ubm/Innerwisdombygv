"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Phoebe Arijona",
    role: "VFX Supervisor & Filmmaker",
    location: "Spain",
    quote:
      "Working with her has meant so much to me. She really saw me. She helped me understand my emotions, calm the panic, and slowly find my way back to myself. Her guidance was gentle, honest, and deeply human.",
    image: "/pat.png",
  },
  {
    name: "Deepali Gaikwad",
    role: "Anchor",
    location: "Mumbai, India",
    quote:
      "Talking to her felt like I was finally talking to my soul. I was craving for this kind of peace since a long time. She is a genius.",
    image: "/dt.png",
  },
  {
    name: "Utkalika Sahoo",
    role: "Software Engineer",
    location: "Bangalore, India",
    quote:
      "Wooooohh, it was such an amazing session! You helped me find the lost me. I was lost somewhere in this busy life… thanks for showing me a path to discover myself again.",
    image: "/ut.png",
  },
  {
    name: "Chandana",
    role: "Event Manager",
    location: "Bangalore, India",
    quote:
      "Working with you was an incredible experience. You bring a rare mix of deep empathy and practical clarity. In just one session, you helped me organize my thoughts and feel confident about next steps.",
    image: "/ct.png",
  },
  {
    name: "Priyadarshini Devarajan",
    role: "Communication Tutor",
    location: "Tamil Nadu, India",
    quote:
      "Their training approach is practical, engaging, and focused on helping people apply what they learn. Ms. Gargi brings a strong combination of subject knowledge, practical insight, and an encouraging training style.",
    image: "/pt.png",
  },
];

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate content for seamless infinite loop
    const content = scroller.innerHTML;
    scroller.innerHTML = content + content;
  }, []);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F8F5F0]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D5B893_0%,_transparent_70%)] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-coffee" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-coffee">
              Client Love
            </span>
            <div className="h-px w-8 bg-coffee" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-space-cadet">
            What People Are Saying
          </h2>
          <p className="mt-4 text-lg text-slate-gray">
            Real stories from people who took the first step toward their inner wisdom.
          </p>
        </div>

        {/* Infinite Scrolling */}
        <div className="relative overflow-hidden">
          {/* Side fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F5F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F5F0] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollerRef}
            className="flex gap-6 w-max"
            style={{
              animation: "scroll 45s linear infinite",
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 border border-tan/30 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-tan">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-space-cadet text-[15px] leading-relaxed mb-6">
                  “{item.quote}”
                </p>

                {/* Person + Image */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-tan/20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-space-cadet text-sm">{item.name}</p>
                    <p className="text-xs text-slate-gray">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}