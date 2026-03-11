<script lang="ts">
  import { pipe, switchMap, tap } from "rxjs"
  import { ApiQuery } from "san-webkit-next/api"
  import Button from "san-webkit-next/ui/core/Button"
  import { cn } from "san-webkit-next/ui/utils"
  import { useObserveFnCall } from "san-webkit-next/utils"
  import { onMount } from "svelte"

  const { class: className = "" } = $props()

  const queryCurrentUser = ApiQuery(
    () => `{ currentUser { id  } }`,
    (gql: { currentUser: null | { id: number } }) => gql.currentUser
  )

  let isLoggedIn = $state<boolean>(false)

  const loadCurrentUser = useObserveFnCall(() =>
    pipe(
      switchMap(() => queryCurrentUser()()),
      tap((data) => (isLoggedIn = Boolean(data)))
    )
  )

  onMount(() => {
    loadCurrentUser()
  })
</script>

<Button
  target="_blank"
  variant={isLoggedIn ? "border" : "fill"}
  href={isLoggedIn
    ? "https://app.santiment.net/"
    : "https://app.santiment.net/sign-up"}
  class={cn(
    "flex flex-shrink-0 justify-center border border-sheets px-5 text-sheets",
    "bg-transparent hover:border-green-hover hover:bg-green-light-3 hover:text-green-hover",
    className
  )}
  data-source="santiment.net"
  data-type="go_to_sanbase"
>
  {isLoggedIn ? "Go to Sanbase" : "Get Started"}
</Button>
