import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't manage scroll position between route changes on its
 * own. Two cases handled here:
 *  - A plain navigation (no hash) resets to the top of the new page —
 *    without this, navigating from a page scrolled halfway down leaves the
 *    new page opened at that same offset.
 *  - A navigation with a hash (e.g. /products#schoolpay, used by the
 *    footer's product links) scrolls to that element instead of the top.
 * Both use an instant jump for plain top-resets (a page transition isn't a
 * user-initiated scroll), but a smooth scroll for hash-targeted links,
 * since that one is closer to an intentional "take me there" action —
 * unless the user prefers reduced motion, in which case it's instant too.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({
          behavior: prefersReducedMotion.current ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
