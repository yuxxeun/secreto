<script>
  import { fly } from "svelte/transition";
</script>

<section class="my-5 mx-auto">
  <div class="text-center">
    <h1
      class="font-basement tracking-wide mb-5 uppercase text-pink-500 text-5xl"
    >
      <span class="animate-pulse" transition:fly={{ y: 200, duration: 100 }}
        >✨</span
      > secreto
    </h1>
  </div>

  <div class="my-5 px-5 py-2">
    <p class="text-2xl text-center inter text-white">
      Send random (or shitty) message with anonymously to me.
    </p>
  </div>
</section>
