// /Users/admin/Desktop/projects/portfolio/apps/web/src/features/home/Hero.tsx
import { TerminalPreview } from "./TerminalPreview";

export function Hero() {
  return (
    <section
      style={{
        padding: "140px 24px 80px",
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: 48,
        alignItems: "center",
      }}
    >
      <div style={{ flex: "1 1 340px" }}>
        {/* Avatar */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "linear-gradient(135deg,#F6264D,#fb923c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 900,
            color: "#fff",
            marginBottom: 28,
            boxShadow: "0 8px 24px rgba(246,38,77,0.35)",
          }}
        >
          G
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            background: "rgba(246,38,77,0.1)",
            border: "1px solid rgba(246,38,77,0.25)",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--accent)",
            marginBottom: 24,
            textTransform: "uppercase" as const,
            letterSpacing: 2,
          }}
        >
          ● Backend Engineer
        </div>

        {/* Título */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 20,
            letterSpacing: -1,
            color: "var(--text-primary)",
          }}
        >
          Construyo APIs
          <br />
          <span
            style={{
              background: "linear-gradient(90deg,#F6264D,#fb923c,#F6264D)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            que escalan.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            marginBottom: 32,
            maxWidth: 400,
            color: "var(--text-secondary)",
          }}
        >
          Especialista en arquitecturas Serverless sobre AWS. Transformo lógica
          compleja en sistemas escalables, rápidos y seguros usando Java, Spring
          Boot e IaC.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/blog"
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(246,38,77,0.3)",
            }}
          >
            Ver artículos →
          </a>
          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: "transparent",
              fontWeight: 600,
              fontSize: 13,
              border: "1px solid var(--border)",
              textDecoration: "none",
              color: "var(--text-primary)",
            }}
          >
            Contacto
          </a>
        </div>
      </div>

      <div style={{ flex: "1 1 360px", minWidth: 0 }}>
        <TerminalPreview />
      </div>
    </section>
  );
}
