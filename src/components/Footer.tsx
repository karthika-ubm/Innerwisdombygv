import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-space-cadet text-cream pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-10">
          
          {/* Brand + Logo */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logo11.png"
                alt="Inner Wisdom by Gargi Verma"
                width={180}
                height={55}
                className="h-12 sm:h-14 w-auto mx-auto md:mx-0 object-contain"
                priority
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Helping you break limiting patterns, rebuild confidence, and reconnect with your true self.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-tan mb-5 text-sm uppercase tracking-wider">
              Connect
            </h4>
            
            <div className="flex justify-center md:justify-start items-center gap-4">
              
              {/* Email Icon */}
              <a
                href="mailto:connect.gargiverma@gmail.com"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-tan hover:text-space-cadet transition"
                aria-label="Email"
                title="connect.gargiverma@gmail.com"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_innerwisdombygargi_?stkn=dDN2OGY2bTRidDRu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-tan hover:text-space-cadet transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gargi-verma-7b6606212/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-tan hover:text-space-cadet transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-cream/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Inner Wisdom by Gargi Verma. All rights reserved.</p>
          <p className="text-cream/50">Made with ❤️ for transformation</p>
        </div>
      </div>
    </footer>
  );
}