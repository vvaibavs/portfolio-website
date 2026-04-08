"use client";

import { useState, useEffect } from "react";
import { ALL_FILES, type FileName } from "./components/types";
import { SidebarFile } from "./components/SidebarFile";
import { EditorTab } from "./components/EditorTab";
import { AboutContent } from "./components/AboutContent";
import { ExperienceContent } from "./components/ExperienceContent";
import { ProjectsContent } from "./components/ProjectsContent";
import Image from "next/image";
import Bliss from "./images/vecteezy_monochrome-white-and-black-wave-abstract-background_21775817.jpg";

// Dark-mode Win95 chrome palette
const C = {
  bg:       "#2d2d2d",  // main chrome background
  bgDark:   "#1e1e1e",  // darker chrome (pressed, inner sunken)
  bgHover:  "#383838",  // hover state
  text:     "#d0d0d0",  // chrome text
  hi:       "#555555",  // bevel highlight (top/left edge)
  lo:       "#111111",  // bevel shadow (bottom/right edge)
  raised:   "#555555 #111111 #111111 #555555" as string,
  sunken:   "#111111 #555555 #555555 #111111" as string,
};

export default function Home() {
  const [activeFile, setActiveFile] = useState<FileName>("about.tsx");
  const [openTabs, setOpenTabs] = useState<FileName[]>(["about.tsx"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  function openFile(filename: FileName) {
    if (!openTabs.includes(filename)) {
      setOpenTabs((prev) => [...prev, filename]);
    }
    setActiveFile(filename);
    if (window.innerWidth < 768) setSidebarOpen(false);
  }

  function closeTab(filename: FileName, e: React.MouseEvent) {
    e.stopPropagation();
    const newTabs = openTabs.filter((f) => f !== filename);
    setOpenTabs(newTabs);
    if (activeFile === filename) {
      setActiveFile(newTabs[newTabs.length - 1] ?? "about.tsx");
    }
  }

  const editorContent: Record<FileName, React.ReactNode> = {
    "about.tsx": <AboutContent />,
    "experience.ts": <ExperienceContent />,
    "projects.tsx": <ProjectsContent />,
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", position: "relative", overflow: "hidden" }}>
        <Image src={Bliss} alt="Windows XP Bliss" fill style={{ objectFit: "cover", zIndex: 0 }} priority />

      {/* ── Window frame — dark Win95 raised bevel ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          height: "85%",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
          backgroundColor: C.bg,
          border: "2px solid",
          borderColor: C.raised,
          outline: `2px solid #333333`,
          boxShadow: `inset 1px 1px 0 ${C.hi}, inset -1px -1px 0 ${C.lo}`,
        }}
      >

        {/* ── Win95 Title Bar ── */}
        <div
          style={{
            height: "28px",
            background: "linear-gradient(90deg, #000080 0%, #1084d0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 4px 0 6px",
            userSelect: "none",
            flexShrink: 0,
            gap: "4px",
          }}
        >
          {/* Floppy icon + title */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", overflow: "hidden" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect width="16" height="16" fill="#3a3a3a"/>
              <rect x="2" y="1" width="12" height="13" fill="#3a3a3a" stroke="#111" strokeWidth="1"/>
              <rect x="3" y="1" width="7" height="5" fill="#888"/>
              <rect x="4" y="8" width="8" height="5" fill="#222"/>
              <rect x="5" y="9" width="2" height="3" fill="#555"/>
            </svg>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-geist-sans), 'MS Sans Serif', sans-serif", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              vaibav-subramanian — Portfolio
            </span>
          </div>

          {/* Win95 control buttons */}
          <div style={{ display: "flex", gap: "2px", flexShrink: 0 }}>
            {[
              { label: "_", title: "Minimize", pb: "3px" },
              { label: "□", title: "Maximize", pb: "0" },
              { label: "×", title: "Close",    pb: "0" },
            ].map(({ label, title, pb }) => (
              <button
                key={title}
                title={title}
                style={{
                  width: "18px",
                  height: "16px",
                  backgroundColor: C.bg,
                  border: "1.5px solid",
                  borderColor: C.raised,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: `0 0 ${pb} 0`,
                  fontSize: label === "×" ? "13px" : "9px",
                  fontWeight: 900,
                  fontFamily: "monospace",
                  color: C.text,
                  lineHeight: 1,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Workspace ── */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* ── Activity Bar ── */}
          <div
            style={{
              width: "48px",
              backgroundColor: C.bg,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4px",
              flexShrink: 0,
              borderRight: "2px solid",
              borderColor: C.sunken,
            }}
          >
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              title="Explorer"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: sidebarOpen ? C.bgDark : C.bg,
                border: "1.5px solid",
                borderColor: sidebarOpen ? C.sunken : C.raised,
                cursor: "pointer",
                color: C.text,
                margin: "2px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38H2.5v-15H7v4.05L8.5 13h6v9.5zm0-11H9V7h5.5v4.5zm3 7H16V12.5l-1.5-1.5H8.5V1.5H14v4.05L15.5 7h5.7v12z" />
              </svg>
            </button>

            <a href="https://github.com/vvaibavs" target="_blank" rel="noopener noreferrer" title="GitHub"
              style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: C.text, textDecoration: "none", margin: "2px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.bgHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"
              style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: C.text, textDecoration: "none", margin: "2px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.bgHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" />
              </svg>
            </a>

            <div style={{ flex: 1 }} />
          </div>

          {/* ── Sidebar ── */}
          {sidebarOpen && (
            <div
              style={{
                width: "200px",
                backgroundColor: C.bg,
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                overflow: "hidden",
                borderRight: "2px solid",
                borderColor: C.sunken,
              }}
            >
              <div style={{ padding: "6px 8px 4px", fontSize: "11px", color: C.text, fontWeight: 700, letterSpacing: "0.5px", userSelect: "none", fontFamily: "var(--font-geist-sans), 'MS Sans Serif', sans-serif", borderBottom: `1px solid ${C.lo}` }}>
                Explorer
              </div>
              <div style={{ overflow: "auto", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "3px 6px", fontSize: "12px", color: C.text, fontFamily: "var(--font-geist-sans), sans-serif", userSelect: "none", fontWeight: 700 }}>
                  <span style={{ fontSize: "9px" }}>▼</span>
                  <span>PORTFOLIO</span>
                </div>
                {ALL_FILES.map((file) => (
                  <SidebarFile key={file} file={file} active={activeFile === file} onClick={() => openFile(file)} />
                ))}
              </div>
            </div>
          )}

          {/* ── Editor ── */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>

            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                backgroundColor: C.bgDark,
                borderBottom: `2px solid ${C.lo}`,
                overflowX: "auto",
                flexShrink: 0,
                scrollbarWidth: "none",
              }}
            >
              {openTabs.map((tab) => (
                <EditorTab
                  key={tab}
                  tab={tab}
                  active={activeFile === tab}
                  onClick={() => setActiveFile(tab)}
                  onClose={(e) => closeTab(tab, e)}
                />
              ))}
            </div>

            {/* Breadcrumb — sunken dark address bar */}
            {openTabs.length > 0 && (
              <div
                style={{
                  padding: "2px 10px",
                  fontSize: "12px",
                  color: C.text,
                  backgroundColor: C.bgDark,
                  border: "1px solid",
                  borderColor: C.sunken,
                  fontFamily: "var(--font-geist-mono), monospace",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "#666" }}>PORTFOLIO</span>
                <span style={{ color: "#444" }}>›</span>
                <span style={{ color: C.text, fontWeight: 600 }}>{activeFile}</span>
              </div>
            )}

            {/* Editor content — dark terminal */}
            <div style={{ flex: 1, overflowY: "auto", overflowX: "auto", backgroundColor: "#0a0a0a" }}>
              {openTabs.length === 0 ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#333", fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px" }}>
                  Select a file from the explorer
                </div>
              ) : (
                <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                  {editorContent[activeFile]}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Status Bar — dark Win95 style ── */}
        <div
          style={{
            height: "22px",
            backgroundColor: C.bg,
            display: "flex",
            alignItems: "center",
            padding: "0 4px",
            flexShrink: 0,
            gap: "4px",
            borderTop: `1px solid ${C.lo}`,
          }}
        >
          {[
            <>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
              </svg>
              {" main"}
            </>,
            "✓ 0 errors",
            <span key="spacer" style={{ flex: 1 }} />,
            "TypeScript JSX",
            "UTF-8",
            "Ln 1, Col 1",
          ].map((item, i) => (
            <span
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1px 6px",
                fontSize: "11px",
                color: C.text,
                fontFamily: "var(--font-geist-sans), 'MS Sans Serif', sans-serif",
                userSelect: "none",
                border: "1px solid",
                borderColor: C.sunken,
                height: "16px",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
