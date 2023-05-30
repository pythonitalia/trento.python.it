import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://pytrento.github.io",
  base: "/",
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
});
