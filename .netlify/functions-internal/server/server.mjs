export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nuxt@3.18.0",
  path: "/*",
  nodeBundler: "none",
  includedFiles: ["**"],
  excludedPath: ["/.netlify/*","/_nuxt/builds/meta/*","/_nuxt/builds/*"],
  preferStatic: true,
};