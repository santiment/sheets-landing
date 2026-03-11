import type { APIRoute } from "astro"

const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
`.trim()

export const GET: APIRoute = () =>
  new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
