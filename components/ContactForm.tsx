'use client';

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      if (!res.ok) throw new Error();
      setState("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 grid gap-4">
      <input name="name" required placeholder="Your Name" className="rounded-md border border-white/20 bg-transparent p-3" />
      <input name="email" required type="email" placeholder="Email" className="rounded-md border border-white/20 bg-transparent p-3" />
      <textarea name="message" required placeholder="How can we help?" className="min-h-28 rounded-md border border-white/20 bg-transparent p-3" />
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={state==="sending"}>{state==="sending" ? "Sending…" : "Send Message"}</Button>
        {state==="sent" && <span className="text-emerald-500 text-sm">Thanks! We'll be in touch.</span>}
        {state==="error" && <span className="text-red-500 text-sm">Something went wrong.</span>}
      </div>
    </form>
  );
}
