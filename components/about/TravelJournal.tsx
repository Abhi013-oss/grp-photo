import Image from "next/image";
import { Compass } from "lucide-react";

interface JournalEntry {
  title: string;
  region: string;
  image: string;
  note: string;
}

const entries: JournalEntry[] = [
  {
    title: "Sacred Dawns on the Ghats",
    region: "Varanasi, Uttar Pradesh",
    image: "/images/destination-varanasi-morning-ghats.jpg",
    note: "Awakening at 4:30 AM to witness the morning mist lifting off the sacred Ganges. There is a deep, eternal stillness here that grounds every frame in reverent humility.",
  },
  {
    title: "Sandstone Reflections on Lake Pichola",
    region: "Udaipur, Rajasthan",
    image: "/images/pro-destination-lake-palace-udaipur.jpg",
    note: "Light reflected off the water softens the majestic Rajput architecture, creating a natural golden diffusion that requires zero artificial manipulation.",
  },
  {
    title: "Kasavu Weaves & Palm Canals",
    region: "Kumarakom, Kerala",
    image: "/images/destination-kerala-backwaters.jpg",
    note: "The rhythm of temple nadaswarams across tranquil backwaters. Photographing unions here is an exercise in unhurried grace and sensory harmony.",
  },
  {
    title: "High Mountain Light & Solitude",
    region: "Ladakh & Western Himalayas",
    image: "/images/destination-ladakh-pangong-lake.jpg",
    note: "At 14,000 feet, the crystal clarity of alpine light strips away all pretense, revealing the pure, raw emotional connection between two souls.",
  },
];

export function TravelJournal() {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#2C2523]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEB] border border-[#2C2523]/10 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-espresso-muted mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-subtle" />
            <span>FIELD DIARY · ACROSS THE SUBCONTINENT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-espresso-primary mb-4">
            Field Notes from India&apos;s Revered Horizons
          </h2>

          <p className="font-sans text-sm sm:text-base text-espresso-muted leading-relaxed font-normal">
            Every region in India has its own heartbeat, distinct daylight quality, and sacred ritual pacing. Traveling alongside families across these landscapes is my greatest privilege.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {entries.map((entry) => (
            <div
              key={entry.title}
              className="group flex flex-col bg-[#F4EFEB] rounded-lg overflow-hidden border border-[#2C2523]/8 transition-all duration-500 hover:shadow-editorial"
            >
              <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-[#ECE6E0]">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-primary/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-[#FAF8F5]">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 block mb-1">
                    {entry.region}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    {entry.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="font-sans text-sm text-espresso-muted leading-relaxed italic">
                  &ldquo;{entry.note}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
