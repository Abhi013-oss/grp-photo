"use client";

import React, { useState } from "react";
import { ArrowRight, MessageCircle, AlertCircle } from "lucide-react";
import { EventType, EnquiryFormData } from "@/lib/types";
import { eventTypes } from "@/data/contact";
import { FormField } from "./FormField";
import { ContactSuccess } from "./ContactSuccess";
import { WhatToShare } from "./WhatToShare";
import { ContactDetails } from "./ContactDetails";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    location: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Tell us a little about what you're planning.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please share a few more details (minimum 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    field: keyof EnquiryFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-level error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(
          result.message ||
            "Something didn't go through. Please try again or continue on WhatsApp."
        );
      }
    } catch (err) {
      setSubmitError(
        "Something didn't go through. Please try again or continue the conversation on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "Wedding",
      eventDate: "",
      location: "",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  const fallbackWhatsAppUrl = createWhatsAppLink({
    customMessage: formData.name
      ? `Hi, my name is ${formData.name}. I wanted to enquire about ${formData.eventType || "photography"} for my celebration.`
      : undefined,
  });

  if (isSuccess) {
    return (
      <section className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <ContactSuccess onReset={handleReset} name={formData.name} />
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      {/* Editorial Section Header */}
      <ScrollReveal variant="fade-up" duration={0.85}>
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3 block">
            WRITTEN ENQUIRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-4 text-center">
            Share your celebration plans.
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed text-center">
            Every love story is documented with unhurried care. Fill out as much as you know today, and we will follow up with warmth and clarity.
          </p>
        </div>
      </ScrollReveal>

      {/* Guidance Pointers */}
      <ScrollReveal variant="fade-up" duration={0.8} delay={0.1}>
        <WhatToShare />
      </ScrollReveal>

      {/* The Editorial Form */}
      <ScrollReveal variant="fade-up" duration={0.8} delay={0.15}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-8 bg-transparent"
          aria-label="Photography Celebration Enquiry Form"
        >
          {/* Anti-spam Honeypot Field (invisible to real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_comment">Leave this empty</label>
            <input
              id="hp_comment"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot || ""}
              onChange={(e) => handleChange("honeypot", e.target.value)}
            />
          </div>

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <FormField
              id="enquiry-name"
              label="YOUR NAME"
              type="text"
              required
              placeholder="Ananya Sharma"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={errors.name}
            />

            <FormField
              id="enquiry-email"
              label="EMAIL ADDRESS"
              type="email"
              required
              placeholder="ananya@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
            />
          </div>

          {/* Row 2: Phone / WhatsApp & Celebration Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <FormField
              id="enquiry-phone"
              label="PHONE / WHATSAPP (OPTIONAL)"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={errors.phone}
            />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="enquiry-type"
                className="text-[11px] font-mono tracking-widest text-espresso-primary uppercase"
              >
                CELEBRATION TYPE
              </label>
              <select
                id="enquiry-type"
                value={formData.eventType}
                onChange={(e) => handleChange("eventType", e.target.value as EventType)}
                className="w-full bg-transparent border-b border-[#2C2523]/30 focus:border-espresso-primary py-2.5 text-sm sm:text-base text-espresso-primary transition-colors focus:outline-none rounded-none cursor-pointer"
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type} className="bg-canvas text-espresso-primary">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Event Date & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <FormField
              id="enquiry-date"
              label="ANTICIPATED DATE OR SEASON"
              type="text"
              placeholder="November 2026 or Winter 2026/27"
              value={formData.eventDate || ""}
              onChange={(e) => handleChange("eventDate", e.target.value)}
              error={errors.eventDate}
            />

            <FormField
              id="enquiry-location"
              label="LOCATION / VENUE (CITY OR PALACE)"
              type="text"
              placeholder="Udaipur / Suryagarh Jaisalmer"
              value={formData.location || ""}
              onChange={(e) => handleChange("location", e.target.value)}
              error={errors.location}
            />
          </div>

          {/* Row 4: Message / Story */}
          <div>
            <FormField
              id="enquiry-message"
              label="TELL US ABOUT YOUR CELEBRATION"
              type="textarea"
              required
              rows={5}
              placeholder="Tell us what you are envisioning, any specific traditions or ceremonies planned, and what matters most to you about the photography..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              error={errors.message}
            />
          </div>

          {/* Submit Error Banner */}
          {submitError && (
            <div
              role="alert"
              className="p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{submitError}</span>
              </div>
              <a
                href={fallbackWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium underline hover:text-rose-950 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp instead</span>
              </a>
            </div>
          )}

          {/* Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-full bg-peach-soft hover:bg-peach-hover disabled:opacity-60 border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-subtle hover:shadow-editorial active:scale-[0.99] cursor-pointer mx-auto sm:mx-0"
            >
              <span>{isSubmitting ? "SENDING ENQUIRY..." : "SEND WRITTEN ENQUIRY"}</span>
              <ArrowRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] font-mono text-espresso-muted/80 uppercase tracking-wider text-center sm:text-right">
              All details kept private · Replies handled personally
            </p>
          </div>
        </form>
      </ScrollReveal>

      {/* Availability & Direct Details */}
      <ScrollReveal variant="fade-up" duration={0.8} delay={0.2}>
        <ContactDetails />
      </ScrollReveal>
    </section>
  );
}
