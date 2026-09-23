import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import searchIcon from '../assets/images/icon-search.png'
import userIcon from '../assets/images/icon-user.png'
import cartIcon from '../assets/images/icon-cart.png'
import { categories } from '../data/categories'

// Reduced nav + inline search bar, matching MM-WEB-ABOUT_US-P01 /
// MM-WEB-STORE-P01 / MM-WEB-PROD-P01 (all three show this same header,
// superseding the original 8-item nav from the home page PSD). "Contact Us"
// has no dedicated page yet, so it — like several footer links — routes
// through Coming Soon.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Find a Store', to: '/store' },
  { label: 'Contact Us', to: '/coming-soon' },
]

// The Product PSD shows "Products" opening a dropdown of these same
// categories (its "New Arraivals" label is a typo, corrected here; "Oil"
// there is shown plural elsewhere, kept plural for consistency).
const PRODUCT_MENU = [{ label: 'New Arrivals', to: '/' }, ...categories.map((c) => ({ label: c.name, to: `/products/${c.slug}` }))]

function matchesRoute(pathname, to) {
  if (to === '/') return pathname === '/'
  if (to === '/products') return pathname === '/products' || pathname.startsWith('/products/') || pathname.startsWith('/product/')
  if (to === '/store') return pathname === '/store' || pathname.startsWith('/store/')
  return pathname === to
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const productsRef = useRef(null)
  const cartCount = 23

  const activeLabel = NAV_LINKS.find(({ to, label }) =>
    to === '/coming-soon'
      ? location.pathname === '/coming-soon' && location.state?.navLabel === label
      : matchesRoute(location.pathname, to)
  )?.label

  // Close the desktop Products dropdown on outside click.
  useEffect(() => {
    if (!productsMenuOpen) return
    const handler = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [productsMenuOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    const q = searchValue.trim()
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : '/products')
    setMenuOpen(false)
  }

  const linkClass = (label) =>
    'block rounded-full px-4 py-2.5 transition-colors ' +
    (activeLabel === label
      ? 'bg-brand-yellow text-neutral-900'
      : 'text-neutral-800 hover:bg-neutral-100')

  const renderLinks = (onNavigate) =>
    NAV_LINKS.map(({ label, to }) => {
      if (label === 'Products') {
        return (
          <li key={label} ref={productsRef} className="relative">
            <button
              type="button"
              onClick={() => setProductsMenuOpen((v) => !v)}
              aria-expanded={productsMenuOpen}
              className={linkClass(label) + ' inline-flex cursor-pointer items-center gap-1'}
            >
              {label}
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M5.5 7.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
            {productsMenuOpen && (
              <ul className="absolute top-full left-0 z-20 mt-2 w-52 rounded-2xl bg-brand-yellow p-2 shadow-lg">
                {PRODUCT_MENU.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => {
                        setProductsMenuOpen(false)
                        onNavigate?.()
                      }}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/40"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      }

      return (
        <li key={label}>
          <Link
            to={to}
            state={to === '/coming-soon' ? { navLabel: label } : undefined}
            onClick={onNavigate}
            className={linkClass(label)}
          >
            {label}
          </Link>
        </li>
      )
    })

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1366px] items-center justify-between gap-3 px-4 py-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center" aria-label="Arcot Manimark home">
          <img src={logo} alt="Arcot Manimark" className="h-14 w-14 md:h-[70px] md:w-[70px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden shrink-0 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1 text-[15px] font-semibold text-neutral-900">
            {renderLinks()}
          </ul>
        </nav>

        {/* Desktop search bar */}
        <form onSubmit={handleSearch} className="hidden flex-1 max-w-xs lg:block">
          <label htmlFor="header-search" className="sr-only">
            Search products
          </label>
          <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2.5">
            <img src={searchIcon} alt="" className="h-4 w-4 opacity-60" />
            <input
              id="header-search"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
            />
          </div>
        </form>

        {/* Icons */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-magenta transition hover:bg-brand-magenta-dark cursor-pointer lg:hidden"
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

      {/* Mobile nav + search */}
      {menuOpen && (
        <nav aria-label="Primary mobile" className="border-t border-neutral-100 lg:hidden">
          <form onSubmit={handleSearch} className="px-4 pt-3">
            <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2.5">
              <img src={searchIcon} alt="" className="h-4 w-4 opacity-60" />
              <input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
          </form>
          <ul className="flex flex-col gap-1 px-4 py-3 text-[15px] font-semibold text-neutral-900">
            {NAV_LINKS.map(({ label, to }) => {
              if (label === 'Products') {
                return (
                  <li key={label}>
                    <div className="flex items-center justify-between">
                      <Link to={to} onClick={() => setMenuOpen(false)} className={linkClass(label) + ' flex-1'}>
                        {label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle product categories"
                        aria-expanded={mobileProductsOpen}
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center cursor-pointer"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className={'h-4 w-4 transition-transform ' + (mobileProductsOpen ? 'rotate-180' : '')}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <path d="M5.5 7.5l4.5 4.5 4.5-4.5" />
                        </svg>
                      </button>
                    </div>
                    {mobileProductsOpen && (
                      <ul className="mt-1 ml-3 space-y-1 border-l border-neutral-100 pl-4">
                        {PRODUCT_MENU.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.to}
                              onClick={() => setMenuOpen(false)}
                              className="block rounded-full px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }
              return (
                <li key={label}>
                  <Link
                    to={to}
                    state={to === '/coming-soon' ? { navLabel: label } : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={linkClass(label)}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
