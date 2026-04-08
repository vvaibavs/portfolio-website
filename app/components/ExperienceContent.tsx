import { S } from "./styles";

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

export function ExperienceContent() {
  return (
    <div style={S.page}>
      <span style={S.fileLabel}>// experience.ts</span>
      <p style={S.sectionHeading}>Work Experience</p>

      <div style={{ position: "relative", paddingLeft: "20px", borderLeft: "1px solid #2a2a2a" }}>
        {experience.map((job) => (
          <div key={job.company} style={{ marginBottom: "28px", position: "relative" }}>
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-25px",
                top: "18px",
                width: "8px",
                height: "8px",
                backgroundColor: "#4a9eff",
                border: "2px solid #0a0a0a",
              }}
            />
            <div style={S.card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ margin: "0 0 3px", fontSize: "14px", fontWeight: 700, color: "#79c0ff", fontFamily: "var(--font-geist-mono), monospace" }}>
                    {job.company}
                  </h3>
                  <p style={{ margin: 0, fontSize: "12px", color: "#4ec9b0", fontFamily: "var(--font-geist-mono), monospace" }}>
                    {job.role}
                  </p>
                </div>
                <span style={{ fontSize: "11px", color: "#444444", fontFamily: "var(--font-geist-mono), monospace", whiteSpace: "nowrap" }}>
                  // {job.period}
                </span>
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {job.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#c0c0c0", fontFamily: "var(--font-geist-sans), sans-serif", lineHeight: 1.65 }}>
                    <span style={{ color: "#4a9eff", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
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
