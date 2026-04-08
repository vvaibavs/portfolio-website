export function FileIcon({ name, size = 10, active = false }: { name: string; size?: number; active?: boolean }) {
  const color = active ? "#ffffff" : name.endsWith(".tsx") ? "#000080" : "#404080";
  return (
    <span
      style={{
        color,
        fontSize: size,
        fontWeight: 700,
        fontFamily: "var(--font-geist-mono), monospace",
        flexShrink: 0,
      }}
    >
      {name.endsWith(".tsx") ? "TSX" : "TS"}
    </span>
  );
}
