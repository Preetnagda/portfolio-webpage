// Base URL of the profile config folder. The ./config folder lives in the
// codebase: profile.json is imported statically, while other assets (e.g.
// future images) are referenced at runtime via configUrl(). The Vite plugin
// serves the folder at /config in dev and copies it into dist/ on build.
export const CONFIG_BASE = "/config";

export function configUrl(path: string): string {
  return `${CONFIG_BASE}/${path.replace(/^\/+/, "")}`;
}
