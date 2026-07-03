import { useProfileData } from "../context/profile-context";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#about", label: "./about" },
  { href: "#skills", label: "./skills" },
  { href: "#experience", label: "./experience" },
  { href: "#projects", label: "./projects" },
  { href: "#contact", label: "./contact" },
];

const SECTION_IDS = ["about", "skills", "projects", "experience", "contact"];

export default function SiteNav() {
  const { identity } = useProfileData();
  const active = useActiveSection(SECTION_IDS);
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="arrow">❯</span>
          {identity.handle}
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                active === link.href.slice(1) ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
