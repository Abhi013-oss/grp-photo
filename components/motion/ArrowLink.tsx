import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: ArrowLinkProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...linkProps}
      className={`group relative inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-espresso-primary hover:text-espresso-muted transition-colors pb-1 ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5 text-gold-subtle transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-subtle transition-all duration-300 ease-luxury group-hover:w-full" />
    </Link>
  );
}
