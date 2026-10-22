"use client";

import { useState, type FormEvent, type ReactNode } from "react";

/**
 * The site's lead form.
 *
 * Every enquiry on the site goes to /api/contact, which delivers it by
 * Resend -> Brevo -> SMTP -> Telegram, in that order, and records where the
 * lead came from.
 *
 * This used to be a plain <form method="POST" action="/contact"> on the home
 * page and on /assessment. /contact is a page route, so those two forms
 * POSTed to a GET-only route: Next answered 405 and every lead from the two
 * highest-intent pages was silently dropped. One component, one submit path,
 * no more silent losses.
 */
export default function LeadForm({
  children,
  className = "",
  submitLabel,
  sendingLabel = "Sending…",
  successTitle = "Thank you — we have your details.",
  successBody = "An engineer will come back to you within one business day.",
  errorLabel = "Something went wrong. Please try again, or email us directly.",
  networkErrorLabel = "Network error. Please check your connection and try again.",
  source,
  interest,
  hiddenFields = {},
}: {
  children: ReactNode;
  className?: string;
  submitLabel: string;
  sendingLabel?: string;
  successTitle?: string;
  successBody?: string;
  errorLabel?: string;
  networkErrorLabel?: string;
  /** Which page the lead came from. Recorded on the notification. */
  source: string;
  /** Overrides the "interest" select, for forms that do not have one. */
  interest?: string;
  hiddenFields?: Record<string, string>;
}) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("source", source);
    if (interest) data.set("interest", interest);
    for (const [k, v] of Object.entries(hiddenFields)) data.set(k, v);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setState("success");
        form.reset();
      } else {
        setError(json.error ?? errorLabel);
        setState("error");
      }
    } catch {
      setError(networkErrorLabel);
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={`border border-line bg-white p-8 lg:p-10 ${className}`}>
        <div className="flex items-start gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-navy text-white text-sm font-semibold flex-shrink-0">
            ✓
          </span>
          <div>
            <h3 className="font-serif font-semibold text-xl text-ink mb-2">{successTitle}</h3>
            <p className="text-slate leading-relaxed">{successBody}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {state === "error" && (
        <div className="mb-6 p-4 border border-red-300 bg-red-50 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}
      {children}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary font-medium px-8 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {sendingLabel}
          </>
        ) : (
          <>
            {submitLabel}
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
