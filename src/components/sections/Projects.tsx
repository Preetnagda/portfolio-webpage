import SectionHeader from "../SectionHeader";
import { useProfileData } from "../../context/profile-context";

export default function Projects() {
  const { projects } = useProfileData();
  return (
    <section id="projects" className="band">
      <div className="band-inner">
        <SectionHeader cmd="ls -la projects/" label="selected work" />
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="proj-card">
              <div className="proj-head">
                <span className="proj-name">{project.name}</span>
              </div>
              <p className="proj-desc">{project.description}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="proj-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="t-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
