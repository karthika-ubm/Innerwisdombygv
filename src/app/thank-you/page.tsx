import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-4xl font-serif font-bold text-space-cadet">
          You’re In!
        </h1>
        <p className="text-lg text-slate-gray">
          Thank you for registering. You will receive the session details on
          your email and WhatsApp shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-coffee text-cream px-8 py-3 rounded-full font-medium hover:bg-space-cadet transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}