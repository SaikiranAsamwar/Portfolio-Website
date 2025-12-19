

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="card max-w-2xl space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">📬 Let's Connect</h3>
      <div className="grid gap-3 sm:gap-4">
        <div className="relative">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            aria-label="Your name"
            className="w-full p-3 sm:p-4 glass rounded-xl text-black dark:text-white placeholder-gray-600 dark:placeholder-white/60 focus:ring-2 focus:ring-gray-500 transition-all outline-none text-sm sm:text-base"
          />
        </div>
        <div className="relative">
          <input
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your email"
            aria-label="Your email address"
            className="w-full p-3 sm:p-4 glass rounded-xl text-black dark:text-white placeholder-gray-600 dark:placeholder-white/60 focus:ring-2 focus:ring-gray-500 transition-all outline-none text-sm sm:text-base"
            type="email"
          />
        </div>
        <div className="relative">
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message"
            aria-label="Your message"
            className="w-full p-3 sm:p-4 glass rounded-xl text-black dark:text-white placeholder-gray-600 dark:placeholder-white/60 focus:ring-2 focus:ring-gray-500 transition-all outline-none h-32 sm:h-40 resize-none text-sm sm:text-base"
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <button 
            type="submit" 
            className="btn btn-primary w-full md:w-auto group text-sm sm:text-base"
            disabled={status === "sending"}
          >
            <span className="flex items-center justify-center gap-2">
              {status === "sending" ? "Sending..." : "Send Message"}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
        {status && (
          <div className={`p-4 rounded-xl glass text-center font-medium ${
            status === "sent" ? "text-green-400" : 
            status === "error" ? "text-red-400" : "text-white"
          }`}>
            {status === "sending" && "✨ Sending your message..."}
            {status === "sent" && "✅ Message sent successfully! I'll reply soon!"}
            {status === "error" && "❌ Oops! Something went wrong. Please try again."}
          </div>
        )}
      </div>
    </form>
  );
}