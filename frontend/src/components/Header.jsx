import { useState } from 'react'
import logo from '../assets/images/logo.png'
import searchIcon from '../assets/images/icon-search.png'
import userIcon from '../assets/images/icon-user.png'
import cartIcon from '../assets/images/icon-cart.png'

const NAV_LINKS = [
  'Home',
  'Products',
  'About Us',
  'Find a Store',
  'Gifts',
  'Business',
  'Career',
  'Contact Us',
]

export default function Header() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = 23

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1366px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center" aria-label="Arcot Manimark home">
          <img src={logo} alt="Arcot Manimark" className="h-16 w-16 md:h-[70px] md:w-[70px]" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden flex-1 justify-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1 text-[15px] font-semibold text-neutral-900">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(label)
                  }}
                  className={
                    'block rounded-full px-4 py-2.5 transition-colors ' +
                    (active === label
                      ? 'bg-brand-yellow text-neutral-900'
                      : 'text-neutral-800 hover:bg-neutral-100')
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-magenta transition hover:bg-brand-magenta-dark cursor-pointer"
          >
            <img src={searchIcon} alt="" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-brand-magenta transition hover:bg-brand-magenta-dark cursor-pointer sm:flex"
          >
            <img src={userIcon} alt="" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${cartCount} items`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-magenta transition hover:bg-brand-magenta-dark cursor-pointer"
          >
            <img src={cartIcon} alt="" className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-xs font-bold text-neutral-900">
              {cartCount}
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 lg:hidden cursor-pointer"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-neutral-800" />
              <span className="h-0.5 w-5 bg-neutral-800" />
              <span className="h-0.5 w-5 bg-neutral-800" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav aria-label="Primary mobile" className="border-t border-neutral-100 lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 text-[15px] font-semibold text-neutral-900">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(label)
                    setMenuOpen(false)
                  }}
                  className={
                    'block rounded-full px-4 py-2.5 transition-colors ' +
                    (active === label
                      ? 'bg-brand-yellow text-neutral-900'
                      : 'text-neutral-800 hover:bg-neutral-100')
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
