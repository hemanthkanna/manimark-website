import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position on every route change — needed since several
// links (footer, nav) are clicked from partway down the page.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
