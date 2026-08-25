import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button.jsx";

const LINKS = [
  { to: "/platform", label: "Platform" },
  { to: "/products", label: "Products" },
  { to: "/local-ai-security", label: "Local AI & Security" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically if the viewport grows past the
  // breakpoint where the full nav is shown, so it can't get stuck open.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled || menuOpen ? "bg-porcelain/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/logo.png" alt="" className="h-8 w-8 rounded-md" />
          Ogigrid<span className="text-grid">Smart</span>
        </NavLink>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive ? "text-grid font-medium" : "text-ink/70 hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/request-demo" variant="accent">
            Request a Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-card p-2 text-ink lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-slate/10 bg-porcelain px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-card px-3 py-2.5 text-sm transition-colors ${
                      isActive ? "bg-grid/10 font-medium text-grid" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button to="/request-demo" variant="accent" onClick={() => setMenuOpen(false)} className="w-full justify-center">
              Request a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
