export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "22px 0 26px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          width: "min(1100px, calc(100vw - 48px))",
          margin: "0 auto",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "grid", gap: 4 }}>
          <span
            className="mono"
            style={{ fontSize: 12, color: "var(--text-secondary)", letterSpacing: 0.2 }}
          >
            © {year} gianpc.com
          </span>
          <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }}>
            gianpc
          </span>
        </div>
      </div>
    </footer>
  );
}
