"use client";

import { useState } from "react";
import { FileIcon } from "./FileIcon";
import type { FileName } from "./types";

const C = {
  bg:      "#2d2d2d",
  bgDark:  "#1e1e1e",
  bgHover: "#353535",
  text:    "#d0d0d0",
  textDim: "#777777",
  raised:  "#555555 #111111 #111111 #555555",
};

export function EditorTab({
  tab,
  active,
  onClick,
  onClose,
}: {
  tab: FileName;
  active: boolean;
  onClick: () => void;
  onClose: (e: React.MouseEvent) => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "0 12px",
        height: "28px",
        cursor: "pointer",
        backgroundColor: active ? C.bg : hovered ? C.bgHover : C.bgDark,
        border: "1.5px solid",
        /* Active tab: raised on top/sides, no bottom border — appears to "sit on" the content */
        borderColor: active
          ? `${C.raised.split(" ")[0]} ${C.raised.split(" ")[1]} transparent ${C.raised.split(" ")[3]}`
          : "#333333 #1a1a1a #1a1a1a #333333",
        color: active ? C.text : C.textDim,
        fontSize: "12px",
        fontFamily: "var(--font-geist-sans), 'MS Sans Serif', sans-serif",
        whiteSpace: "nowrap",
        userSelect: "none",
        flexShrink: 0,
        marginTop: active ? "0" : "2px",
      }}
    >
      <FileIcon name={tab} active={active} />
      <span>{tab}</span>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          padding: "0 1px",
          lineHeight: 1,
          fontSize: "14px",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.5")}
      >
        ×
      </button>
    </div>
  );
}
