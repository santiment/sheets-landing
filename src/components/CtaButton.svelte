<script lang="ts">
  import { pipe, switchMap, tap } from "rxjs"
  import { ApiQuery } from "san-webkit-next/api"
  import Button from "san-webkit-next/ui/core/Button"
  import { cn } from "san-webkit-next/ui/utils"
  import { useObserveFnCall } from "san-webkit-next/utils"
  import { onMount } from "svelte"

  type TProps = {
    class?: string
  }

  const { class: className = "" }: TProps = $props()

  const queryCurrentUser = ApiQuery(
    () => `{ currentUser { id  } }`,
    (gql: { currentUser: null | { id: number } }) => gql.currentUser
  )

  let isLoggedIn = $state(false)
  let isLoaded = $state(false)

  const loadCurrentUser = useObserveFnCall(() =>
    pipe(
      switchMap(() => queryCurrentUser()()),
      tap((data) => {
        isLoggedIn = Boolean(data)
        isLoaded = true
      })
    )
  )

  onMount(() => {
    loadCurrentUser()
  })
</script>

<div
  class={cn(
    "account-slot flex h-8 w-40 justify-end",
    isLoaded && "is-loaded",
    className
  )}
>
  <Button
    target="_blank"
    accent="custom"
    variant={isLoggedIn ? "border" : "fill"}
    href={isLoggedIn
      ? "https://app.santiment.net/"
      : "https://app.santiment.net/sign-up"}
    class={cn(
      "press flex flex-shrink-0 justify-center whitespace-nowrap px-5",
      isLoggedIn &&
        "border-sheets bg-transparent text-sheets hover:border-sheets-hover hover:text-sheets-hover"
    )}
    data-source="sheets.santiment.net"
    data-type="go_to_sanbase"
  >
    {isLoggedIn ? "Go to Sanbase" : "Get Started"}
  </Button>
</div>
