import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import "./CaseStudy.css";

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const others = projects.filter((p) => p.id !== id).slice(0, 2);

  useEffect(() => {
    if (!project) navigate("/");
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="cs-page">
      {/* HERO */}
      <section className="cs-hero" style={{ background: project.bgGradient }}>
        <div className="cs-hero-inner">
          <Link to="/" className="cs-back">← Back to Portfolio</Link>
          <div className="cs-hero-tags">
            {project.tags.map((t, i) => <span key={i} className="cs-tag">{t}</span>)}
            <span className="cs-tag">{project.year}</span>
          </div>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-overview">{project.overview}</p>
          <div className="cs-meta-row">
            <div className="cs-meta-item"><span className="cs-meta-label">Role</span><span className="cs-meta-val">{project.role}</span></div>
            <div className="cs-meta-item"><span className="cs-meta-label">Duration</span><span className="cs-meta-val">{project.duration}</span></div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-val">{project.tools.join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="cs-hero-visual">
          <div className={`cs-mockup ${project.thumbClass}`}>{project.name}</div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="portfolio-section cs-snapshot-section">
        <div className="cs-snapshot-grid">
          <FadeIn className="cs-snapshot-card">
            <div className="section-label">Project Type</div>
            <h2>{project.tags.join(" / ")}</h2>
            <p>{project.desc}</p>
          </FadeIn>
          <FadeIn className="cs-snapshot-card">
            <div className="section-label">My Contribution</div>
            <h2>Research to Handoff</h2>
            <p>
              I shaped the user flow, interface structure, high-fidelity screens,
              prototype experience, and developer handoff for this project.
            </p>
          </FadeIn>
          <FadeIn className="cs-snapshot-card">
            <div className="section-label">Tool Stack</div>
            <h2>{project.tools[0]}</h2>
            <p>{project.tools.join(", ")}</p>
          </FadeIn>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="portfolio-section cs-section">
        <FadeIn>
          <div className="section-label">The Problem</div>
          <h2 className="section-title">The Challenge</h2>
          <p className="cs-body-text">{project.challenge}</p>
        </FadeIn>
      </section>

      {/* PROCESS */}
      <section className="portfolio-section cs-process-bg">
        <div className="section-label">How I Solved It</div>
        <h2 className="section-title">UX Design Process</h2>
        <p className="cs-section-intro">
          Each case study follows a practical product-design path: understand the
          problem, organize the experience, design the interface, then prepare it
          for implementation.
        </p>
        <div className="cs-process-grid">
          {project.process.map((step, i) => (
            <FadeIn key={i} className="cs-process-card">
              <div className="cs-step-num">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {(project.figmaUrl || project.liveUrl || project.comingSoonLabel || project.screenshots?.length > 0) && (
        <section className="portfolio-section cs-gallery-section">
          <div className="section-header">
            <div>
              <div className="section-label">Screens & Prototype</div>
              <h2 className="section-title">Design Screens</h2>
            </div>
            <div className="cs-action-row">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="btn-outline-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Site
                </a>
              )}
              {project.comingSoonLabel && (
                <span className="btn-outline-sm btn-disabled">
                  {project.comingSoonLabel}
                </span>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  className="btn-outline-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Figma
                </a>
              )}
            </div>
          </div>
          {project.screenshots?.length > 0 && (
            <div className="cs-gallery-grid">
              {project.screenshots.map((shot, i) => (
                <FadeIn key={i} className="cs-gallery-card">
                  <img src={shot.src} alt={shot.alt} />
                  <p>{shot.caption}</p>
                </FadeIn>
              ))}
            </div>
          )}
        </section>
      )}

      {/* OUTCOMES */}
      <section className="portfolio-section cs-outcomes-bg">
        <FadeIn>
          <div className="section-label">Impact</div>
          <h2 className="section-title">Outcomes & Results</h2>
          <p className="cs-section-intro cs-section-intro-dark">
            The focus was on creating clear, scalable design work that could move
            confidently from Figma into development.
          </p>
        </FadeIn>
        <div className="cs-outcomes-grid">
          {project.outcomes.map((o, i) => (
            <FadeIn key={i} className="cs-outcome-card">
              <div className="cs-outcome-num" style={{ color: project.color }}>{o.metric}</div>
              <div className="cs-outcome-label">{o.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* NEXT PROJECTS */}
      <section className="portfolio-section">
        <div className="section-label">Keep Exploring</div>
        <h2 className="section-title">More Projects</h2>
        <div className="cs-more-grid">
          {others.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/#work" className="btn-outline">← Back to all projects</Link>
        </div>
      </section>
    </div>
  );
}
