import Link from "next/link";

const YOUTUBE = "https://www.youtube.com/@VeritasaiGlobal";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61595818258637";

/**
 * The channels, in one place. Used in the footer, the about/contact pages,
 * the demos index and the miniNotebook page so a visitor is never more than
 * one click from the videos or the page.
 */
export default function SocialLinks({
  className = "",
  variant = "dark",
  showLabels = true,
}: {
  className?: string;
  /** "dark" for navy/dark sections, "light" for paper/white sections. */
  variant?: "dark" | "light";
  showLabels?: boolean;
}) {
  const base =
    variant === "dark"
      ? "border-white/20 text-gray-300 hover:text-white hover:border-white/50"
      : "border-line text-slate hover:text-ink hover:border-ink/40";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href={YOUTUBE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Veritas Global AI on YouTube"
        className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${base}`}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
        </svg>
        {showLabels && "YouTube"}
      </Link>
      <Link
        href={FACEBOOK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Veritas Global AI on Facebook"
        className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${base}`}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
        </svg>
        {showLabels && "Facebook"}
      </Link>
    </div>
  );
}
