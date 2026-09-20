import { MessageCircle, ArrowUpRight } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function MobileStickyWhatsApp() {
  const whatsappUrl = createWhatsAppLink();

  return (
    <aside
      aria-label="Quick WhatsApp contact"
      className="fixed bottom-4 left-4 right-4 z-30 md:hidden pointer-events-none"
    >
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-3 rounded-full bg-[#FAF8F5]/96 backdrop-blur-md border border-[#2C2523]/15 text-espresso-primary shadow-editorial active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-2.5">
            <MessageCircle className="w-4 h-4 text-[#1E7D34]" />
            <span className="font-mono text-xs tracking-wider uppercase font-medium">
              WHATSAPP US
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-espresso-muted">
            <span>START CHAT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </aside>
  );
}
