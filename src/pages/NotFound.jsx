import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-content px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-grid">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-slate">The page you're looking for doesn't exist.</p>
      <div className="mt-8">
        <Button to="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </section>
  );
}
