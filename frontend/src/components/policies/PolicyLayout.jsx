import { Link } from "react-router-dom";

export default function PolicyLayout({
  title,
  description,
  effectiveDate = "[23 SEP 2026]",
  children,
}) {
  return (
    <main className="min-h-screen bg-brand-pink-soft">
      {/* Header */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-yellow opacity-30" />
        <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-brand-teal-light opacity-50" />

        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 font-display text-lg font-semibold text-brand-magenta transition hover:text-brand-magenta-dark"
            >
              ← MANIMARK
            </Link>

            <div className="mb-5 inline-flex items-center rounded-full bg-brand-yellow px-4 py-2 font-body text-sm font-extrabold text-gray-900">
              Legal & Privacy
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-5 max-w-2xl font-body text-base leading-7 text-brand-gray sm:text-lg">
                {description}
              </p>
            )}

            <p className="mt-6 font-body text-sm font-semibold text-brand-gray">
              Effective Date: {effectiveDate}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-2xl bg-white p-5 shadow-sm">
              <p className="mb-4 font-display text-lg font-bold text-gray-900">
                On this page
              </p>

              <nav className="space-y-2 font-body text-sm">
                <a
                  href="#introduction"
                  className="block rounded-lg px-3 py-2 text-brand-gray transition hover:bg-brand-pink-soft hover:text-brand-magenta"
                >
                  Introduction
                </a>

                <a
                  href="#information"
                  className="block rounded-lg px-3 py-2 text-brand-gray transition hover:bg-brand-pink-soft hover:text-brand-magenta"
                >
                  Information
                </a>

                <a
                  href="#usage"
                  className="block rounded-lg px-3 py-2 text-brand-gray transition hover:bg-brand-pink-soft hover:text-brand-magenta"
                >
                  How We Use It
                </a>

                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-brand-gray transition hover:bg-brand-pink-soft hover:text-brand-magenta"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="min-w-0 rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            <div className="prose-content font-body text-gray-700">
              {children}
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-teal-light bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="font-body text-sm text-brand-gray">
            © {new Date().getFullYear()} MANIMARK. All rights reserved.
          </p>

          <div className="flex gap-5 font-body text-sm font-semibold">
            <Link
              to="/privacy-policy"
              className="text-brand-magenta hover:text-brand-magenta-dark"
            >
              Privacy Policy
            </Link>

            <Link
              to="/cookie-policy"
              className="text-brand-magenta hover:text-brand-magenta-dark"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
