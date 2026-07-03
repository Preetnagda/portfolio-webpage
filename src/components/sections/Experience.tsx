import SectionHeader from "../SectionHeader";
import { useProfileData } from "../../context/profile-context";

export default function Experience() {
  const { experience } = useProfileData();
  return (
    <section id="experience" className="band band-raised">
      <div className="band-inner">
        <SectionHeader cmd="git log --oneline --career" label="experience" />
        <div className="exp-list">
          {experience.map((job, i) => (
            <div key={job.hash} className="exp-item">
              <div className="exp-rail">
                <span className={job.current ? "exp-dot current" : "exp-dot"} />
                {i < experience.length - 1 && <span className="exp-line" />}
              </div>
              <div>
                <div className="exp-commit">
                  commit <span className="exp-hash">{job.hash}</span>
                  {job.current && " (HEAD → main)"} · {job.dates}
                </div>
                <div className="exp-title">
                  {job.title} ·{" "}
                  <span className="exp-company">{job.company}</span>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
