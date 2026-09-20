import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Grid } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-canvas text-espresso flex flex-col justify-between">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-subtle font-semibold mb-3">
          404 · STORY ARCHIVE
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl font-normal text-espresso-primary mb-4">
          Celebration Not Found
        </h1>

        <p className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed mb-8 max-w-md">
          The photographic story you are looking for may have been archived or moved. Please explore our active collection of celebration stories.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-peach-soft hover:bg-peach-hover border border-peach-border text-espresso-primary text-xs sm:text-sm font-medium tracking-wider transition-all shadow-subtle"
          >
            <Grid className="w-4 h-4 text-espresso-primary" />
            <span>VIEW ALL STORIES</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#2C2523]/20 hover:border-[#2C2523]/60 text-espresso-primary text-xs sm:text-sm font-medium tracking-wider transition-all"
          >
            <span>RETURN HOME</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
