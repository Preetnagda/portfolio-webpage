import profileData from "../config/profile.json";
import type { Profile } from "./types/profile";
import { ProfileProvider } from "./context/profile-context";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

const profile = profileData as Profile;

function App() {
  return (
    <ProfileProvider value={profile}>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ProfileProvider>
  );
}

export default App;
