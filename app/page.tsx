// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ===== DATA =====

const experience = [
  {
    company: "Jackson School of Geosciences",
    role: "Research Assistant",
    period: "Jan 2026 – Present",
    bullets: [
      "Conducted machine learning research on seismic time-series data to detect earthquake events",
      "Trained and evaluated neural networks with TensorFlow to distinguish earthquakes from environmental noise",
      "Processed large-scale sensor datasets and engineered features for robust signal detection",
    ],
  },
  {
    company: "Custom Heliarc",
    role: "Systems Automation & Data Engineering Intern",
    period: "Mar 2025 – Jun 2025",
    bullets: [
      "Doubled operational efficiency by automating documentation workflows with Python scripts",
      "Reduced manual log analysis time by 60% using Pandas pipelines with scikit-learn anomaly detection",
      "Improved deployment reliability by containerizing automation pipelines with Docker and Kubernetes",
    ],
  },
  {
    company: "Clutch",
    role: "Frontend Engineering Intern",
    period: "Oct 2024 – Dec 2024",
    bullets: [
      "Built responsive UI components for company website with Next.js and Tailwind CSS, increasing engagement by 50%",
      "Integrated Jest and React Testing Library into CI pipelines to prevent regressions",
      "Deployed front-end builds using AWS S3 and CloudFront to improve scalability and deployment reliability",
    ],
  },
  {
    company: "CottonHoldings",
    role: "Full-Stack Software Engineering Intern",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Built and deployed Python pipelines for storm data analysis and alert generation for 100+ customers",
      "Increased alert accuracy by examining meteorological datasets with Python-based analysis tools",
      "Rebuilt an internal CRM platform with a more user-friendly interface using React and Azure for 50+ employees",
    ],
  },
];

const projects = [
  {
    name: "AI Prior Authorization Assistant",
    subtitle: "Startup In Progress",
    stack: ["AWS Textract", "LLM API", "Next.js", "Healthcare"],
    status: "in-progress" as const,
    bullets: [
      "Developing a web platform to automate prior authorization drafting for small independent medical practices",
      "Built an AI pipeline using AWS Textract for document parsing and an LLM API to generate authorization drafts",
      "Targeting a niche where 60% of independent practices spend 35+ minutes per authorization request without automation",
    ],
  },
  {
    name: "Glance",
    subtitle: "Ambient e-ink style mobile dashboard",
    stack: ["React Native", "Expo", "MongoDB"],
    status: "shipped" as const,
    bullets: [
      "Built a React Native app that transforms into a minimal black-and-white e-ink style display when rotated to landscape",
      "Aggregates to-do lists, calendar events, and music playback into a single ambient view",
      "Engineered a MongoDB backend to sync user data across sessions with real-time updates and persistent state",
    ],
  },
  {
    name: "Longhorn Life Sciences Startup",
    subtitle: "via Convergent",
    stack: ["React Native", "Firebase", "BLE"],
    status: "shipped" as const,
    bullets: [
      "Developed full-stack mobile and cloud infrastructure using React Native, Firebase, and BLE communication protocols",
      "Architected scalable database schema with offline caching and real-time synchronization pipeline",
      "Created image upload system with metadata management and clinical documentation features",
    ],
  },
  {
    name: "Proxi",
    subtitle: "Wearable screen-time monitor",
    stack: ["Raspberry Pi", "OpenCV", "React Native"],
    status: "shipped" as const,
    bullets: [
      "Designed a wearable system using Raspberry Pi to monitor cross-device screen time, reducing device use by 30%",
      "Implemented distance-based object detection using OpenCV to flag unsafe screen proximity",
      "Developed a mobile app providing real-time usage analytics to parents, increasing behavioral compliance by 35%",
    ],
  },
];


// ===== TYPES =====

type FileName = "about.tsx" | "experience.ts" | "projects.tsx";

const ALL_FILES: FileName[] = [
  "about.tsx",
  "experience.ts",
  "projects.tsx",
];

// ===== SHARED CONTENT STYLES =====

const S = {
  page: {
    padding: "40px 52px 60px",
    maxWidth: "820px",
  } as React.CSSProperties,
  fileLabel: {
    fontFamily: "var(--font-geist-mono), monospace",
    fontSize: "12px",
    color: "#6b6b6b",
    marginBottom: "32px",
    display: "block",
  } as React.CSSProperties,
  sectionHeading: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "1.4px",
    textTransform: "uppercase" as const,
    color: "#58a6ff",
    fontFamily: "var(--font-geist-mono), monospace",
    marginBottom: "20px",
    marginTop: "0",
  },
  card: {
    backgroundColor: "#0d1117",
    border: "1px solid #21262d",
    borderRadius: "6px",
    padding: "20px 24px",
    marginBottom: "12px",
  } as React.CSSProperties,
  tag: {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "3px",
    fontSize: "11px",
    fontFamily: "var(--font-geist-mono), monospace",
    fontWeight: 500,
  } as React.CSSProperties,
};

// ===== FILE ICON =====

function FileIcon({ name, size = 10 }: { name: string; size?: number }) {
  if (name.endsWith(".tsx")) {
    return (
      <span
        style={{
          color: "#7aa2f7",
          fontSize: size,
          fontWeight: 700,
          fontFamily: "var(--font-geist-mono), monospace",
          flexShrink: 0,
        }}
      >
        TSX
      </span>
    );
  }
  return (
    <span
      style={{
        color: "#5c7cfa",
        fontSize: size,
        fontWeight: 700,
        fontFamily: "var(--font-geist-mono), monospace",
        flexShrink: 0,
      }}
    >
      TS
    </span>
  );
}

// ===== FILE CONTENTS =====

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

function AboutContent() {
  const [art, setArt] = useState(ASCII_FRAMES[0]);
  useEffect(() => {
    setArt(ASCII_FRAMES[Math.floor(Math.random() * ASCII_FRAMES.length)]);
  }, []);

  return (
    <div style={S.page}>
      <span style={S.fileLabel}>// about.tsx</span>

      {/* Hero */}
      <div style={{ marginBottom: "44px", display: "flex", gap: "32px", alignItems: "flex-start" }}>
        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "12px",
              color: "#6b6b6b",
              marginBottom: "12px",
            }}
          >
            /** @author Vaibav Subramanian */
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
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
          <p
            style={{
              fontSize: "15px",
              color: "#7aa2f7",
              fontFamily: "var(--font-geist-mono), monospace",
              margin: "0 0 16px",
            }}
          >
            Software Engineer · ML Researcher · Builder
          </p>
          <p
            style={{
              fontSize: "13.5px",
              fontFamily: "var(--font-geist-sans), sans-serif",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "#7dcfff" }}>CS student</span>
            <span style={{ color: "#d4d4d4" }}> at the </span>
            <span style={{ color: "#58a6ff" }}>University of Texas at Austin</span>
            <span style={{ color: "#d4d4d4" }}>, graduating </span>
            <span style={{ color: "#e0af68" }}>2028</span>
            <span style={{ color: "#d4d4d4" }}>. Building at the intersection of </span>
            <span style={{ color: "#7aa2f7" }}>machine learning</span>
            <span style={{ color: "#d4d4d4" }}> and </span>
            <span style={{ color: "#7aa2f7" }}>full-stack engineering</span>
            <span style={{ color: "#d4d4d4" }}>.</span>
          </p>
        </div>

        {/* ASCII art */}
        <pre
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "5px",
            lineHeight: 1,
            color: "rgba(56, 139, 253, 0.45)",
            margin: 0,
            padding: "8px",
            border: "1px solid #21262d",
            borderRadius: "6px",
            backgroundColor: "#010409",
            flexShrink: 0,
            userSelect: "none",
            whiteSpace: "pre",
            width: "fit-content",
          }}
        >
          {art}
        </pre>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        {[
          { num: "4", label: "internships" },
          { num: "4", label: "projects" },
          { num: "10", label: "languages" },
          { num: "10", label: "frameworks" },
        ].map(({ num, label }) => (
          <div
            key={label}
            style={{
              ...S.card,
              textAlign: "center",
              padding: "16px 12px",
              marginBottom: 0,
            }}
          >
            <div
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#e0af68",
                fontFamily: "var(--font-geist-mono), monospace",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              {num}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#6b6b6b",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
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
            src="https://streak-stats.demolab.com?user=vvaibavs&background=0d1117&border=21262d&ring=388bfd&fire=7dcfff&currStreakNum=e6edf3&currStreakLabel=7dcfff&sideNums=e6edf3&sideLabels=d4d4d4&dates=6b6b6b&stroke=21262d"
            alt="GitHub Streak Stats"
            style={{ borderRadius: "6px", height: "auto", maxWidth: "100%" }}
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
            <div
              key={label}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "#388bfd", flexShrink: 0 }}>▸</span>
              <span>
                <span style={{ color: "#79c0ff" }}>{label}</span>
                <span style={{ color: "#6b6b6b" }}> — </span>
                <span style={{ color: "#7dcfff" }}>{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      {(() => {
        const languages  = ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Assembly", "Arduino", "HTML", "SQL"];
        const frameworks = ["React", "Next.js", "TensorFlow", "Expo", "TailwindCSS", "Flask", "Pandas", "NumPy", "Node.js", "Git"];
        return (
          <>
            <div style={{ marginBottom: "28px" }}>
              <p style={S.sectionHeading}>Languages</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {languages.map((s, i) => (
                  <SkillChip key={s} label={s} color={LANG_COLORS[i % LANG_COLORS.length]} />
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={S.sectionHeading}>Frameworks &amp; Tools</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {frameworks.map((s, i) => (
                  <SkillChip key={s} label={s} color={FW_COLORS[i % FW_COLORS.length]} />
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={S.sectionHeading}>Organizations</p>
              <div style={S.card}>
                <div style={{ marginBottom: "12px" }}>
                  <h3 style={{ margin: "0 0 3px", fontSize: "15px", fontWeight: 600, color: "#79c0ff", fontFamily: "var(--font-geist-mono), monospace" }}>
                    Convergent
                  </h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#7aa2f7", fontFamily: "var(--font-geist-mono), monospace" }}>
                    Health Tech Subteam Lead
                  </p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    "Led a Health Tech subteam, coordinating engineers & product members to a shared product vision",
                    "Guided team execution and communication to maintain clarity and momentum throughout development",
                    "Represented the team by presenting our work to judges, venture capitalists, and business professionals",
                  ].map((b) => (
                    <li key={b} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#d4d4d4", fontFamily: "var(--font-geist-sans), sans-serif", lineHeight: 1.65 }}>
                      <span style={{ color: "#388bfd", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      })()}

      {/* Links */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <a
          href="https://github.com/vvaibavs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "7px 16px",
            backgroundColor: "#161b22",
            border: "1px solid #21262d",
            borderRadius: "4px",
            color: "#d4d4d4",
            fontSize: "13px",
            fontFamily: "var(--font-geist-mono), monospace",
            textDecoration: "none",
            transition: "border-color 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#388bfd";
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#21262d";
            (e.currentTarget as HTMLAnchorElement).style.color = "#d4d4d4";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
            padding: "7px 16px",
            backgroundColor: "#388bfd",
            border: "1px solid #388bfd",
            borderRadius: "4px",
            color: "#ffffff",
            fontSize: "13px",
            fontFamily: "var(--font-geist-mono), monospace",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" />
          </svg>
          resume.pdf
        </a>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div style={S.page}>
      <span style={S.fileLabel}>// experience.ts</span>
      <p style={S.sectionHeading}>Work Experience</p>

      <div style={{ position: "relative", paddingLeft: "20px", borderLeft: "1px solid #21262d" }}>
        {experience.map((job) => (
          <div key={job.company} style={{ marginBottom: "28px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "-25px",
                top: "18px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#388bfd",
                border: "2px solid #0d1117",
              }}
            />
            <div style={S.card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 3px",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#79c0ff",
                      fontFamily: "var(--font-geist-mono), monospace",
                    }}
                  >
                    {job.company}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#7aa2f7",
                      fontFamily: "var(--font-geist-mono), monospace",
                    }}
                  >
                    {job.role}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#6b6b6b",
                    fontFamily: "var(--font-geist-mono), monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  // {job.period}
                </span>
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "13px",
                      color: "#d4d4d4",
                      fontFamily: "var(--font-geist-sans), sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: "#388bfd", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  default:        { bg: "#161b22",        color: "#7dcfff" },
  "React Native": { bg: "#0d1117",        color: "#7aa2f7" },
  "Next.js":      { bg: "#0d1117",        color: "#7dcfff" },
  TensorFlow:     { bg: "#0d1117",        color: "#ff9e80" },
  Firebase:       { bg: "#0d1117",        color: "#79c0ff" },
  "AWS Textract": { bg: "#0d1117",        color: "#7aa2f7" },
  "LLM API":      { bg: "#0d1117",        color: "#f7768e" },
  MongoDB:        { bg: "#0d1117",        color: "#7aa2f7" },
  OpenCV:         { bg: "#0d1117",        color: "#f7768e" },
};

function ProjectTag({ label }: { label: string }) {
  const style = TAG_COLORS[label] ?? TAG_COLORS.default;
  return (
    <span
      style={{
        ...S.tag,
        backgroundColor: style.bg,
        color: style.color,
        border: `1px solid ${style.color}22`,
      }}
    >
      {label}
    </span>
  );
}

const PROJECT_IMAGES: Record<string, { images: { src: string; alt: string }[]; layout: "overlap" | "single" }> = {
  "AI Prior Authorization Assistant": {
    images: [
      { src: "/priorauth-dashboard.png", alt: "PriorAuth dashboard" },
      { src: "/priorauth-landing.png",   alt: "PriorAuth landing page" },
    ],
    layout: "overlap",
  },
  "Glance": {
    images: [
      { src: "/glance-2.png", alt: "Glance landscape view" },
      { src: "/glance-1.jpg", alt: "Glance portrait view" },
    ],
    layout: "overlap",
  },
};

function ProjectsContent() {
  return (
    <div style={S.page}>
      <span style={S.fileLabel}>// projects.tsx</span>
      <p style={S.sectionHeading}>Projects</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {projects.map((proj) => {
          const imgs = PROJECT_IMAGES[proj.name];
          return (
            <div key={proj.name} style={S.card}>
              {/* Header row */}
              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2px", flexWrap: "wrap" }}>
                  <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "#7dcfff", fontFamily: "var(--font-geist-mono), monospace" }}>
                    {proj.name}
                  </h3>
                  {proj.status === "in-progress" && (
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-geist-mono), monospace", color: "#79c0ff", backgroundColor: "#0d1117", border: "1px solid #79c0ff33", padding: "1px 6px", borderRadius: "3px" }}>
                      in-progress
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#6b6b6b", fontFamily: "var(--font-geist-mono), monospace" }}>
                    // {proj.subtitle}
                  </span>
                  <span style={{ color: "#21262d", fontSize: "11px" }}>·</span>
                  <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                    {proj.stack.map((s) => <ProjectTag key={s} label={s} />)}
                  </div>
                </div>
              </div>

              {/* Body: bullets + optional images */}
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", flex: 1 }}>
                  {proj.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#d4d4d4", fontFamily: "var(--font-geist-sans), sans-serif", lineHeight: 1.65 }}>
                      <span style={{ color: "#388bfd", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {imgs && (
                  <div style={{ position: "relative", flexShrink: 0, width: "220px", height: "130px" }}>
                    {/* Back image */}
                    <div style={{ position: "absolute", right: 0, top: 0, width: "170px", borderRadius: "6px", overflow: "hidden", border: "1px solid #21262d", boxShadow: "0 4px 16px rgba(0,0,0,0.5)", transform: "rotate(1deg)", zIndex: 1 }}>
                      <Image src={imgs.images[0].src} alt={imgs.images[0].alt} width={400} height={280} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: "110px" }} />
                    </div>
                    {/* Front image */}
                    {imgs.images[1] && (
                      <div style={{ position: "absolute", left: 0, bottom: 0, width: proj.name === "Glance" ? "52px" : "155px", borderRadius: "6px", overflow: "hidden", border: "1px solid #30363d", boxShadow: "0 6px 20px rgba(0,0,0,0.6)", transform: "rotate(-1deg)", zIndex: 2 }}>
                        <Image src={imgs.images[1].src} alt={imgs.images[1].alt} width={400} height={700} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: "110px" }} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LANG_COLORS = ["#7dcfff", "#79c0ff", "#ff9e80", "#7aa2f7", "#e0af68", "#f7768e", "#58a6ff", "#89ddff"];
const FW_COLORS   = ["#7aa2f7", "#7dcfff", "#79c0ff", "#58a6ff", "#e0af68", "#f7768e", "#ff9e80", "#388bfd"];

function SkillChip({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        ...S.tag,
        padding: "5px 12px",
        fontSize: "12px",
        backgroundColor: "#0d1117",
        border: `1px solid ${color}33`,
        color: color,
      }}
    >
      {label}
    </span>
  );
}


// ===== MAIN COMPONENT =====

export default function Home() {
  const [activeFile, setActiveFile] = useState<FileName>("about.tsx");
  const [openTabs, setOpenTabs] = useState<FileName[]>(["about.tsx"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Collapse sidebar on small screens by default
  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  function openFile(filename: FileName) {
    if (!openTabs.includes(filename)) {
      setOpenTabs((prev) => [...prev, filename]);
    }
    setActiveFile(filename);
    // Close sidebar on mobile after selecting a file
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#0d1117",
        color: "#d4d4d4",
        overflow: "hidden",
      }}
    >
      {/* ── Title Bar ── */}
      <div
        style={{
          height: "30px",
          backgroundColor: "#010409",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color: "#6b6b6b",
          userSelect: "none",
          flexShrink: 0,
          borderBottom: "1px solid #21262d",
          fontFamily: "var(--font-geist-sans), sans-serif",
        }}
      >
        vaibav-subramanian — Portfolio
      </div>

      {/* ── Main Workspace ── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* ── Activity Bar ── */}
        <div
          style={{
            width: "48px",
            backgroundColor: "#0d1117",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "4px",
            flexShrink: 0,
            borderRight: "1px solid #21262d",
          }}
        >
          {/* Explorer toggle */}
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            title="Explorer"
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              borderLeft: `2px solid ${sidebarOpen ? "#388bfd" : "transparent"}`,
              color: sidebarOpen ? "#ffffff" : "#6b6b6b",
              cursor: "pointer",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38H2.5v-15H7v4.05L8.5 13h6v9.5zm0-11H9V7h5.5v4.5zm3 7H16V12.5l-1.5-1.5H8.5V1.5H14v4.05L15.5 7h5.7v12z" />
            </svg>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/vvaibavs"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b6b6b",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#d4d4d4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b6b6b")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b6b6b",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#d4d4d4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b6b6b")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" />
            </svg>
          </a>

          {/* Spacer */}
          <div style={{ flex: 1 }} />
        </div>

        {/* ── Sidebar ── */}
        {sidebarOpen && (
          <div
            style={{
              width: "220px",
              backgroundColor: "#0d1117",
              borderRight: "1px solid #21262d",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            {/* Explorer header */}
            <div
              style={{
                padding: "10px 12px 6px",
                fontSize: "11px",
                color: "#999999",
                fontWeight: 600,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                userSelect: "none",
                fontFamily: "var(--font-geist-sans), sans-serif",
              }}
            >
              Explorer
            </div>

            {/* File tree */}
            <div style={{ overflow: "auto", flex: 1 }}>
              {/* Folder label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "3px 8px",
                  fontSize: "12px",
                  color: "#d4d4d4",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  userSelect: "none",
                  letterSpacing: "0.5px",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: "10px", color: "#888" }}>▼</span>
                <span>PORTFOLIO</span>
              </div>

              {/* Files */}
              {ALL_FILES.map((file) => (
                <SidebarFile
                  key={file}
                  file={file}
                  active={activeFile === file}
                  onClick={() => openFile(file)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Editor ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: "#0d1117",
            minWidth: 0,
          }}
        >
          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              backgroundColor: "#161b22",
              borderBottom: "1px solid #21262d",
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

          {/* Breadcrumb */}
          {openTabs.length > 0 && (
            <div
              style={{
                padding: "3px 16px",
                fontSize: "12px",
                color: "#6b6b6b",
                backgroundColor: "#0d1117",
                borderBottom: "1px solid #2e2e2e",
                fontFamily: "var(--font-geist-sans), sans-serif",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>PORTFOLIO</span>
              <span style={{ color: "#555" }}>›</span>
              <span style={{ color: "#d4d4d4" }}>{activeFile}</span>
            </div>
          )}

          {/* Editor content */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "auto",
              backgroundColor: "#0d1117",
            }}
          >
            {openTabs.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: "#555",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: "14px",
                }}
              >
                Select a file from the explorer
              </div>
            ) : (
              editorContent[activeFile]
            )}
          </div>
        </div>
      </div>

      {/* ── Status Bar ── */}
      <div
        style={{
          height: "22px",
          backgroundColor: "#388bfd",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          fontSize: "12px",
          color: "#ffffff",
          flexShrink: 0,
          fontFamily: "var(--font-geist-sans), sans-serif",
          userSelect: "none",
          gap: "0",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            paddingRight: "12px",
            borderRight: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
          </svg>
          main
        </span>
        <span style={{ padding: "0 12px" }}>✓ 0 problems</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: "0" }}>
          <span style={{ padding: "0 10px", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
            TypeScript JSX
          </span>
          <span style={{ padding: "0 10px", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
            UTF-8
          </span>
          <span style={{ padding: "0 10px", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
            Ln 1, Col 1
          </span>
        </div>
      </div>
    </div>
  );
}

// ===== SUB-COMPONENTS =====

function SidebarFile({
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
        padding: "3px 8px 3px 28px",
        cursor: "pointer",
        backgroundColor: active ? "#1c2128" : hovered ? "#161b22" : "transparent",
        color: active ? "#ffffff" : "#d4d4d4",
        fontSize: "13px",
        fontFamily: "var(--font-geist-sans), sans-serif",
        userSelect: "none",
      }}
    >
      <FileIcon name={file} />
      <span>{file}</span>
    </div>
  );
}

function EditorTab({
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
        gap: "8px",
        padding: "0 16px",
        height: "35px",
        cursor: "pointer",
        backgroundColor: active ? "#0d1117" : hovered ? "#2a2a2a" : "#161b22",
        borderRight: "1px solid #21262d",
        borderTop: `1px solid ${active ? "#388bfd" : "transparent"}`,
        color: active ? "#ffffff" : "#6b6b6b",
        fontSize: "13px",
        fontFamily: "var(--font-geist-sans), sans-serif",
        whiteSpace: "nowrap",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      <FileIcon name={tab} />
      <span>{tab}</span>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          padding: "0 2px",
          lineHeight: 1,
          fontSize: "16px",
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
