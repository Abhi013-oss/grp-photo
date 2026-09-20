import { photographerData } from "@/data/about";

export function PhotographerStory() {
  return (
    <section className="w-full bg-[#F4EFEB] py-24 sm:py-32 border-t border-b border-[#2C2523]/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="space-y-16 sm:space-y-20">
          {photographerData.storyBlocks.map((block, index) => (
            <div
              key={block.heading}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline pt-10 first:pt-0 border-t border-[#2C2523]/10 first:border-t-0"
            >
              {/* Heading */}
              <div className="md:col-span-4">
                <span className="text-xs font-mono tracking-[0.25em] text-gold-subtle font-semibold block mb-1">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-primary tracking-wide">
                  {block.heading}
                </h3>
              </div>

              {/* Story Paragraphs */}
              <div className="md:col-span-8 space-y-4">
                {block.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-sm sm:text-base text-espresso-muted font-light leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
