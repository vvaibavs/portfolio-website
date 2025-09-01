// app/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-white text-gray-900 font-[Inter]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#BF5700] text-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-xl tracking-wide">Portfolio</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-gray-200 transition">
              Home
            </a>
            <a href="#info" className="hover:text-gray-200 transition">
              Info
            </a>
            <a href="#projects" className="hover:text-gray-200 transition">
              Projects
            </a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#BF5700] to-[#ff9d62] text-white"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 animate-pulse">
          Vaibav Subramanian
        </h1>
      </section>

      {/* Info Section */}
      <section
        id="info"
        className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-6"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl text-lg text-center leading-relaxed">
          Hi, I’m Vaibav! I’m passionate about technology, engineering, and
          creating impactful solutions. This portfolio is built with Next.js,
          TypeScript, and Tailwind CSS, inspired by UT Austin’s color theme.
        </p>
      </section>

{/* Projects Section */}
<section
  id="projects"
  className="h-screen flex flex-col items-center justify-center bg-white text-gray-900 relative overflow-hidden"
>
  <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-12 z-10">
    PROJECTS
  </h2>

  {/* Orbit Container */}
  <div className="relative w-[400px] h-[400px] flex items-center justify-center">
    <div className="absolute w-full h-full animate-spin-slow">
      {/* Image 1 */}
      <div className="absolute top-1/2 left-1/2">
        <Image
          src=""
          alt="Project 1"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
          style={{ transform: "rotate(0deg) translateX(180px)" }}
        />
      </div>
      {/* Image 2 */}
      <div className="absolute top-1/2 left-1/2">
        <Image
          src=""
          alt="Project 2"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
          style={{ transform: "rotate(90deg) translateX(180px)" }}
        />
      </div>
      {/* Image 3 */}
      <div className="absolute top-1/2 left-1/2">
        <Image
          src=""
          alt="Project 3"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
          style={{ transform: "rotate(180deg) translateX(180px)" }}
        />
      </div>
      {/* Image 4 */}
      <div className="absolute top-1/2 left-1/2">
        <Image
          src=""
          alt="Project 4"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
          style={{ transform: "rotate(270deg) translateX(180px)" }}
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
