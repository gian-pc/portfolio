export function LiveMap() {
  const nodes = [
    { name: "Lima", x: "20%", y: "62%" },
    { name: "New York", x: "28%", y: "35%" },
    { name: "Madrid", x: "46%", y: "32%" },
    { name: "Tokyo", x: "80%", y: "36%" },
    { name: "São Paulo", x: "27%", y: "72%" },
  ];

  return (
    <section style={{ padding: "0 24px 80px" }}>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          background: "var(--surface)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", letterSpacing: 1, textTransform: "uppercase" }}>
            Traffic
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "3px 10px",
              borderRadius: "var(--radius-full)",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              fontSize: 11,
              fontWeight: 700,
              color: "#22c55e",
              letterSpacing: 1,
            }}
          >
            ● LIVE
          </span>
        </div>

        {/* Map */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "2/1" }}>
          {/* Dot grid */}
          <svg
            viewBox="0 0 800 400"
            style={{ width: "100%", height: "100%", display: "block" }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="var(--text-secondary)" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#dots)" />
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.name}
              title={node.name}
              style={{
                position: "absolute",
                left: node.x,
                top: node.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Pulse ring */}
              <div style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                background: "rgba(246,38,77,0.15)",
                animation: "pulse-ring 2s ease-out infinite",
              }} />
              {/* Dot */}
              <div style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 8px rgba(246,38,77,0.6)",
                position: "relative",
                zIndex: 1,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}