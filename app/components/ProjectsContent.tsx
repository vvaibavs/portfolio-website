import Image from "next/image";
import { S } from "./styles";

const projects: {
  name: string;
  subtitle: string;
  stack: string[];
  status: "in-progress" | "shipped";
  bullets: string[];
  url?: string;
}[] = [
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
  {
    name: "AI Bid Extractor",
    subtitle: "Bid document analyzer",
    stack: ["React", "JavaScript", "FastAPI", "Gemini AI"],
    status: "shipped" as const,
    url: "https://ai-bid-extractor.vercel.app/",
    bullets: [
      "Built a full-stack bid document analysis platform with a React/JavaScript frontend and Python FastAPI backend handling document ingestion and AI processing",
      "Integrated Google Gemini AI through a structured multi-step prompt pipeline that parses uploaded bid documents and extracts deliverables, deadlines, and contractor requirements",
      "Engineered a document-to-context pipeline converting raw PDFs into structured text chunks, optimizing token efficiency and LLM response accuracy",
    ],
  },
];

const PROJECT_IMAGES: Record<string, { images: { src: string; alt: string }[] }> = {
  "AI Prior Authorization Assistant": {
    images: [
      { src: "/priorauth-dashboard.png", alt: "PriorAuth dashboard" },
      { src: "/priorauth-landing.png",   alt: "PriorAuth landing page" },
    ],
  },
  "Glance": {
    images: [
      { src: "/glance-2.png", alt: "Glance landscape view" },
      { src: "/glance-1.jpg", alt: "Glance portrait view" },
    ],
  },
};

const TAG_COLORS: Record<string, string> = {
  "React Native": "#7aa2f7",
  "Next.js":      "#7dcfff",
  TensorFlow:     "#e0af68",
  Firebase:       "#79c0ff",
  "AWS Textract": "#7aa2f7",
  "LLM API":      "#f7768e",
  MongoDB:        "#4ec9b0",
  OpenCV:         "#e0af68",
  Expo:           "#4a9eff",
  BLE:            "#4ec9b0",
  Healthcare:     "#7aa2f7",
  "Raspberry Pi": "#e0af68",
  React:          "#7aa2f7",
  JavaScript:     "#e0af68",
  FastAPI:        "#4ec9b0",
  "Gemini AI":    "#4a9eff",
};

function ProjectTag({ label }: { label: string }) {
  const color = TAG_COLORS[label] ?? "#888888";
  return (
    <span
      style={{
        ...S.tag,
        backgroundColor: "#0a0a0a",
        color,
        border: `1px solid ${color}22`,
      }}
    >
      {label}
    </span>
  );
}

export function ProjectsContent() {
  return (
    <div style={S.page}>
      <span style={S.fileLabel}>// projects.tsx</span>
      <p style={S.sectionHeading}>Projects</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {projects.map((proj) => {
          const imgs = PROJECT_IMAGES[proj.name];
          return (
            <div key={proj.name} style={S.card}>
              {/* Header */}
              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2px", flexWrap: "wrap" }}>
                  <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#79c0ff", fontFamily: "var(--font-geist-mono), monospace" }}>
                    {proj.name}
                  </h3>
                  {proj.status === "in-progress" && (
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-geist-mono), monospace", color: "#4ec9b0", backgroundColor: "#0a0a0a", border: "1px solid #4ec9b022", padding: "1px 6px" }}>
                      in-progress
                    </span>
                  )}
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ fontSize: "10px", fontFamily: "var(--font-geist-mono), monospace", color: "#e0af68", textDecoration: "none", border: "1px solid #e0af6833", padding: "1px 6px", backgroundColor: "#0a0a0a" }}
                    >
                      live ↗
                    </a>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#444444", fontFamily: "var(--font-geist-mono), monospace" }}>
                    // {proj.subtitle}
                  </span>
                  <span style={{ color: "#2a2a2a", fontSize: "11px" }}>·</span>
                  <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                    {proj.stack.map((s) => <ProjectTag key={s} label={s} />)}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", flex: 1 }}>
                  {proj.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#c0c0c0", fontFamily: "var(--font-geist-sans), sans-serif", lineHeight: 1.65 }}>
                      <span style={{ color: "#4a9eff", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {imgs && (
                  <div style={{ position: "relative", flexShrink: 0, width: "220px", height: "130px" }}>
                    <div style={{ position: "absolute", right: 0, top: 0, width: "170px", overflow: "hidden", border: "1px solid #2a2a2a", boxShadow: "0 4px 16px rgba(0,0,0,0.8)", transform: "rotate(1deg)", zIndex: 1 }}>
                      <Image src={imgs.images[0].src} alt={imgs.images[0].alt} width={400} height={280} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: "110px", filter: "grayscale(20%)" }} />
                    </div>
                    {imgs.images[1] && (
                      <div style={{ position: "absolute", left: 0, bottom: 0, width: proj.name === "Glance" ? "52px" : "155px", overflow: "hidden", border: "1px solid #333", boxShadow: "0 6px 20px rgba(0,0,0,0.9)", transform: "rotate(-1deg)", zIndex: 2 }}>
                        <Image src={imgs.images[1].src} alt={imgs.images[1].alt} width={400} height={700} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: "110px", filter: "grayscale(20%)" }} />
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
