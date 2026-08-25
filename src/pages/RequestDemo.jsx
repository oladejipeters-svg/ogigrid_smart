import { useState } from "react";
import { submitDemoRequest } from "../lib/api.js";

const initialForm = {
  institutionName: "",
  institutionSize: "",
  contactName: "",
  email: "",
  phone: "",
  role: "",
  message: "",
  company_website: "", // honeypot — see the hidden field below and api/demo-request.js
};

const INSTITUTION_SIZES = ["Under 250 students", "250–1000 students", "1000–3000 students", "3000+ students"];

export default function RequestDemo() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitDemoRequest(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <section className="mx-auto max-w-content px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-ledger">Request received</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink">Thanks — we'll be in touch</h1>
        <p className="mt-3 text-slate">
          Someone from our team will reach out to schedule a walkthrough tailored to your institution.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-content px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-xs uppercase tracking-widest text-grid">Request a Demo</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink lg:text-4xl">
          See OSS against your own numbers
        </h1>
        <p className="mt-3 text-slate">
          Tell us about your institution and we'll set up a walkthrough with your finance team.
        </p>

        <form onSubmit={handleSubmit} className="relative mt-10 space-y-5">
          {/* Honeypot: invisible to real users, off-screen rather than display:none
              so simple form-filling bots still find and fill it. Never rendered
              as a visible field, never labeled for assistive tech. */}
          <input
            type="text"
            name="company_website"
            value={form.company_website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Institution name"
              name="institutionName"
              value={form.institutionName}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Institution size"
              name="institutionSize"
              value={form.institutionSize}
              onChange={handleChange}
              options={INSTITUTION_SIZES}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Your name"
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              required
            />
            <Field label="Your role" name="role" value={form.role} onChange={handleChange} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field label="Phone (optional)" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <Field
            label="What are you hoping to solve?"
            name="message"
            value={form.message}
            onChange={handleChange}
            as="textarea"
          />

          {status === "error" && (
            <p className="rounded-card bg-amber/10 px-4 py-3 text-sm text-ink">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-card bg-amber px-5 py-3 font-display text-sm font-semibold text-ink transition-colors hover:bg-amber/90 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Request a Demo"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required, as = "input" }) {
  const Tag = as;
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <Tag
        name={name}
        type={as === "input" ? type : undefined}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === "textarea" ? 4 : undefined}
        className="w-full rounded-card border border-slate/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-grid"
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-card border border-slate/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-grid"
      >
        <option value="">Select a range</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
