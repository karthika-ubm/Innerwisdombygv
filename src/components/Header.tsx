import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-8 flex justify-between items-center bg-cream/80 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/">
        <Image
          src="/logoIW.svg"
          alt="Inner Wisdom by Gargi Verma"
          width={180}
          height={60}
          className="h-10 w-auto object-contain"
          priority
        />
      </Link>
      <a
        href="#register"
        className="bg-space-cadet text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-coffee transition"
      >
        Register Now
      </a>
    </header>
  );
}