import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety net: if IntersectionObserver is unsupported, throws, or for any
    // other reason never fires, force content visible after a short delay
    // rather than leaving it at opacity-0 forever. The animation is a nice-
    // to-have; the content being visible is not optional.
    const fallback = window.setTimeout(() => setVisible(true), 1200);

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            window.clearTimeout(fallback);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      return () => {
        observer.disconnect();
        window.clearTimeout(fallback);
      };
    } catch {
      // IntersectionObserver unsupported — just show the content immediately.
      setVisible(true);
      window.clearTimeout(fallback);
    }
  }, []);

  return (
    <Tag ref={ref} className={`${visible ? "animate-reveal-up" : "opacity-0"} ${className}`}>
      {children}
    </Tag>
  );
}
