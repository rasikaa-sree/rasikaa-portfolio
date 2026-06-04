import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import { services, experiences, whyCards, projects, marqueeItems } from "../data";
import "./Home.css";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-blob" />
        
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-tag">UI/UX Designer Intern @ SYZY Technologies</div>
            <h1>
              Hello! I'm Rasikaa,
              <span className="accent">UI/UX Designer</span>
            </h1>
            <p className="hero-sub">
              I'm a passionate designer crafting intuitive and engaging digital experiences. Currently honing my skills as an intern, I turn complex problems into elegant, user-centric solutions.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn-primary">View Portfolio</a>
              <a href="#contact" className="btn-outline">Hire me</a>
            </div>
            <div className="hero-stats">
              <div><div className="stat-num">UI/UX<span></span></div><div className="stat-label">Design Focus</div></div>
              <div><div className="stat-num">3<span>+</span></div><div className="stat-label">Case Studies</div></div>
              <div><div className="stat-num">Figma<span></span></div><div className="stat-label">Primary Tool</div></div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container">
              {/* Concentric rings background */}
              <div className="hero-rings">
                <div className="hero-ring r-1"></div>
                <div className="hero-ring r-2"></div>
                <div className="hero-ring r-3"></div>
                <div className="hero-ring r-4"></div>
                <div className="hero-ring r-5"></div>
                <div className="hero-ring r-6"></div>
                <div className="hero-ring r-7"></div>
              </div>
              
              {/* The solid peach arch background */}
              <div className="hero-bg-shape"></div>
              
              {/* The purple doodles and tools that appear gracefully on hover */}
              <div className="hero-hover-doodles">
                <svg className="doodle-layer" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hearts, Stars, and Spirals mimicking the Figma mockup */}
                  <path d="M120 180 C120 150, 150 150, 160 170 C170 150, 200 150, 200 180 C200 210, 160 240, 160 240 C160 240, 120 210, 120 180 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M350 140 L360 160 L385 160 L365 175 L375 200 L350 185 L325 200 L335 175 L315 160 L340 160 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M80 250 Q100 230, 120 260 T160 240" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M400 270 Q380 250, 360 280 T320 260" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M100 120 Q110 90, 130 110 T150 80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="380" cy="240" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="150" cy="320" r="12" stroke="currentColor" strokeWidth="2.5"/>
                </svg>

                <span className="doodle-word word-1">🎨 Creative</span>
                <span className="doodle-word word-2">✨ Figma Ninja</span>
                <span className="doodle-word word-3">🔍 Empathetic</span>
                <span className="doodle-word word-4">🚀 Prototyping</span>
              </div>

              {/* Explicit transparent placeholder - replace with your own transparent portrait PNG! */}
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 450'%3E%3Cpath fill='%23ccc' d='M200 70c-44 0-80 36-80 80s36 80 80 80 80-36 80-80-36-80-80-80zm0 180c-66 0-160 33-160 100v100h320v-100c0-67-94-100-160-100z'/%3E%3C/svg%3E" 
                alt="Rasikaa Transparent Portrait Placeholder" 
                className="hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-dot" />{item}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="portfolio-section services-bg" id="services">
        <div className="section-header">
          <div>
            <div className="section-label">What I Do</div>
            <h2 className="section-title">My Services</h2>
          </div>
          <p className="section-sub">Delivering pixel-perfect experiences from strategy to final handoff.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <FadeIn key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EXPERIENCE + WHY HIRE ME */}
      <section className="portfolio-section" id="resume">
        <div className="section-label">Career Path</div>
        <h2 className="section-title">Work Experience</h2>
        <div className="exp-layout">
          <div className="exp-timeline">
            {experiences.map((e, i) => (
              <FadeIn key={i} className="exp-item">
                <div className="exp-dot" />
                <div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-desc">{e.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div>
            <div className="section-label">Why Choose Me</div>
            <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "1.2rem" }}>Why Hire Me?</h2>
            <div className="why-side">
              {whyCards.map((w, i) => (
                <FadeIn key={i} className="why-card">
                  <div className="why-num">{w.num}</div>
                  <div className="why-label">{w.label}</div>
                  <div className="why-desc">{w.desc}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="portfolio-section projects-bg" id="work">
        <div className="section-header">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">My Portfolio</h2>
          </div>
          <Link to="/projects" className="btn-outline-sm">See All</Link>
        </div>
        <div className="projects-grid">
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-section cta-bg" id="contact">
        <div className="section-label" style={{ justifyContent: "center" }}>Let's Connect</div>
        <h2 className="section-title">
          Have an Awesome Project<br />
          <span style={{ color: "var(--orange)" }}>Idea? Let's Discuss.</span>
        </h2>
        <p className="cta-sub">
          Drop your email and I'll get back to you within 24 hours to explore what we can build together.
        </p>
        <div className="email-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn-primary">Send</button>
        </div>
      </section>
    </>
  );
}
