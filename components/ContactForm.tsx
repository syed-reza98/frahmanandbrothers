'use client';

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@frahmanandbrothers.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 grid gap-4">
      <input 
        name="name" 
        required 
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name" 
        className="rounded-md border-2 border-green-200 bg-white p-3 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100" 
      />
      <input 
        name="email" 
        required 
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email" 
        className="rounded-md border-2 border-green-200 bg-white p-3 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100" 
      />
      <textarea 
        name="message" 
        required
        value={formData.message}
        onChange={handleChange}
        placeholder="How can we help?" 
        className="min-h-32 rounded-md border-2 border-green-200 bg-white p-3 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100" 
      />
      <div className="flex items-center gap-3">
        <Button type="submit">Send Message</Button>
        <span className="text-sm text-gray-600">Opens your email client</span>
      </div>
    </form>
  );
}
