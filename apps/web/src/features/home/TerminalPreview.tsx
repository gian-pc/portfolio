export function TerminalPreview() {
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 36,
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 12px",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: 99, background: "#ef4444" }} />
        <span style={{ width: 10, height: 10, borderRadius: 99, background: "#f59e0b" }} />
        <span style={{ width: 10, height: 10, borderRadius: 99, background: "#22c55e" }} />
      </div>

      <pre
        className="mono"
        style={{
          margin: 0,
          padding: 16,
          fontSize: 12,
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          overflowX: "auto",
        }}
      >
{`$ sst deploy --stage prod
✓ API Gateway ready
✓ Lambda contact-form deployed
✓ S3 assets synced
✓ CloudFront cache invalidated
Done in 14.2s`}
      </pre>
    </div>
  );
}
