<script lang="ts">
  import { onMount } from "svelte"

  import chainImage from "$assets/chain.svg"
  import combinedTemplate from "$assets/combined-template.svg"
  import image from "$assets/image.png"
  import sheetImage from "$assets/sheet.svg"

  const TYPED_STRINGS = [
    "DEV_ACTIVITY",
    "LATEST_PRICE",
    "TOKEN_CIRCULATION",
    "NVT_RATIO",
  ]

  const TOP_LINES = [60, 42, 54, 62]

  const SOURCE_LINES = [
    [128, 92, 69],
    [137, 177],
    [137, 99, 150],
    [204, 129],
    [182, 117, 161],
  ]

  const SAN_FUNCTIONS = [
    "SAN_NETWORK_GROWTH",
    "SAN_PRICES",
    "SAN_PRICE_PERCENT_CHANGE",
    "SAN_PRICE_ABSOLUTE_CHANGE",
    "SAN_ALL_PROJECTS",
    "SAN_ERC20_PROJECTS",
    "SAN_ACTIVE_ADDRESSES",
    "SAN_TRANSACTION_VOLUME",
    "SAN_OHLC",
    "SAN_PRICE_VOLUME_DIFF",
    "SAN_SOCIAL_VOLUME",
    "SAN_SOCIAL_VOLUME_PROJECTS",
    "SAN_GITHUB_ACTIVITY",
    "SAN_DEV_ACTIVITY",
    "SAN_EXCHANGE_FUNDS_FLOW",
    "SAN_TOKEN_CIRCULATION",
    "SAN_TRENDING_WORDS",
    "SAN_PROJECT_FUNDAMENTALS",
    "SAN_PROJECT_SOCIAL_DATA",
    "SAN_TOKEN_AGE_CONSUMED",
    "SAN_MVRV_RATIO",
    "SAN_NVT_RATIO",
    "SAN_ACTIVE_DEPOSITS",
    "SAN_REALIZED_VALUE",
    "SAN_GAS_USED",
    "SAN_MINING_POOLS_DISTRIBUTION",
    "SAN_MINERS_BALANCE",
    "SAN_NEWS",
    "SAN_LATEST_PRICE",
    "SAN_DAILY_CLOSING_PRICE",
    "SAN_HISTORICAL_BALANCE",
    "SAN_HISTORY_TWITTER_DATA",
    "SAN_SOCIAL_DOMINANCE",
  ]

  let inputValue = $state("")
  let placeholder = $state(TYPED_STRINGS[0])

  let filtered = $derived(
    inputValue
      ? SAN_FUNCTIONS.filter((f) =>
          f.includes("SAN_" + inputValue.toUpperCase())
        )
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
          timeout = setTimeout(tick, 1500)
          return
        }
        timeout = setTimeout(tick, 40)
      } else {
        charIdx--
        placeholder = current.slice(0, charIdx)

        if (charIdx === 0) {
          isDeleting = false
          stringIdx = (stringIdx + 1) % TYPED_STRINGS.length
          timeout = setTimeout(tick, 300)
          return
        }
        timeout = setTimeout(tick, 50)
      }
    }

    timeout = setTimeout(tick, 1000)
    return () => clearTimeout(timeout)
  })
</script>

<div
  class="relative -mr-[30px] -mt-[30px] ml-auto flex min-h-[400px] min-w-[600px] animate-float flex-col rounded-lg border border-zircon bg-white md:hidden"
>
  <div class="flex h-9 items-center gap-2.5 border-b border-zircon px-3">
    <div class="size-3.5 rounded-full bg-porcelain"></div>
    <div class="size-3.5 rounded-full bg-porcelain"></div>
    <div class="size-3.5 rounded-full bg-porcelain"></div>
  </div>

  <div class="px-6 pb-2.5 pt-[18px]">
    <ul class="relative mb-7 flex flex-col pl-[62px]">
      <img
        src={sheetImage.src}
        alt=""
        class="absolute left-0 top-0 h-12 w-[38px]"
        aria-hidden="true"
      />

      <li class="mb-[15px] h-3.5 w-[228px] rounded-full bg-porcelain"></li>

      <li class="flex gap-[18px]">
        {#each TOP_LINES as width}
          <span class="h-3.5 rounded-full bg-[#f0f2f7]" style="width:{width}px"
          ></span>
        {/each}
      </li>
    </ul>

    <div class="relative z-[5] flex items-center">
      <svg
        class="fill-[#d2d6e7]"
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

      <div class="relative flex-1">
        <input
          class="w-full border-none bg-transparent py-0 pl-0 pr-2 text-sm text-rhino outline-none placeholder:text-waterloo"
          {placeholder}
          bind:value={inputValue}
        />
      </div>

      <div
        class="absolute left-1/2 top-[-50px] z-10 max-h-[231px] w-80 overflow-x-hidden overflow-y-scroll rounded-lg border border-[#f1f3f9] bg-white p-2 text-waterloo shadow-[0px_4px_50px_rgba(56,74,167,0.04),0px_60px_40px_rgba(56,74,167,0.02)]"
      >
        {#each filtered as fn}
          <div class="min-h-8 px-2 py-1.5">
            <a
              href={`https://github.com/santiment/google-spreadsheet-addon/blob/master/doc/sheet_functions.md#${fn}`}
              target="_blank"
              rel="noopener noreferrer"
              class="text-base text-waterloo hover:text-sheets"
            >
              {fn}
            </a>
          </div>
        {/each}
        {#if inputValue && filtered.length === 0}
          <div class="px-2 py-1.5 text-base text-waterloo">
            No results found
          </div>
        {/if}
      </div>
    </div>
  </div>

  <ul class="mt-auto">
    {#each SOURCE_LINES as blocks}
      <li class="mx-5 flex items-center gap-[18px] border-t border-zircon py-4">
        {#each blocks as width}
          <span class="h-3.5 rounded-full bg-[#f0f2f7]" style="width:{width}px"
          ></span>
        {/each}
      </li>
    {/each}
  </ul>

  <div
    class="absolute -left-5 bottom-4 flex h-[140px] w-[263px] flex-col justify-end rounded-lg p-[30px_24px_18px_20px]"
    style={`background: url('${combinedTemplate.src}') no-repeat`}
  >
    <div
      class="absolute right-1 top-1 z-[2] size-[35px] rounded-full bg-center bg-no-repeat"
      style={`background-color: var(--green); background-image: url('${chainImage.src}')`}
    ></div>
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] rounded-lg"
    ></div>

    <div class="mb-4 flex items-center gap-3">
      <img src={image.src} alt="preview" width="26" height="26" />

      <h3 class="text-sm text-rhino">Favorites</h3>
    </div>

    <h4 class="text-sm text-waterloo">
      The price of your list was increased by
      <b class="mx-1 font-bold text-rhino">$ 532.73</b>
      today
    </h4>
  </div>
</div>
