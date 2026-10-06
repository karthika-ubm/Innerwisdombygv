"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone number required"),
});

type FormData = z.infer<typeof schema>;

export default function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Registration failed");

      router.push("/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          placeholder="Your Full Name"
          className="w-full px-4 py-3 rounded-lg border border-slate-gray/30 focus:outline-none focus:ring-2 focus:ring-tan bg-white text-space-cadet"
        />
        {errors.name && (
          <p className="text-coffee text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg border border-slate-gray/30 focus:outline-none focus:ring-2 focus:ring-tan bg-white text-space-cadet"
        />
        {errors.email && (
          <p className="text-coffee text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="WhatsApp Number"
          className="w-full px-4 py-3 rounded-lg border border-slate-gray/30 focus:outline-none focus:ring-2 focus:ring-tan bg-white text-space-cadet"
        />
        {errors.phone && (
          <p className="text-coffee text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {error && <p className="text-coffee text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-coffee hover:bg-space-cadet text-cream font-semibold py-4 rounded-lg transition-colors duration-300 disabled:opacity-60"
      >
        {loading ? "Registering..." : "Reserve My Seat – Free"}
      </button>

      <p className="text-center text-sm text-slate-gray">
        100% Free • Limited Seats • Instant Confirmation
      </p>
    </form>
  );
}