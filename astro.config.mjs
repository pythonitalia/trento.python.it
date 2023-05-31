import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://pythonitalia.github.io",
  base: "/trento.python.it",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
});
