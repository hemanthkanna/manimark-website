import heroDecoration from '../assets/images/hero-decoration.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-[1366px] px-4 pt-2 pb-8 md:px-8">
      <div className="relative overflow-hidden rounded-[32px] bg-brand-magenta">
        <div className="grid items-center gap-6 md:grid-cols-2">
          {/* Text */}
          <div className="px-8 py-12 sm:px-12 md:py-16 lg:px-16">
            <h1 className="font-display text-[42px] leading-[0.95] font-semibold uppercase text-white sm:text-[52px] lg:text-[58px]">
              South
              <br />
              India&apos;s
              <br />
              No.1
            </h1>
            <p className="font-display mt-2 text-2xl font-medium text-white sm:text-3xl">
              Peanut burfi
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/85">
              A Healthy Snack Favourite for All Ages
            </p>
          </div>

          {/* Decoration */}
          <div className="relative h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px]">
            <img
              src={heroDecoration}
              alt="Arcot Manimark peanut burfi, South India's number one healthy snack"
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
