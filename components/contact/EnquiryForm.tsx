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

      {/* Guidance Pointers */}
      <WhatToShare />

      {/* The Editorial Form */}
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
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Radhika Sharma"
            error={errors.name}
          />

          <FormField
            id="enquiry-email"
            type="email"
            label="EMAIL ADDRESS"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="name@domain.com"
            error={errors.email}
          />
        </div>

        {/* Row 2: Phone & Event Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <FormField
            id="enquiry-phone"
            type="tel"
            label="PHONE / WHATSAPP NUMBER"
            value={formData.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 98765 43210 (Optional)"
          />

          <FormField
            id="enquiry-eventType"
            type="select"
            label="CELEBRATION TYPE"
            value={formData.eventType}
            onChange={(e) => handleChange("eventType", e.target.value as EventType)}
            options={eventTypes.map((et) => ({ label: et, value: et }))}
          />
        </div>

        {/* Row 3: Date & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <FormField
            id="enquiry-date"
            label="ANTICIPATED DATE OR SEASON"
            value={formData.eventDate || ""}
            onChange={(e) => handleChange("eventDate", e.target.value)}
            placeholder="e.g. November 2026 or Winter 2026/27"
          />

          <FormField
            id="enquiry-location"
            label="LOCATION / VENUE"
            value={formData.location || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="e.g. Udaipur, Jaipur, or Goa"
          />
        </div>

        {/* Row 4: Message */}
        <div>
          <FormField
            id="enquiry-message"
            type="textarea"
            label="TELL US ABOUT YOUR PLANS"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Tell us a little about your celebration, family rituals, or the kind of moments you want to remember..."
            error={errors.message}
          />
        </div>

        {/* Submission Error Banner */}
        {submitError && (
          <div
            role="alert"
            className="p-4 rounded-[2px] bg-[#FAF2EF] border border-[#A63A2B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-espresso-primary"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#A63A2B] shrink-0" />
              <span>{submitError}</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={fallbackWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-gold-subtle hover:text-espresso-primary uppercase tracking-wider"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>OPEN WHATSAPP</span>
              </a>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#2C2523]/10 text-center sm:text-left">
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

      {/* Availability & Direct Details */}
      <ContactDetails />
    </section>
  );
}
