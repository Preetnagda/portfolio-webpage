import SectionHeader from "../SectionHeader";
import { useProfileData } from "../../context/profile-context";

export default function About() {
  const { identity, about } = useProfileData();
  return (
    <section id="about" className="band band-raised">
      <div className="band-inner">
        <SectionHeader cmd="whoami" label="about" />
        <div className="two-col">
          <p className="about-para">{about}</p>
          <div className="facts-card">
            <div className="facts-title"># quick facts</div>
            <div className="facts-grid">
              <span className="k">role</span>
              <span className="v">{identity.role}</span>
              <span className="k">location</span>
              <span className="v">{identity.location}</span>
              <span className="k">cert</span>
              <span className="v">
                {identity.certificationUrl ? (
                  <a
                    className="fact-link"
                    href={identity.certificationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {identity.certification}
                  </a>
                ) : (
                  identity.certification
                )}
              </span>
              {identity.education && (
                <>
                  <span className="k">education</span>
                  <span className="v">{identity.education}</span>
                </>
              )}
              <span className="k">focus</span>
              <span className="v">{identity.focus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
