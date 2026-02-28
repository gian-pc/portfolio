import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        marginTop: "auto",
      }}
    >
      <span
        className="mono"
        style={{ fontSize: 12, color: "var(--text-secondary)" }}
      >
        © 2026 gianpc.com
      </span>

      <div style={{ display: "flex", gap: 20 }}>
        {[
          { label: "GitHub", href: "https://github.com/gian-pc" },
          { label: "LinkedIn", href: "https://linkedin.com/in/gianpc" },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}