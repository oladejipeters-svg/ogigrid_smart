import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-grid text-white hover:bg-grid/90",
  secondary: "border border-grid text-grid hover:bg-grid/5",
  accent: "bg-amber text-ink hover:bg-amber/90",
};

export default function Button({ to, href, variant = "primary", className = "", children, ...rest }) {
  const styles = `inline-flex items-center justify-center rounded-card px-5 py-2.5 font-display text-sm font-semibold transition-colors ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
