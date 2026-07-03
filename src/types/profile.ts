export interface Identity {
  name: string;
  displayName: string;
  handle: string;
  homePath: string;
  role: string;
  certification: string;
  certificationUrl?: string;
  focus: string;
  location: string;
  education?: string;
  status: string;
  openToWork: boolean;
  heroTags: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
  wide?: boolean;
  accent?: string;
  subItems?: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export interface ExperienceEntry {
  hash: string;
  dates: string;
  title: string;
  company: string;
  current?: boolean;
  bullets: string[];
}

export interface ContactCta {
  heading: string;
  blurb: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface Profile {
  identity: Identity;
  about: string;
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceEntry[];
  contactCta: ContactCta;
  contact: ContactEntry[];
}
