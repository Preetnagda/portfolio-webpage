import { useProfileData } from "../../context/profile-context";

export default function Hero() {
  const { identity } = useProfileData();
  const today = new Date().toLocaleDateString("en-AU", {
    month: "short",
    year: "numeric",
  });
  return (
    <header id="top" className="hero">
      <div className="hero-meta">
        {identity.homePath} · last updated {today}
      </div>
      <h1 className="hero-name">
        {identity.displayName}
        <span className="hero-cursor" />
      </h1>
      <div className="hero-tags">
        <span className="pill pill-open">
          <span className="pulse-dot" />
          {identity.status}
        </span>
        {identity.heroTags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
