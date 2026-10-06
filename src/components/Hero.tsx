import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { getSessionDisplay } from "@/lib/next-session";

export default function Hero() {
    const session = getSessionDisplay();
    const razorpayLink = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK;
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      
      {/* Rich Background */}
      <div className="absolute inset-0 bg-[#F8F5F0]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#D5B893_0%,_transparent_55%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#6F4038_0%,_transparent_50%)] opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D5B893]/25 to-transparent" />
      
      {/* Soft decorative circles */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#D5B893]/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-[#6F4038]/15 blur-3xl" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325344F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
           <div className="space-y-7">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-serif font-bold text-space-cadet leading-[1.15]">
                Unlock Your{" "}
                <span className="text-coffee">Inner Wisdom</span>
              </h1>
              
              <p className="mt-5 text-base sm:text-lg text-slate-gray max-w-md leading-relaxed">
                Break free from limiting patterns, rebuild confidence, and start 
                creating the life you actually want — from the inside out.
              </p>
            </div>

            {/* Info Cards - Now dynamic */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Date", value: session.date },
                { label: "Time", value: session.time },
                { label: "Language", value: session.language },
                { label: "Duration", value: session.duration },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3.5 border border-tan/40 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-[11px] text-slate-gray uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-semibold text-space-cadet text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Countdown */}
            <div>
              <p className="text-sm font-medium text-space-cadet mb-3">
                Next Session Starts In:
              </p>
              <CountdownTimer />
            </div>

            {/* CTA */}
            <div>
              <a
                href={razorpayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coffee hover:bg-space-cadet text-cream font-semibold px-9 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Register Now – ₹99
                <span>→</span>
              </a>
              
              <p className="mt-3.5 text-sm text-coffee font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-coffee rounded-full animate-pulse"></span>
                2,400+ people registered • Limited seats left
              </p>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-br from-tan/50 via-tan/20 to-coffee/15 rounded-3xl blur-2xl" />
              
              {/* Image */}
              <div className="relative w-72 sm:w-72 lg:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/gargi3.jpeg"
                  alt="Gargi Verma"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur text-space-cadet px-6 py-3 rounded-xl shadow-lg text-center min-w-[190px] border border-tan/30">
                <p className="font-bold text-[15px]">Gargi Verma</p>
                <p className="text-xs text-slate-gray mt-0.5">Resilience coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

