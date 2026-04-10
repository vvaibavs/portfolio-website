"use client";

import { useState, useEffect } from "react";
import { S } from "./styles";

const ASCII_FRAMES = [
`---------------------------------------------------:....--------------------------------------------
-------------------------------------------------.......--------------------------------------------
-----------------------------------------------...-*#*:---------------------------------------------
---------------------------------------------:*%%%%%%@----------------------------------------------
--------------------------------------------+%%%%%%%%:----------------------------------------------
-------------------------------------------#%%%%%%%%:-----------------------------------------------
------------------------------------------#%%%%%%%#-------------------------------------------------
-----------------------------------------=%%%%%%%*--------------------------------------------------
-----------------------------------------%%%%%%*:---------------------------------------------------
----------------------------------------+%%%#===-:--------------------------------------------------
----------------------------------------#%%%%%%%%%%%%%=---------------------------------------------
--------------------------------------*%%%%%%%%%%%%%%%%%%=------------------------------------------
-------------------------------------*%%%%%%%%%%%%%%%%%%%%%-----------------------------------------
------------------------------------+%%%::*%%%%%%%%%%%%%%%%%#+--------------------------------------
----------------------------#:------%%%..##+%%%%%%%%%%%%%%%%%%%%*-----------------------------------
------------------------=%%%%%%=---%%%%-...%%%%%%%%%%%%%%%%%%#%%%%%---------------------------------
-------------------------%%%%%%%%-----#%%%%%%%%%=%%%%%#%@:%%%*#%%%%%%-------------------------------
-------------------------%%%%%%%%%-----%%%%#%%%%%%%%%%....+%%-*%%%%%%%@-----------------------------
------------------------:%%%%%%%%%%---%%%%%:::::+%%%%%#..-%%---=%%%%%%%%----------------------------
-------------------------%%%%%%%%%%%*%%%%%%:::::::%%%%%%#%%%-----%%%%%%%%+--------------------------
-------------------------*%%%%%%%%%%%%%%%%%+===-:%%%%#-----=-------..:+##+.-------------------------
--------------------------%%%%%%%%%%%*%%%%%====-%%%%%-------%%%%%%%%%-.....:------------------------
--------------------------*%%%%%%%%%%%%%%%%%::%%%%%%%+----:%%%%%%%%%%%%%%#..------------------------
---------------------------*%%%%%%%%%%%%%%%%%%%%%%%%%%%%*%=*#%%%%%%%%%%%%:--------------------------
----------------------------*%%%%%%%%%%%%**#%%%%%%**%%%%%%%%%+*%%%%%%%%%:---------------------------
-----------------------------**%%%%%%%%%%%***#%%%%%%%%%%%%%%%%%**%%%%%%-----------------------------
-----------------------------=**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%**#%%------------------------------
-----------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%==-------------------------------
-----------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%=%%%%%%%%%%%%--------------------------------
----------------------------#%%%%%%%%%%%%%%%%%%%%%%%%%%=**#%%%%%%%%---------------------------------
----------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%=**=:-==--*----------------------------------
---------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%=***-----------------------------------------
--------------------------#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*+------------------------------------------
--------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%--------------------------------------------
-------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=-------------------------------------------
-------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-------------------------------------------
-------------------------#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-------------------------------------------
--------------------------********************##%%%%%%%#*-------------------------------------------
---------------------------++***************************--------------------------------------------
------------------------#%%%******:-----------::-=****+---------------------------------------------
-----------------------##%%*=---------------------*****#%-------------------------------------------
------------------------------------------------------#%%**-----------------------------------------`,
];

const LANG_COLORS = ["#4a9eff", "#4ec9b0", "#e0af68", "#7aa2f7", "#79c0ff", "#4a9eff", "#4ec9b0", "#7aa2f7"];
const FW_COLORS   = ["#4ec9b0", "#7aa2f7", "#4a9eff", "#79c0ff", "#e0af68", "#4ec9b0", "#4a9eff", "#7aa2f7"];

function SkillChip({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        ...S.tag,
        padding: "4px 10px",
        fontSize: "12px",
        backgroundColor: "#111111",
        border: `1px solid #333333`,
        color: color,
      }}
    >
      {label}
    </span>
  );
}

export function AboutContent() {
  const [art, setArt] = useState(ASCII_FRAMES[0]);
  useEffect(() => {
    setArt(ASCII_FRAMES[Math.floor(Math.random() * ASCII_FRAMES.length)]);
  }, []);

  const languages  = ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Assembly", "Arduino", "HTML", "SQL"];
  const frameworks = ["React", "Next.js", "TensorFlow", "Expo", "TailwindCSS", "Flask", "Pandas", "NumPy", "Node.js", "Git"];

  return (
    <div style={S.page}>
      <span style={S.fileLabel}>// about.tsx</span>

      {/* Hero */}
      <div style={{ marginBottom: "44px", display: "flex", gap: "32px", alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#555555", marginBottom: "12px" }}>
            /** @author Vaibav Subramanian */
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#79c0ff",
              margin: "0 0 6px",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
            }}
          >
            Vaibav Subramanian
          </h1>
          <p style={{ fontSize: "14px", color: "#4ec9b0", fontFamily: "var(--font-geist-mono), monospace", margin: "0 0 16px" }}>
            Software Engineer · ML Researcher · Builder
          </p>
          <p style={{ fontSize: "13.5px", fontFamily: "var(--font-geist-sans), sans-serif", margin: 0, lineHeight: 1.7 }}>
            <span style={{ color: "#7dcfff" }}>ECE student</span>
            <span style={{ color: "#777777" }}> at the </span>
            <span style={{ color: "#79c0ff" }}>University of Texas at Austin</span>
            <span style={{ color: "#777777" }}>, graduating </span>
            <span style={{ color: "#e0af68" }}>2028</span>
            <span style={{ color: "#777777" }}>. Building at the intersection of </span>
            <span style={{ color: "#7aa2f7" }}>machine learning</span>
            <span style={{ color: "#777777" }}> and </span>
            <span style={{ color: "#7aa2f7" }}>full-stack engineering</span>
            <span style={{ color: "#777777" }}>.</span>
          </p>
        </div>

        {/* ASCII art */}
        <pre
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "4px",
            lineHeight: 1,
            color: "#c0c0c0",
            margin: 0,
            padding: "0px",
            border: "1px solid #2a2a2a",
            backgroundColor: "#000000",
            flexShrink: 0,
            width: "fit-content",
          }}
        >
          {art}
        </pre>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "40px" }}>
        {[
          { num: "4", label: "internships" },
          { num: "4", label: "projects" },
          { num: "10", label: "languages" },
          { num: "10", label: "frameworks" },
        ].map(({ num, label }) => (
          <div key={label} style={{ ...S.card, textAlign: "center", padding: "16px 12px", marginBottom: 0, border: "1px solid #2a2a2a" }}>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#e0af68", fontFamily: "var(--font-geist-mono), monospace", lineHeight: 1, marginBottom: "4px" }}>
              {num}
            </div>
            <div style={{ fontSize: "11px", color: "#555555", fontFamily: "var(--font-geist-mono), monospace" }}>
              // {label}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Stats */}
      <div style={{ marginBottom: "40px" }}>
        <p style={S.sectionHeading}>GitHub Stats</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <img
            src="https://streak-stats.demolab.com?user=vvaibavs&background=0a0a0a&border=2a2a2a&ring=4a9eff&fire=e0af68&currStreakNum=ffffff&currStreakLabel=4a9eff&sideNums=ffffff&sideLabels=4ec9b0&dates=555555&stroke=2a2a2a"
            alt="GitHub Streak Stats"
            style={{ height: "auto", maxWidth: "100%" }}
          />
        </div>
      </div>

      {/* Currently building */}
      <div style={{ marginBottom: "40px" }}>
        <p style={S.sectionHeading}>Currently Building</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { label: "AI Prior Authorization", detail: "platform for independent medical practices" },
            { label: "Seismic ML Research", detail: "anomaly detection @ UT Geosciences Lab" },
          ].map(({ label, detail }) => (
            <div key={label} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px" }}>
              <span style={{ color: "#4a9eff", flexShrink: 0 }}>▸</span>
              <span>
                <span style={{ color: "#79c0ff" }}>{label}</span>
                <span style={{ color: "#444444" }}> — </span>
                <span style={{ color: "#4ec9b0" }}>{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deployed Projects */}
      <div style={{ marginBottom: "40px" }}>
        <p style={S.sectionHeading}>Deployed Projects</p>
        <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px", color: "#555555" }}>
          coming soon..
        </div>
      </div>

      {/* Languages */}
      <div style={{ marginBottom: "28px" }}>
        <p style={S.sectionHeading}>Languages</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {languages.map((s, i) => <SkillChip key={s} label={s} color={LANG_COLORS[i % LANG_COLORS.length]} />)}
        </div>
      </div>

      {/* Frameworks & Tools */}
      <div style={{ marginBottom: "40px" }}>
        <p style={S.sectionHeading}>Frameworks &amp; Tools</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {frameworks.map((s, i) => <SkillChip key={s} label={s} color={FW_COLORS[i % FW_COLORS.length]} />)}
        </div>
      </div>

      {/* Organizations */}
      <div style={{ marginBottom: "40px" }}>
        <p style={S.sectionHeading}>Organizations</p>
        <div style={S.card}>
          <div style={{ marginBottom: "12px" }}>
            <h3 style={{ margin: "0 0 3px", fontSize: "14px", fontWeight: 700, color: "#79c0ff", fontFamily: "var(--font-geist-mono), monospace" }}>
              Convergent
            </h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#4ec9b0", fontFamily: "var(--font-geist-mono), monospace" }}>
              Health Tech Subteam Lead
            </p>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "Led a Health Tech subteam, coordinating engineers & product members to a shared product vision",
              "Guided team execution and communication to maintain clarity and momentum throughout development",
              "Represented the team by presenting our work to judges, venture capitalists, and business professionals",
            ].map((b) => (
              <li key={b} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#c0c0c0", fontFamily: "var(--font-geist-sans), sans-serif", lineHeight: 1.65 }}>
                <span style={{ color: "#4a9eff", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <a
          href="https://github.com/vvaibavs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            backgroundColor: "#111111",
            border: "1px solid",
            borderColor: "#ffffff #444 #444 #ffffff",
            color: "#c0c0c0",
            fontSize: "12px",
            fontFamily: "var(--font-geist-mono), monospace",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a1a1a"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#111111"; (e.currentTarget as HTMLAnchorElement).style.color = "#c0c0c0"; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          github.com/vvaibavs
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            backgroundColor: "#2d2d2d",
            border: "1.5px solid",
            borderColor: "#555555 #111111 #111111 #555555",
            color: "#d0d0d0",
            fontSize: "12px",
            fontFamily: "var(--font-geist-mono), monospace",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#383838"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2d2d2d"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" />
          </svg>
          resume.pdf
        </a>
      </div>
    </div>
  );
}
