import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BigBrandHeading from "../components/BigBrandHeading";
import { heroIntro, timeline, pillars, closing } from "../data/about";
import StatsCounter from "../components/StatsCounter";
import Testimonials from "../components/Testimonials";

import testimonialUser from "../assets/images/icon-user.png";
import PartnerLogos from "../components/PartnerLogos";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Happy Customer",
    review:
      "I've been shopping with ManiMark for years. The quality and service have always been wonderful.",
    rating: 5,
    image: testimonialUser,
  },
  {
    id: 2,
    name: "Rahul Kumar",
    designation: "Happy Customer",
    review:
      "Great products, great prices, and a really pleasant shopping experience every time.",
    rating: 5,
    image: testimonialUser,
  },
  {
    id: 3,
    name: "Anitha R",
    designation: "Happy Customer",
    review:
      "ManiMark has become one of my favourite places to shop. The staff are always friendly and helpful.",
    rating: 5,
    image: testimonialUser,
  },
];

function TimelineDot() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-brand-yellow ring-4 ring-white"
    />
  );
}

function BeginningSection({ entry }) {
  return (
    <div className="relative grid gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-14">
      <div className="absolute top-1/2 left-6 hidden -translate-y-1/2 md:left-1/2 md:block">
        <TimelineDot />
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={entry.image}
          alt={entry.imageAlt}
          className="w-full max-w-sm object-contain md:max-w-md"
        />
      </div>
      <div className="flex flex-col justify-center md:pl-8">
        {entry.sideImage && (
          <img
            src={entry.sideImage}
            alt={entry.sideImageAlt}
            className="mb-4 w-full max-w-[220px] self-end object-contain opacity-90"
          />
        )}
        <h2 className="font-display text-2xl font-semibold text-brand-magenta sm:text-3xl">
          {entry.title}
        </h2>
        <p className="mt-3 font-semibold text-neutral-900">{entry.heading}</p>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-brand-gray">
          {entry.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function NextGenSection({ entry }) {
  return (
    <div className="relative grid gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-14">
      <div className="absolute top-1/2 left-6 hidden -translate-y-1/2 md:left-1/2 md:block">
        <TimelineDot />
      </div>
      <div className="order-2 flex flex-col justify-center md:order-1 md:pr-8 md:text-right">
        <h2 className="font-display text-2xl font-semibold text-brand-magenta sm:text-3xl">
          {entry.title}
        </h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-brand-gray">
          {entry.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {entry.focus && (
          <div className="mt-3 text-[15px] leading-relaxed text-brand-gray">
            <p>{entry.focus.label}</p>
            <ul className="mt-1 space-y-1 md:list-inside">
              {entry.focus.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="order-1 flex items-end justify-center gap-6 md:order-2 md:justify-start">
        {entry.people.map((person) => (
          <div key={person.name} className="text-center">
            <img
              src={person.image}
              alt={`Sketch portrait of ${person.name}`}
              className="w-32 object-contain sm:w-40"
            />
            <p className="mt-2 text-sm font-semibold text-neutral-900">
              {person.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillarsSection({ pillars }) {
  const [brands, quality] = pillars;
  return (
    <div className="relative grid gap-10 py-10 md:grid-cols-2 md:gap-12 md:py-14">
      <div className="absolute top-1/2 left-6 hidden -translate-y-1/2 md:left-1/2 md:block">
        <TimelineDot />
      </div>
      <div className="text-center md:pr-8 md:text-right">
        <h2 className="font-display text-xl font-semibold text-brand-magenta sm:text-2xl">
          {brands.title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-gray">
          {brands.body}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:justify-end">
          {brands.logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain grayscale sm:h-10"
            />
          ))}
        </div>
      </div>
      <div
        id={quality.id}
        className="scroll-mt-24 text-center md:pl-8 md:text-left"
      >
        <h2 className="font-display text-xl font-semibold text-brand-magenta sm:text-2xl">
          {quality.title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-gray">
          {quality.body}
        </p>
        <ul className="mt-2 space-y-1 text-[15px] leading-relaxed text-brand-gray">
          {quality.list.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-[#F5F5F7]">
        <section className="mx-auto max-w-[1200px] px-4 pt-6 text-center md:px-8">
          <BigBrandHeading
            variant="gradient"
            className="text-[15vw] sm:text-[110px] md:text-[140px]"
          >
            Manimark
          </BigBrandHeading>
          <div className="mx-auto -mt-4 max-w-lg sm:-mt-8">
            <p className="font-semibold text-neutral-900">
              {heroIntro.eyebrow}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-gray">
              {heroIntro.body}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-4 md:px-8">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-6 hidden w-px bg-neutral-300 md:left-1/2 md:block"
            />
            <BeginningSection entry={timeline[0]} />
            <NextGenSection entry={timeline[1]} />
            <PillarsSection pillars={pillars} />
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-4 pb-16 text-center md:px-8">
          <p className="font-semibold text-neutral-900">{closing.title}</p>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed whitespace-pre-line text-brand-gray">
            {closing.body}
          </p>
        </section>
      </main>
      <StatsCounter />
      <Testimonials testimonials={testimonials} />
      <PartnerLogos />
      <Footer />
    </>
  );
}
