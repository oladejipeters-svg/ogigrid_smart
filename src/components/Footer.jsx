import { Link } from "react-router-dom";
import { products } from "../data/products.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate/10 bg-white">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-md" />
            Ogigrid<span className="text-grid">Smart</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-slate">
            Financial infrastructure for schools — with AI that runs on your own servers.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-ink">Products</p>
          <ul className="mt-3 space-y-2">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products#${product.slug}`} className="text-sm text-slate hover:text-ink">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-ink">Company</p>
          <ul className="mt-3 space-y-2">
            <li><Link to="/about" className="text-sm text-slate hover:text-ink">About</Link></li>
            <li><Link to="/case-studies" className="text-sm text-slate hover:text-ink">Case Studies</Link></li>
            <li><Link to="/resources" className="text-sm text-slate hover:text-ink">Resources</Link></li>
            <li><Link to="/contact" className="text-sm text-slate hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-ink">Legal</p>
          <ul className="mt-3 space-y-2">
            <li><Link to="/legal/privacy" className="text-sm text-slate hover:text-ink">Privacy Policy</Link></li>
            <li><Link to="/legal/terms" className="text-sm text-slate hover:text-ink">Terms of Service</Link></li>
            <li><Link to="/legal/data-security" className="text-sm text-slate hover:text-ink">Data Processing & Security</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate/10 py-6 text-center text-xs text-slate">
        © {new Date().getFullYear()} Ogigrid Smart Solutions. All rights reserved.
      </div>
    </footer>
  );
}
