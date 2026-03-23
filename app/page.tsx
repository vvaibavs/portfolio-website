// app/page.tsx
"use client";

import { useEffect, useState } from "react";

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
    name: "Longhorn Life Sciences Startup",
    subtitle: "via Convergent",
    bullets: [
      "Developed full-stack mobile and cloud infrastructure using React Native, Firebase, and BLE communication protocols",
      "Architected scalable database schema with offline caching and implemented data pipeline for real-time synchronization",
      "Created image upload system with metadata management and clinical documentation features for healthcare application",
    ],
    tags: ["React Native", "Firebase", "BLE"],
  },
  {
    name: "Proxi",
    subtitle: "Wearable screen-time monitor",
    bullets: [
      "Designed a wearable system using Raspberry Pi to monitor cross-device screen time, reducing device use by 30%",
      "Implemented distance-based object detection using OpenCV to flag unsafe screen proximity and trigger real-time alerts",
      "Developed a mobile app that provided real-time usage analytics to parents, increasing behavioral compliance by 35%",
    ],
    tags: ["Raspberry Pi", "OpenCV", "Mobile"],
  },
  {
    name: "AI Prior Authorization Assistant",
    subtitle: "Startup In Progress",
    bullets: [
      "Developing a web platform to automate prior authorization drafting for small independent medical practices",
      "Built an AI pipeline using AWS Textract for document parsing and an LLM API to generate authorization drafts",
      "Targeting a niche where 60% of independent practices spend 35+ minutes per authorization request without automation",
    ],
    tags: ["AWS Textract", "LLM", "Healthcare"],
    inProgress: true,
  },
];

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Assembly", "Arduino", "HTML", "SQL"],
  "Frameworks & Tools": ["React", "Next.js", "TensorFlow", "Expo", "TailwindCSS", "Flask", "Pandas", "NumPy", "Node.js", "Git"],
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    ["home", "experience", "projects", "organizations", "skills"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#organizations", label: "Organizations" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#BF5700] text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-bold text-lg tracking-wide">Vaibav Subramanian</span>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors hover:text-orange-200 ${
                  activeSection === href.slice(1) ? "text-white underline underline-offset-4" : "text-orange-100"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#BF5700] via-[#d96a1a] to-[#f0843a] text-white px-6 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Vaibav Subramanian
        </h1>
        <p className="text-xl md:text-2xl font-light text-orange-100 mb-8 max-w-xl">
          Software Engineer · ML Researcher · Builder
        </p>
        <div className="flex gap-4 text-sm font-semibold">
          <a
            href="#experience"
            className="bg-white text-[#BF5700] px-6 py-2 rounded-full hover:bg-orange-100 transition shadow"
          >
            View Experience
          </a>
          <a
            href="#projects"
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#BF5700] transition"
          >
            See Projects
          </a>
        </div>
        <div className="absolute bottom-8 animate-bounce text-orange-200 text-2xl select-none">↓</div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-[#BF5700]">Experience</h2>
          <div className="relative border-l-2 border-[#BF5700] pl-8 space-y-12">
            {experience.map(({ company, role, period, bullets }) => (
              <div key={company} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#BF5700] border-2 border-white shadow" />
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{company}</h3>
                      <p className="text-[#BF5700] font-medium text-sm">{role}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {bullets.map((b) => (
                      <li key={b} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-[#BF5700] mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-[#BF5700]">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ name, subtitle, bullets, tags, inProgress }) => (
              <div
                key={name}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-lg transition flex flex-col"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-bold text-gray-900 leading-snug">{name}</h3>
                  {inProgress && (
                    <span className="ml-2 text-[10px] font-semibold bg-orange-100 text-[#BF5700] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-4">{subtitle}</p>
                <ul className="space-y-2 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-[#BF5700] shrink-0 mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-orange-50 text-[#BF5700] border border-orange-200 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section id="organizations" className="py-24 px-6 bg-[#BF5700]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-white">Organizations</h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
              <h3 className="text-2xl font-bold text-white">Convergent</h3>
              <span className="text-xs text-orange-200 font-mono bg-white/10 px-3 py-1 rounded-full">
                Health Tech Subteam Lead
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Led a Health Tech subteam, coordinating engineers & product members to a shared product vision",
                "Guided team execution and communication to maintain clarity and momentum throughout development",
                "Represented the team by presenting our work to judges, venture capitalists, and business professionals",
              ].map((b) => (
                <li key={b} className="text-sm text-orange-100 flex gap-2">
                  <span className="text-orange-300 shrink-0 mt-0.5">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-[#BF5700]">Skills</h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-[#BF5700] hover:text-[#BF5700] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 bg-white border-t border-gray-100">
        <p>Vaibav Subramanian</p>
      </footer>
    </div>
  );
}
