"use client";

import { useState } from "react";
import { FileIcon } from "./FileIcon";
import type { FileName } from "./types";

export function SidebarFile({
  file,
  active,
  onClick,
}: {
  file: FileName;
  active: boolean;
  onClick: () => void;
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
        padding: "3px 8px 3px 24px",
        cursor: "pointer",
        backgroundColor: active ? "#000080" : hovered ? "#003070" : "transparent",
        color: active || hovered ? "#ffffff" : "#d0d0d0",
        fontSize: "12px",
        fontFamily: "var(--font-geist-sans), 'MS Sans Serif', sans-serif",
        userSelect: "none",
      }}
    >
      <FileIcon name={file} active={active || hovered} />
      <span>{file}</span>
    </div>
  );
}
