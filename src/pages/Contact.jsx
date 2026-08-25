import { useState } from "react";
import { submitContactMessage } from "../lib/api.js";

const initialForm = { name: "", email: "", subject: "", message: "", company_website: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
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
      await submitContactMessage(form);
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
        <p className="font-mono text-xs uppercase tracking-widest text-ledger">Sent</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink">Message received</h1>
        <p className="mt-3 text-slate">
          Someone from our team will get back to you shortly.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-content px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-lg">
        <p className="font-mono text-xs uppercase tracking-widest text-grid">Contact</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink lg:text-4xl">
          Talk to the Ogigrid Smart Solutions team
        </h1>
        <p className="mt-3 text-slate">
          General questions, partnership inquiries, or anything that doesn't need a full demo.
        </p>

        <form onSubmit={handleSubmit} className="relative mt-10 space-y-5">
          {/* Honeypot — see the matching field in RequestDemo.jsx for the full note. */}
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

          <Field label="Your name" name="name" value={form.name} onChange={handleChange} required />
          <Field
            label="Email address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
          <Field
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            as="textarea"
          />

          {status === "error" && (
            <p className="rounded-card bg-amber/10 px-4 py-3 text-sm text-ink">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-card bg-grid px-5 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-grid/90 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
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
        rows={as === "textarea" ? 5 : undefined}
        className="w-full rounded-card border border-slate/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-grid"
      />
    </label>
  );
}
