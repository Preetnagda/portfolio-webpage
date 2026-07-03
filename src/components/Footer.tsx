import { useProfileData } from "../context/profile-context";

export default function Footer() {
  const { identity } = useProfileData();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          <span className="arrow">❯</span> exit 0
        </span>
        <span>
          © {year} {identity.displayName} · {identity.location.split(",")[0]}
        </span>
      </div>
    </footer>
  );
}
