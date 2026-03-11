/// <reference types="astro/client" />

declare module "*.astro" {
  import type { AstroComponentFactory } from "astro"
  const Component: AstroComponentFactory
  export default Component
}
