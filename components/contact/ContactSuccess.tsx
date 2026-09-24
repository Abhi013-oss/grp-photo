"use client";

import { MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface ContactSuccessProps {
  onReset: () => void;
  name: string;
}

export function ContactSuccess({ onReset, name }: ContactSuccessProps) {
  const whatsappUrl = createWhatsAppLink({
    customMessage: `Hello Guri Rupal Photography, I just submitted an enquiry for ${name} on your website and wanted to connect here as well.`,
  });

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full py-16 sm:py-24 px-6 sm:px-12 bg-surface-ivory/60 border border-gold-subtle/30 rounded-[2px] text-center my-8 shadow-editorial transition-all"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Subtle Success Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach-soft text-espresso-primary text-xs font-mono tracking-widest uppercase mb-6 border border-peach-border">
          <CheckCircle2 className="w-3.5 h-3.5 text-gold-subtle" />
          <span>MESSAGE RECEIVED</span>
        </div>

        {/* Heading */}
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso-primary tracking-tight leading-[1.15] mb-4">
          Thank you. We&apos;ll be in touch.
        </h3>

        {/* Supportive narrative */}
        <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed mb-8 max-w-md">
          Your story is now on our radar. We will review your celebration details with genuine care. If you&apos;d prefer to continue the conversation immediately, you can also reach us on WhatsApp.
        </p>

        {/* WhatsApp Continuation CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-[0.1em] transition-all duration-300 shadow-editorial hover:shadow-hover active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#1E7D34] group-hover:scale-110 transition-transform" />
            <span>CONTINUE ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4 text-espresso-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onReset}
            type="button"
            className="text-xs font-mono tracking-widest uppercase text-espresso-muted hover:text-espresso-primary transition-colors py-2 border-b border-transparent hover:border-espresso-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    </div>
  );
}
