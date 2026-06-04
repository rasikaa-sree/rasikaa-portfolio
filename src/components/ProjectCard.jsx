import { useNavigate } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const openProject = () => navigate(`/project/${project.id}`);

  return (
    <FadeIn
      className="project-card"
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") openProject();
      }}
      role="link"
      tabIndex={0}
    >
      <div className="project-thumb">
        <div className={`project-thumb-inner ${project.thumbClass}`}>{project.name}</div>
        <div className="project-tag-bar">
          {project.tags.map((t, i) => <span className="ptag" key={i}>{t}</span>)}
        </div>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-footer">
          <span className="project-year">{project.year}</span>
          <div className="project-arrow">→</div>
        </div>
      </div>
    </FadeIn>
  );
}
