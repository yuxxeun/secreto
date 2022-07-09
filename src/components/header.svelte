<script>
  import { fly } from "svelte/transition";
</script>

<section class="mx-auto">
  <div class="text-center">
    <h1 class="font-basement tracking-wide uppercase text-white text-4xl">
      <span class="animate-pulse" transition:fly={{ y: 200, duration: 100 }}
        >✨</span
      > secreto
    </h1>
  </div>

  <div class="my-2 px-5 py-2">
    <p class="text-lg italic text-center inter text-white">
      Send random message to <span class="__orange">@yuxxeun</span>.
    </p>
  </div>
</section>
