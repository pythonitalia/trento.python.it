import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://pythonitalia.github.io",
  base: "/trento.python.it",
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
});
