"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("razorpay_payment_id");

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8F5F0] px-4">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-serif font-bold text-space-cadet">
          Payment Successful!
        </h1>

        <p className="text-slate-gray text-lg">
          Thank you for joining the <strong>Mind Healing Masterclass</strong>.
        </p>

        <p className="text-sm text-slate-gray">
          Click the button below to join the WhatsApp community group.
        </p>

        {/* Manual Button Only */}
        <a
          href="https://chat.whatsapp.com/ENbkiitkSGL8QZO0lHMXUD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3.5 rounded-full transition shadow-md hover:shadow-lg"
        >
          Join WhatsApp Group Now
        </a>

        {paymentId && (
          <p className="text-xs text-slate-gray mt-8">
            Payment ID: {paymentId}
          </p>
        )}
      </div>
    </main>
  );
}