<script lang="ts">
  import { Dialog } from "bits-ui"
  import { Products } from "san-webkit-next/ui/app/Products"
  import Button from "san-webkit-next/ui/core/Button"
  import { cn } from "san-webkit-next/ui/utils"

  import CtaButton from "$components/CtaButton.svelte"

  import { links } from "../utils"

  let open = $state(false)

  const ICON_BUTTON =
    "rounded fill-fiord p-2.5 hover:bg-athens hover:fill-rhino"
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="plain"
        size="auto"
        icon="menu"
        iconSize={17}
        iconHeight={12}
        aria-label="Open menu"
        class="{ICON_BUTTON} hidden md:flex"
      />
    {/snippet}
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Overlay
      class="fixed inset-0 z-50 bg-mirage/40 transition-opacity duration-200 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0"
    />

    <Dialog.Content
      style="transition-timing-function: var(--ease-out-expo)"
      class="fixed right-0 top-0 z-50 flex h-[100dvh] w-[min(360px,86vw)] translate-x-0 flex-col overflow-y-auto overscroll-contain bg-white transition duration-300 data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[ending-style]:duration-200 motion-reduce:data-[ending-style]:translate-x-0 motion-reduce:data-[starting-style]:translate-x-0"
    >
      <Dialog.Title class="sr-only">Menu</Dialog.Title>

      <div
        class="flex h-[69px] shrink-0 items-center justify-end border-b border-porcelain px-4"
      >
        <Dialog.Close>
          {#snippet child({ props })}
            <Button
              {...props}
              variant="plain"
              size="auto"
              icon="close"
              iconSize={12}
              aria-label="Close menu"
              class={ICON_BUTTON}
            />
          {/snippet}
        </Dialog.Close>
      </div>

      <nav aria-label="Main" class="flex flex-col p-4">
        {#each links as { href, label } (href)}
          <a
            {href}
            onclick={() => (open = false)}
            class="rounded px-3 py-3 text-lg text-rhino hover:bg-athens hover:text-mirage"
          >
            {label}
          </a>
        {/each}
      </nav>

      <Products
        isCompact
        active="sheets"
        class={cn(
          "w-full rounded-none border-t border-porcelain px-0 pb-6 pt-6",
          "[&_h2]:font-medium [&_p]:hidden",
          "[&>section>a]:w-full [&>section]:px-4",
          "[&>section:last-child]:mt-6 [&>section:last-child]:w-auto",
          "[&>section:last-child]:px-7 [&>section:last-child]:pt-6"
        )}
      />

      <div
        class="mt-auto flex flex-col gap-2 border-t border-porcelain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      >
        <CtaButton class="h-10 w-full" />
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
