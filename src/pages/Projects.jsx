import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <Link to="/#work" className="projects-back">Back to home</Link>
        <div className="section-label">Portfolio</div>
        <h1>Selected UX Case Studies</h1>
        <p>
          A collection of product, SaaS, and website design work covering research,
          information architecture, high-fidelity UI, prototyping, and developer handoff.
        </p>
      </section>

      <section className="portfolio-section projects-page-grid-wrap">
        <div className="projects-page-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
