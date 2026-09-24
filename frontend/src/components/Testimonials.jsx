import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials({ testimonials = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) return null;

  const current = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-2 font-body text-sm font-extrabold uppercase tracking-wider text-brand-magenta">
            Customer Stories
          </p>

          <h2 className="font-display text-4xl font-bold text-[#1f1f1f] sm:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 font-body text-base text-brand-gray sm:text-lg">
            We're proud to be part of so many happy shopping experiences.
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative mx-auto max-w-4xl">
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-brand-pink-soft
              px-6 py-10
              shadow-sm
              sm:px-12 sm:py-12
              lg:px-16
            "
          >
            {/* Quote icon */}
            <div
              className="
                absolute right-6 top-5
                flex h-14 w-14 items-center justify-center
                rounded-full
                bg-brand-yellow
                text-brand-magenta
                sm:right-10 sm:top-8
              "
            >
              <Quote size={26} fill="currentColor" />
            </div>

            {/* Stars */}
            <div className="mb-6 flex gap-1">
              {Array.from({ length: current.rating ?? 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="currentColor"
                  className="text-brand-review-yellow"
                />
              ))}
            </div>

            {/* Review */}
            <blockquote
              className="
                max-w-3xl
                font-display
                text-2xl
                font-medium
                leading-relaxed
                text-[#1f1f1f]
                sm:text-3xl
              "
            >
              “{current.review}”
            </blockquote>

            {/* Customer */}
            <div className="mt-8 flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="
                  h-14 w-14
                  rounded-full
                  object-cover
                  ring-4 ring-white
                "
              />

              <div>
                <h3 className="font-display text-lg font-bold text-[#1f1f1f]">
                  {current.name}
                </h3>

                {current.designation && (
                  <p className="font-body text-sm text-brand-gray">
                    {current.designation}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="
                  absolute left-0 top-1/2
                  flex h-11 w-11
                  -translate-x-1/2 -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  bg-brand-magenta
                  text-white
                  shadow-lg
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-brand-magenta-dark
                "
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="
                  absolute right-0 top-1/2
                  flex h-11 w-11
                  translate-x-1/2 -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  bg-brand-magenta
                  text-white
                  shadow-lg
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-brand-magenta-dark
                "
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {testimonials.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id ?? index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`
                  h-2.5 rounded-full
                  transition-all duration-300
                  ${
                    index === activeIndex
                      ? "w-8 bg-brand-magenta"
                      : "w-2.5 bg-brand-teal-light hover:bg-brand-teal"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
