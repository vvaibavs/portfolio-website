import React from "react";

export const S = {
  page: {
    padding: "40px 52px 60px",
    maxWidth: "820px",
  } as React.CSSProperties,
  fileLabel: {
    fontFamily: "var(--font-geist-mono), monospace",
    fontSize: "12px",
    color: "#555555",
    marginBottom: "32px",
    display: "block",
  } as React.CSSProperties,
  sectionHeading: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    color: "#4a9eff",
    fontFamily: "var(--font-geist-mono), monospace",
    marginBottom: "20px",
    marginTop: "0",
    borderBottom: "1px solid #222",
    paddingBottom: "6px",
  },
  card: {
    backgroundColor: "#111111",
    border: "1px solid #2a2a2a",
    borderRadius: "0px",
    padding: "20px 24px",
    marginBottom: "12px",
  } as React.CSSProperties,
  tag: {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "0px",
    fontSize: "11px",
    fontFamily: "var(--font-geist-mono), monospace",
    fontWeight: 500,
  } as React.CSSProperties,
};
