import SectionHeader from "../SectionHeader";
import { useProfileData } from "../../context/profile-context";

export default function Skills() {
  const { skills } = useProfileData();
  return (
    <section id="skills" className="band">
      <div className="band-inner">
        <SectionHeader cmd="cat skills.json" label="stack" />
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.label} className={group.wide ? "skill-card wide" : "skill-card"}>
              <div className="skill-key">
                "{group.label}" <span className="colon">:</span>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
                {group.accent && <span className="skill-tag accent">{group.accent}</span>}
                {group.subItems?.map((item) => (
                  <span key={item} className="skill-tag sub">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
