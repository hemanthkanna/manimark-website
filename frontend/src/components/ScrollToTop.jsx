import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on every route change — needed since several
// links (footer, nav) are clicked from partway down the page. If the new
// URL carries a hash (e.g. the "Quality & Hygiene" footer link to
// /about-us#quality-hygiene), scroll to that element instead of the top.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick for the new page to render before locating the target.
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
