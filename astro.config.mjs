import path from "path"
import { fileURLToPath } from "url"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import { defineConfig, mergeConfig } from "astro/config"
import { AstroSvelteCtx } from "san-webkit-next/plugins/astro.js"
import { createAstroConfig } from "san-webkit-next/vite.config.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const viteBase = await createAstroConfig()

const viteConfig = mergeConfig(viteBase, {
  build: {
    assetsInlineLimit: 0,
  },

  define: {
    __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: "0",
    __SVELTEKIT_PATHS_BASE__: '""',
    __SVELTEKIT_ASSETS__: '""',
    __SVELTEKIT_APP_VERSION__: '""',
    __SVELTEKIT_PATHS_ASSETS__: '""',
    __SVELTEKIT_PAYLOAD__: '""',
    __SVELTEKIT_APP_DIR__: '""',
    __SVELTEKIT_PATHS_RELATIVE__: '""',
  },
  resolve: {
    alias: [
      { find: "@sentry/sveltekit", replacement: "@sentry/astro" },
      { find: "$assets", replacement: path.resolve(__dirname, "./src/assets") },
      {
        find: "$components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "$layouts",
        replacement: path.resolve(__dirname, "./src/layouts"),
      },
      { find: "$pages", replacement: path.resolve(__dirname, "./src/pages") },
      { find: "$utils", replacement: path.resolve(__dirname, "./src/utils") },
    ],
  },
  ssr: {
    noExternal: ["san-webkit-next"],
  },

  optimizeDeps: {
    exclude: ["svelte", "@astrojs/svelte"],
  },
})

const siteUrl = process.env.SITE_URL || "https://sheets.santiment.net"

export default defineConfig({
  site: siteUrl,
  experimental: {
    svgo: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
      ],
    },
  },
  integrations: [
    svelte({
      extensions: [".svelte"],
    }),
    tailwind(),
    AstroSvelteCtx(path.resolve(__dirname, "./src/svelte-root.js")),
  ],
  vite: viteConfig,
  base: "/",
  publicDir: "./static",
  outDir: "./public",
  server: {
    port: 3000,
  },
})
