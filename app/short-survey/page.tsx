"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Image from "next/image";

const roles = ["Creator", "Viewer", "Influencer", "Other"];
const countryCodes = [
  { code: "+60", label: "Malaysia (+60)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+62", label: "Indonesia (+62)" },
  { code: "+91", label: "India (+91)" },
  { code: "+86", label: "China (+86)" },
  { code: "+63", label: "Philippines (+63)" },
  { code: "+84", label: "Vietnam (+84)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+82", label: "South Korea (+82)" },
  { code: "+1", label: "USA/Canada (+1)" },
];

export default function ShortSurveyPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phoneCode: "+60",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.role || !form.email) {
      setError("Please fill in name, role, and email.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "surveyLeads"), {
        ...form,
        phoneFull: form.phone ? `${form.phoneCode} ${form.phone}` : "",
        createdAt: serverTimestamp(),
      });
      setSuccess("Thanks! We’ll be in touch.");
      setTimeout(() => router.push("/"), 800);
    } catch (err) {
      setError("Could not submit right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.5)] p-6 sm:p-8 space-y-6">
        <div className="space-y-3 text-center">
          <div className="mx-auto h-17 w-17 relative">
            <Image src="/3dlogo.png" alt="Ozone logo" fill className="object-contain" priority />
          </div>
          <span className="px-2 text-3xl sm:text-4xl font-extrabold tracking-[0.22em] uppercase bg-gradient-to-b from-cyan-200 via-teal-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(34,211,238,0.35)]">
            ozone
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold">Be the first to experience.</h1>
          <p className="text-sm text-white/70">
            Malaysia’s streaming platform for movies, creators, and entertainments. 
            Share your details and we’ll reach out with early access and updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-white/80">Name *</label>
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/80">Role *</label>
            <select
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
              value={form.role}
              onChange={(e) => handleChange("role", e.target.value)}
              required
            >
              <option value="" disabled>
                Select role
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/80">Email *</label>
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/80">Phone (optional)</label>
            <div className="flex gap-2">
              <select
                className="w-35 sm:w-35 rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                value={form.phoneCode}
                onChange={(e) => handleChange("phoneCode", e.target.value)}
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Phone number"
              />
            </div>
          </div>

          {error && <p className="text-sm text-rose-300">{error}</p>}
          {success && <p className="text-sm text-teal-200">{success}</p>}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-black shadow-lg shadow-teal-500/30 transition hover:shadow-teal-500/50 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
