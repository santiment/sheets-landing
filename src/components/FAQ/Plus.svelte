<script lang="ts">
  type TProps = {
    class?: string
    opened?: boolean
  }

  let { class: className = "", opened = false }: TProps = $props()
</script>

<svg
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
  class="ml-[18px] h-6 w-6 min-w-6 origin-center cursor-pointer stroke-fiord sm:h-auto sm:w-auto sm:min-w-7 {className}"
>
  <g
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    fill="none"
  >
    <path d="M14 25.67a11.67 11.67 0 100-23.34 11.67 11.67 0 000 23.34z" />
    <path
      d="M14 9.33v9.34"
      class="duration-[250ms] origin-center transition-transform ease-out {opened
        ? 'rotate-90'
        : ''}"
    />
    <path
      d="M9.33 14h9.34"
      class="origin-center transition-transform duration-200 ease-out {opened
        ? 'rotate-180'
        : ''}"
    />
  </g>
</svg>
