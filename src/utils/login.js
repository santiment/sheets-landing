export function getLoginLink() {
  const isProd = process.env.NODE_ENV === "production"

  const sanbaseOrigin = isProd
    ? "https://app.santiment.net"
    : "https://app-stage.santiment.net"

  const url = new URL("/login", sanbaseOrigin)
  url.searchParams.set("from", "/account#api-keys")

  return url
}
