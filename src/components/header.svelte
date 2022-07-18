<script>
  import { fly } from "svelte/transition";
</script>

<section>
  <div class="text-center mx-auto">
    <h1 class="font-basement tracking-wide uppercase text-white text-4xl">
      <span class="animate-pulse" transition:fly={{ y: 200, duration: 100 }}
        >✨</span
      > secreto
    </h1>
  </div>
</section>
