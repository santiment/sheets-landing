# sheets-landing

Astro static site for sheets.santiment.net. Svelte 5 islands, Tailwind, `san-webkit-next`.
`santiment.net` is the reference port — match its structure when in doubt.

@CONVENTIONS.md

## Commands

```sh
pnpm dev
pnpm check     # astro check
pnpm lint      # prettier --check .
pnpm format
pnpm build
```

## Breakpoints

`san-webkit-next` screens are **max-width**, so the base style is the desktop one and each
breakpoint narrows it:

```
lg  max 1279px   laptop
md  max  992px   tablet
sm  max  768px   phone
xl  max 1199px   added locally, emitted LAST
```

`xl` is spread in after the webkit screens, so **`xl:` overrides `lg:`/`md:`/`sm:`/`xs:`** no matter
the class order in the markup. Use it only for rules nothing else competes with.

## Accent

The green of this landing is `--sheets`, defined in `src/app.css` together with `--accent` /
`--accent-hover`. Webkit components take the accent through `accent="custom"`; Tailwind takes it
through `sheets` / `sheets-hover` / `sheets-accent`. Never hardcode the hex, and never reach for
`green-*` — that is santiment.net's accent.

## Background images

`build.assetsInlineLimit` is pinned to `0` in `astro.config.mjs`. Astro otherwise inlines assets
under 4 KB as `data:` URIs that contain single quotes, which silently breaks every
`background-image: url('...')` built by interpolation — the rule is dropped and the element renders
with no background. Keep the limit at `0` rather than hand-escaping call sites.

## Code panels

A code panel positions its floating panels against `CodePanel` itself, header strip included.
Only add `relative` to the inner wrapper where the original did (`Matrix`); adding it elsewhere
shifts every absolutely positioned child down by the 36px header.

## External links

The library `Button` forwards `target` but its props are typed as `HTMLButtonAttributes`, so `rel`
is a type error even though it would reach the DOM. The three CTAs that open in a new tab point at
our own domains, where the browser default `noopener` is enough. A link to a third-party domain does
not go through `Button` — use `Nav/Link.svelte` or a plain `<a>`, both of which set
`rel="noopener noreferrer"`.

## Islands

Astro renders everything statically by default. A `client:*` directive is for state only:
`FunctionSearch`, `FAQ`, `Nav`'s `CtaButton` / `ProductsButton` / `MobileNav`. Static chrome
(`CodePanel` frame, code-panel illustrations) stays `.astro`.

`Svg` from the library renders fine in `.astro` without hydration — use it instead of an inline
`<svg>` for sprite icons.
