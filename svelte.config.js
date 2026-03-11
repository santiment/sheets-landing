import { vitePreprocess } from "@astrojs/svelte"
import { componentStyleSelector } from "san-webkit-next/svelte.config.js"
import cssModules from "svelte-preprocess-cssmodules"

const config = {
  preprocess: [vitePreprocess(), componentStyleSelector(), cssModules()],
}

export default config
