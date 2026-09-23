import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ComingSoon() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="mx-auto max-w-[1366px] px-4 pt-2 pb-8 md:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-brand-magenta">
            {/* Decorative circles, same language as the home hero */}
            <div
              aria-hidden="true"
              className="absolute -top-16 left-1/3 h-56 w-56 rounded-full bg-brand-magenta-dark opacity-90 sm:h-72 sm:w-72"
            />
            <div
              aria-hidden="true"
              className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-brand-yellow sm:h-56 sm:w-56"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-brand-teal sm:h-60 sm:w-60"
            />
            <div
              aria-hidden="true"
              className="absolute right-10 bottom-0 h-20 w-20 rounded-full bg-brand-teal sm:h-24 sm:w-24"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center sm:py-28 lg:py-32">
              <h1 className="font-display text-4xl leading-[0.95] font-semibold text-white uppercase sm:text-5xl lg:text-6xl">
                Coming Soon
              </h1>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
                We&apos;re cooking up something delicious. This page isn&apos;t ready
                just yet — check back soon!
              </p>
              <Link
                to="/"
                className="mt-8 rounded-full bg-brand-yellow px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
