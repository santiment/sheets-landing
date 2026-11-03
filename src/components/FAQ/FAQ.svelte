<script lang="ts">
  import Accordion from "san-webkit-next/ui/core/Accordion"

  import { questions } from "./assets/questions"

  const items = questions.map(({ question, answer }) => ({
    label: question,
    answer,
  }))
</script>

<section class="relative mb-[165px] sm:mb-20" id="faq">
  <h2
    class="mb-10 flex items-center justify-center gap-4 text-4xl font-semibold sm:text-3xl"
  >
    Frequently asked questions
  </h2>

  <div class="mx-auto max-w-[720px]">
    <Accordion {items} level={3}>
      {#snippet content({ answer })}
        <div class="space-y-2 [&_a]:text-sheets hover:[&_a]:opacity-80">
          {@html answer}
        </div>
      {/snippet}
    </Accordion>
  </div>
</section>
