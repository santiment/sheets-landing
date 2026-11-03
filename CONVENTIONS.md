# Santiment frontend conventions

Shared by `san-webkit` and the apps that consume it. Repo-specific rules are in each repo's
`AGENTS.md`.

This is a copy; the source of truth is in the `san-webkit` repo.

## Tooling

- Use **pnpm 8.15.9**. Never `npm`.
- Run `pnpm check`, then `pnpm lint`, after a series of edits.
- Do not hand-sort imports — ESLint owns the order; run the repo's format command.

## Svelte components

Order of definitions:

```svelte
<script lang="ts">
  // Define prop types with a separate type definition
  type TProps = { someProp: '' }
  let props: TProps = $props()

  // Initialize and set the external contexts
  const appCtx = useSomeAppCtx.get()
  const someOtherCtx = useSomeOtherCtx.set(props.someProp)

  // Initialize the dialog, which will capture all the contexts defined above
  const showSomeDialog = showSomeDialog$()

  // Define a state signal first
  let state = $state('')
  // Define a derived signal second
  const derived = $derived(state + props.someProp)

  // Create a one-liner using a function expression
  const oneLineFn = () => {}

  onMount(() => {
    // Browser-only code that will run once when the component mounts
    return () => {
      // Cleanup if necessary
    }
  })

  $effect(() => {
    // Browser-only code that re-runs when any tracked signals change
    return () => {
      // Cleanup if necessary
    }
  })

  // Define a function that could be used in the code above
  function someFn() {}
</script>
```

- Name the props type `TProps`; annotate the destructure with it.
- One-liners are arrow consts. Real functions are `function` declarations, placed last.
- Return the cleanup from `onMount`. Do not use `onDestroy`.
- Blank line between logical blocks, and between props and local state.
- Boolean props as bare attributes; use attribute shorthand (`{href}`).
- Required props take no default. Configurable data takes one.

## Types

- Prefix type aliases with `T`. Generic parameters are plain `T` — no `G` prefix.
- `type`, never `interface`.
- No function return-type annotations.
- No annotation that is already implied; no `?.` or `!` on an already-narrowed value.
- Possibly-absent fields are optional: `field?: T`.
- Callback props get an explicit function type: `onDateSelect: (date: Date[]) => void`.
- No magic numbers. Durations as arithmetic: `2 * 60 * 1000`.
- No `enum` — use a PascalCase `as const` object.
- `UPPER_SNAKE` for scalar and config constants, `PascalCase` for enum-like objects.

## State and reactivity

General rune guidance comes from the `svelte-core-bestpractices` skill. These are the Santiment
differences.

- Share state with `createCtx` from `$lib/utils`, not Svelte's `createContext`. Consume it where
  needed instead of threading props.
- Reactive modules are `*.svelte.ts`, re-exported from a sibling `index.ts`.
- New behaviour is `{@attach ...}`. Keep `use:` only for melt-ui and bits-ui builders
  (`use:trigger`, `use:content`, `use:portalled`, `use:overlay`) and `applyBuilder` — their API
  requires it. Do not convert existing actions as a drive-by.
- Guard browser-only APIs, `window` globals and browser-only markup with `BROWSER` from `esm-env`.
  No guard inside an `$effect`.
- No `try`/`catch` around browser storage — the guard is `BROWSER`.
- `$effect`, not `onMount`, for page-level side effects that re-run on same-route navigation.

## Styling

- Compose classes with `cn()`. The consumer's `className` goes **last**.
- A component's styling API is its `class` prop; use a CSS custom property for what a class cannot
  express. Nested `:global()` is only for third-party markup (bits-ui, monaco, photoswipe) — never
  to reach into a Santiment component.
- Reuse design-system utility classes instead of redeclaring their rules.
- Tailwind scale classes, not arbitrary values: `w-px`, not `w-[1px]`.
- Do not restate a default or an inherited value.
- Spacing and layout belong to the parent: `gap` on the container, child margins set by the parent,
  layout classes on the container rather than each item.
- Flat style rules; no nested selectors where one selector works. Target by class, unless a single
  unambiguous element makes the class redundant.
- Colors go through tokens. No hex literals in a component.
- Illustration SVGs need `var(--token, #fallback)` written by hand — they are not sprited, so
  nothing strips their hardcoded colors.
- Responsive work uses Tailwind `sm:` / `md:` or the device context, never body-class selectors.

## Components and reuse

- Check the library before writing a component or helper. Extend a core component by composing a
  wrapper, not by adding props to it.
- Icons and illustrations: `Svg`, with the `illus` flag for illustrations. Never inline `<svg>`,
  never `<img>` at an icon asset. One exception: a decoration used by a single route in a consuming
  app keeps its SVG next to the component and inlines it with `?raw` + `{@html}`. The sprite
  directory ships with the library and an app cannot add to it, and only an inlined SVG resolves
  its `var()` tokens. Move it to `src/lib/illus` when a second place needs it.
- Buttons: the library's `Button`, including `as="label"` and the `icon` prop. Never a raw
  `<button>`.
- Semantic HTML — `article`, `section`, real headings, `button` for actions, `a` for navigation. No
  `div` wrapping a semantic tag, no containers without styling or semantics.
- Never nest an anchor or interactive content inside an anchor; overlay a link-as-bg element.
- Navigate with a plain `<a href>`. Do not intercept the click.
- Every `target="_blank"` needs a `rel`.
- Extract repeated markup, logic or literals into a component, hook, function or constant.
- Analytics and other side effects live in modules, not components; pass the source in as a prop.

## API

- A feature's `api`, `flow` and `session` modules sit in the directory of the component that uses
  them. No GraphQL query inside a component.
- The GraphQL response shape is declared inline as the `mapData` parameter annotation. Domain types
  go in a sibling `types.ts`.
- Build with `ApiQuery` / `ApiMutation`. The mutation verb is `mutate`.
- Use the ambient `API.ExtractData`, not `Awaited<ReturnType<typeof queryX>>`. It needs no import.
- **No mutation in a `load` function** — `load` also runs on preload, so it would fire for a page
  that is never shown. Trigger on mount, non-blocking when it does not affect displayed UI.
- Close a dialog through `DialogCtx.close()`.
- Analytics payloads are `{ type, source }`. Event names come from `TGenericAnalyticEvents` — do not
  invent new ones.

## Code shape

- Early-return guards. Return the expression rather than assigning it first. No `async` without an
  `await`.
- `function` declarations, not arrow consts, except for one-liners.
- A lookup set of three or more members goes at module scope as a `Set`; two members is an inline
  `.includes`.
- Trim user input.
- No `console.log`, no `eslint-disable` for errors local to your change.

## Never

These exist in the code. Do not copy them.

- **Svelte 4 syntax** — `export let`, `on:click`, `$:`, `svelte/store`, `<slot>`, `$$props`,
  `$$restProps`, `<svelte:fragment>`, `<svelte:component>`, `createEventDispatcher`,
  `|preventDefault`. The `svelte-core-bestpractices` skill lists the replacements.
  **`<svelte:element>` is not legacy** and is still correct — the skill does not say so.
- **`ssd`** — use a reassignable `$derived`.
- **Pre-Tailwind utility classes** — `mrg-*`, `c-waterloo`, `c-green`, `c-accent`, `c-rhino`, `btn`,
  `btn-0`, `btn-1`, `btn-2`, `btn-3`, `btn--s`, `btn--green`, `btn--accent`, `caption`, `txt-m`,
  `txt-b`, `txt-center`, `body-1`, `body-2`, `body-3`, bare `line-clamp`.
  **Still live, do not remove**: `column`, `center`, `row`, `link-pointer`, `single-line`.
- **`enum`** — see Types.
- **Legacy package names.** A `-next` suffix means the current generation; the un-suffixed name is
  the legacy one pinned to an older ref. Import from `san-webkit-next` and
  `@santiment-network/chart-next`, never from `san-webkit`, `webkit/*`, `studio/*` or
  `@santiment-network/chart`.
