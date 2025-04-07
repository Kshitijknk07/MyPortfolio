import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sanju.sh",
  integrations: [
    mdx(),
    sitemap({
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString().split("T")[0],
    }),
    tailwind(),
    // Add other integrations if they exist
    react(),
  ],
  output: "server",
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Use the compile option for Cloudflare compatibility
        useCompile: true,
      },
    },
  },
});
