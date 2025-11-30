"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`Name: ${form.name || 'N/A'}\nEmail: ${form.email || 'N/A'}\n\n${form.message || ''}`);
    window.location.href = `mailto:ysean54@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="Contact"
      className="relative isolate w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24 overflow-hidden text-white"
    >
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
        <div className="absolute -left-16 top-6 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Let Us Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Need to connect? Contact my email and I will reply to you soon.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-fuchsia-500/10">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <Link href="mailto:ysean54@yahoo.com" className="text-sm text-slate-200 hover:text-white">
                    ysean54@yahoo.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-fuchsia-500/15 backdrop-blur">
          <div className="mb-4 text-left">
            <p className="text-sm text-slate-300">Send a message</p>
            <h3 className="text-2xl font-semibold text-white">Send me a message</h3>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col text-sm text-slate-200">
                Name
                <input
                  className="mt-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white shadow-inner shadow-black/30 outline-none transition focus:border-fuchsia-300/70 focus:ring-2 focus:ring-fuchsia-500/40"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className="flex flex-col text-sm text-slate-200">
                Email
                <input
                  className="mt-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white shadow-inner shadow-black/30 outline-none transition focus:border-fuchsia-300/70 focus:ring-2 focus:ring-fuchsia-500/40"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className="flex flex-col text-sm text-slate-200">
              Message
              <textarea
                className="mt-2 min-h-[140px] rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white shadow-inner shadow-black/30 outline-none transition focus:border-fuchsia-300/70 focus:ring-2 focus:ring-fuchsia-500/40"
                name="message"
                placeholder="Share details about the project, timeline, or goals..."
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send email
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
