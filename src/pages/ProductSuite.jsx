import PageHeader from "../components/PageHeader.jsx";
import ProductIcon from "../components/ProductIcon.jsx";
import { products } from "../data/products.js";

export default function ProductSuite() {
  return (
    <div>
      <PageHeader
        eyebrow="Product Suite"
        title="One suite, six products"
        description="SchoolPay is the flagship. Each product below covers a different part of the institution."
      />
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              id={product.slug}
              className="overflow-hidden rounded-card border border-slate/10"
            >
              {product.screenshot ? (
                <img
                  src={product.screenshot}
                  alt={`${product.name} interface`}
                  className="h-40 w-full border-b border-slate/10 object-cover object-top sm:h-48 lg:h-52"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-40 items-center justify-center bg-porcelain sm:h-48 lg:h-52">
                  <ProductIcon name={product.icon} />
                </div>
              )}
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-grid">{product.role}</p>
                <h2 className="mt-1 font-display text-lg font-semibold text-ink">{product.name}</h2>
                <p className="mt-2 text-sm text-slate">{product.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-ink/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-ledger" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
