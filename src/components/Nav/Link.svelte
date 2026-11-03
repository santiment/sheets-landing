<script lang="ts">
  import Svg from "san-webkit-next/ui/core/Svg"
  import { cn } from "san-webkit-next/ui/utils"
  import type { HTMLAnchorAttributes } from "svelte/elements"

  type TProps = HTMLAnchorAttributes & {
    href: string
    label: string
    class?: string
    isExternal?: boolean
  }

  const {
    href,
    label,
    class: className = "",
    isExternal = false,
    ...props
  }: TProps = $props()
</script>

<a
  {href}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer" : undefined}
  class={cn(
    "group flex items-center text-fiord hover:text-sheets-hover",
    className
  )}
  data-source="sheets.santiment.net"
  data-type={label}
  {...props}
>
  {label}

  {#if isExternal}
    <Svg
      id="external-link"
      w={12}
      class="ml-[5px] fill-fiord group-hover:fill-sheets-hover"
    />
  {/if}
</a>
