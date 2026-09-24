import aachi from "../assets/images/brand-aachi.png";
import AU from "../assets/images/brand-au.png";
import cavinkare from "../assets/images/brand-cavinkare.png";
import paperboat from "../assets/images/brand-paperboat.png";

const defaultLogos = [
  {
    id: 1,
    name: "aachi",
    image: aachi,
  },
  {
    id: 2,
    name: "AU",
    image: AU,
  },
  {
    id: 3,
    name: "cavinkare",
    image: cavinkare,
  },
  {
    id: 4,
    name: "paperboat",
    image: paperboat,
  },
];

export default function PartnerLogos({ logos = defaultLogos }) {
  if (!logos.length) return null;

  // Duplicate logos for seamless infinite scrolling
  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-5 text-center">
        <p className="font-body text-sm font-extrabold uppercase tracking-widest text-brand-magenta">
          Our Partners
        </p>

        <h2 className="mt-2 font-display text-3xl font-bold text-[#1f1f1f] sm:text-4xl">
          Trusted by Leading Brands
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="
            pointer-events-none absolute left-0 top-0 z-10
            h-full w-16
            bg-gradient-to-r from-white to-transparent
            sm:w-28
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none absolute right-0 top-0 z-10
            h-full w-16
            bg-gradient-to-l from-white to-transparent
            sm:w-28
          "
        />

        <div className="animate-partner-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused] sm:gap-16">
          {" "}
          {scrollingLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="
                flex h-20 w-36
                shrink-0
                items-center justify-center
                rounded-xl
                bg-white
                px-5
                sm:h-24 sm:w-44
              "
            >
              <img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                className="
                  max-h-14
                  max-w-[130px]
                  object-contain
                  opacity-70
                  grayscale
                  transition-all duration-300
                  hover:opacity-100
                  hover:grayscale-0
                  sm:max-h-16
                  sm:max-w-[150px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
