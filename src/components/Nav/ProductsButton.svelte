<script lang="ts">
  import ProductsButton from "san-webkit-next/ui/app/Products"
  import Button from "san-webkit-next/ui/core/Button"
</script>

<ProductsButton active="sheets" variant="green">
  {#snippet children({ ref })}
    <Button
      {ref}
      size="auto"
      icon="products-toggle"
      iconSize={16}
      class="mr-[42px] fill-waterloo p-2 hover:bg-transparent hover:fill-green-hover"
    ></Button>
  {/snippet}
</ProductsButton>
