<script lang="ts">
  import { Accordion } from "bits-ui"
  import { cubicInOut } from "svelte/easing"
  import { slide } from "svelte/transition"

  import { questions } from "./assets/questions"
  import Plus from "./Plus.svelte"

  let value = $state(questions[0].questionTag)
</script>

<section class="relative mb-[165px] md:mb-20 sm:mb-10" id="faq">
  <h2
    class="mb-6 flex items-center justify-center gap-4 text-4xl font-bold sm:text-3xl"
  >
    Frequently asked questions
  </h2>

  <Accordion.Root type="single" bind:value class="mx-auto mt-10 max-w-[720px]">
    {#each questions as { question, answer, questionTag } (questionTag)}
      <Accordion.Item
        value={questionTag}
        class="mb-6 rounded-2xl border border-porcelain bg-[#f7f8fb] transition-colors data-[state=open]:border-sheets"
      >
        <Accordion.Header>
          <Accordion.Trigger
            class="group flex w-full items-center justify-between px-8 py-[27px]"
          >
            <h3 class="text-lg sm:text-base">
              {@html question}
            </h3>

            <Plus class="ml-[18px]" opened={value === questionTag} />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content forceMount>
          {#snippet child({ props, open })}
            {#if open}
              <div
                {...props}
                transition:slide={{
                  duration: 300,
                  easing: cubicInOut,
                  axis: "y",
                }}
              >
                <div
                  class="space-y-2 px-8 pb-[27px] text-base [&_a]:text-sheets hover:[&_a]:opacity-80"
                >
                  {@html answer}
                </div>
              </div>
            {/if}
          {/snippet}
        </Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</section>
