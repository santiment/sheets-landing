<script lang="ts">
  import ProductsButton from "san-webkit-next/ui/app/Products"
  import Button from "san-webkit-next/ui/core/Button"
  import { cn } from "san-webkit-next/ui/utils"

  type TProps = {
    class?: string
  }

  const { class: className = "" }: TProps = $props()
</script>

<ProductsButton class={className} active="sheets" align="start" isCompact>
  {#snippet children({ props })}
    <Button
      {...props}
      icon="arrow-down"
      iconOnRight
      iconSize={9}
      class={cn(
        "fill-fiord pl-0 text-sm text-fiord transition-transform",
        "hover:bg-transparent hover:fill-sheets-hover hover:text-sheets-hover",
        "[&>svg]:transition-transform [&>svg]:duration-200",
        "[&>svg]:ease-in-out [&[data-state=open]>svg]:rotate-180"
      )}>Products</Button
    >
  {/snippet}
</ProductsButton>
