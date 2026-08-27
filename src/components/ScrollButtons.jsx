import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const THRESHOLD = 320; // px scrolled before "to top" appears / before "to bottom" hides

export default function ScrollButtons() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);
  const prefersReducedMotion = useRef(false);
  const ticking = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function evaluate() {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = fullHeight - (scrollY + viewport);

      // Nothing to scroll at all — hide both.
      if (fullHeight <= viewport + THRESHOLD) {
        setShowUp(false);
        setShowDown(false);
        return;
      }

      setShowUp(scrollY > THRESHOLD);
      setShowDown(distanceFromBottom > THRESHOLD);
    }

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        evaluate();
        ticking.current = false;
      });
    }

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.current ? "auto" : "smooth",
    });
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: prefersReducedMotion.current ? "auto" : "smooth",
    });
  }

  if (!showUp && !showDown) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
      {showUp && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-grid text-white shadow-md transition-colors hover:bg-grid/90"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </button>
      )}
      {showDown && (
        <button
          type="button"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-grid shadow-md ring-1 ring-slate/15 transition-colors hover:bg-porcelain"
        >
          <ArrowDown size={20} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
