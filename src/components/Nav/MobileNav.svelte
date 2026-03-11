<script lang="ts">
  let navOpen = $state(false)

  const links = [
    { href: "/#metrics", label: "Metrics" },
    { href: "/#use-cases", label: "Use cases" },
    {
      href: "https://app.santiment.net/pricing",
      label: "Pricing",
      isExternal: true,
    },
    { href: "mailto:support@santiment.net", label: "Support" },
  ]
</script>

<button
  class="hidden md:block"
  aria-label="Open menu"
  onclick={() => (navOpen = true)}
>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</button>

{#if navOpen}
  <div class="fixed inset-0 z-50 hidden flex-col bg-white p-8 md:flex">
    <button
      class="absolute right-8 top-8 mb-4 self-end"
      aria-label="Close menu"
      onclick={() => (navOpen = false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6 6 18M6 6l12 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <nav class="mt-12 flex flex-col gap-6">
      {#each links as { href, label, isExternal }}
        <a
          {href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          class="text-lg font-medium text-rhino hover:text-green-hover"
          onclick={() => (navOpen = false)}
        >
          {label}
        </a>
      {/each}

      <a
        href="https://app.santiment.net"
        class="mt-4 inline-block rounded-sm bg-green px-6 py-3 text-center font-medium text-white hover:opacity-80"
        onclick={() => (navOpen = false)}
      >
        Go to Sanbase
      </a>
    </nav>
  </div>
{/if}
