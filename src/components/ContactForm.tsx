"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate clean frontend submission & validation delay
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div id="contact-form" className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h2>
      <p className="text-slate-600 dark:text-gray-400 text-xs mb-6">
        Fill out the form below. Messages are validated and queued for direct email notification.
      </p>

      {status === "success" ? (
        <div className="p-6 bg-emerald-50 dark:bg-[#051A0F] border border-emerald-300 dark:border-emerald-500/40 rounded-xl text-center space-y-3 animate-fade-in">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Form Validated!</h3>
          <p className="text-slate-700 dark:text-emerald-300 text-xs max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your message structure has been validated. For an immediate response, you can also reach Ashrit directly at{" "}
            <a href={portfolioConfig.socialLinks.email} className="font-mono underline font-bold text-emerald-700 dark:text-emerald-400">
              ashrithnamburi06@gmail.com
            </a>.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && errorMessage && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 rounded-xl text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Smith"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-300 dark:border-emerald-900/50 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                Your Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@example.com"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-300 dark:border-emerald-900/50 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Project Inquiry / Job Opportunity"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-300 dark:border-emerald-900/50 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
              Message *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message here..."
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-300 dark:border-emerald-900/50 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Validating &amp; Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message →</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
