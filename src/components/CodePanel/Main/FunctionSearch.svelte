<script lang="ts">
  import { onMount } from "svelte"

  import { SAN_FUNCTIONS, TYPED_STRINGS } from "./assets/functions"

  const DOCS_URL =
    "https://github.com/santiment/google-spreadsheet-addon/blob/master/doc/sheet_functions.md"

  const TYPE_DELAY = 40
  const DELETE_DELAY = 50
  const HOLD_DELAY = 1500
  const NEXT_DELAY = 300
  const START_DELAY = 1000

  let inputValue = $state("")
  let placeholder = $state(TYPED_STRINGS[0])

  const filtered = $derived(
    inputValue
      ? SAN_FUNCTIONS.filter((fn) => fn.includes("SAN_" + inputValue))
      : SAN_FUNCTIONS
  )

  onMount(() => {
    let stringIdx = 0
    let charIdx = 0
    let isDeleting = false
    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      const current = TYPED_STRINGS[stringIdx]

      if (!isDeleting) {
        charIdx++
        placeholder = current.slice(0, charIdx)

        if (charIdx === current.length) {
          isDeleting = true
          timeout = setTimeout(tick, HOLD_DELAY)
          return
        }

        timeout = setTimeout(tick, TYPE_DELAY)
        return
      }

      charIdx--
      placeholder = current.slice(0, charIdx)

      if (charIdx === 0) {
        isDeleting = false
        stringIdx = (stringIdx + 1) % TYPED_STRINGS.length
        timeout = setTimeout(tick, NEXT_DELAY)
        return
      }

      timeout = setTimeout(tick, DELETE_DELAY)
    }

    timeout = setTimeout(tick, START_DELAY)

    return () => clearTimeout(timeout)
  })
</script>

<div class="group relative z-[5] flex items-center">
  <svg
    class="fill-mystic group-hover:fill-sheets"
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="27"
    fill="none"
  >
    <path
      d="M2.04 26.25c-.77 0-1.4-.1-1.9-.3v-2.4c.55.16 1.03.25 1.45.25 1.13 0 1.88-.87 2.25-2.6L6.59 8.21H4.32l.27-1.35 2.46-.96.27-1.17c.37-1.68.94-2.86 1.7-3.57A4.63 4.63 0 0 1 12.28.11c.97 0 1.87.18 2.68.54l-.78 2.24a4.92 4.92 0 0 0-1.72-.36c-.59 0-1.06.18-1.41.55a3.8 3.8 0 0 0-.8 1.79l-.23 1.09h2.9l-.46 2.26h-2.9L6.71 21.59c-.34 1.6-.9 2.77-1.66 3.53a4.14 4.14 0 0 1-3.02 1.13zM18.12 15.09L14.25 20h-3.43l6.03-7.22-2.93-6.82h3.1l1.84 4.73 3.64-4.73h3.48l-5.85 6.97L23.27 20h-3.12l-2.03-4.91z"
    />
  </svg>

  <span class="ml-2.5 text-sm text-rhino">= SAN_</span>

  <input
    class="flex-1 border-none bg-transparent py-0 pl-0 pr-2 text-sm text-rhino outline-none placeholder:text-fiord focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sheets"
    aria-label="Sansheets function"
    {placeholder}
    value={inputValue}
    oninput={(e) => (inputValue = e.currentTarget.value.toUpperCase())}
  />

  <div
    class="absolute -top-[50px] left-1/2 z-10 max-h-[231px] w-80 overflow-y-auto rounded-lg border border-athens bg-white p-2 shadow-code"
  >
    {#each filtered as fn (fn)}
      <div class="min-h-8 px-2 py-1.5">
        <a
          href={`${DOCS_URL}#${fn}`}
          target="_blank"
          rel="noopener noreferrer"
          class="text-base text-fiord hover:text-sheets"
        >
          {fn}
        </a>
      </div>
    {:else}
      <div class="px-2 py-1.5 text-base text-fiord">No results found</div>
    {/each}
  </div>
</div>
