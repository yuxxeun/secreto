<script>
  import Layout from "./___layout.svelte";
  import supabase from "./lib/db";

  // fetch the data
  async function getData() {
    const { data, error } = await supabase.from("comments").select("*");
    if (error) throw new Error(error.message);
    return data;
  }

  // insert data
  let newComment;
  let submit = false;

  async function sendData() {
    const { data, error } = await supabase
      .from("comments")
      .insert([{ txt: newComment }]);
    if (error) throw new Error(error.message);
    return data;
  }
</script>

<main>
  <Layout>
    <!-- message form -->
    <form
      on:submit|preventDefault={() => (submit = true)}
      class="mx-auto d-flex flex w-5/6 text-black my-5 justify-center items-center"
    >
      <textarea
        type="text"
        placeholder="Type random message..."
        class="border-2 p-2 w-4/5 items-center inter text-lg rounded-md border-cyan-500"
      />
      <button
        value="Submit"
        on:click={() => (submit = false)}
        class="mx-5 rounded-md bg-cyan-500 hover:bg-white hover:border-2 hover:border-cyan-500 hover:text-cyan-500 font-basement text-white px-8 py-5"
        >Send &rarr;</button
      >
    </form>
    {#if submit}
      {#await sendData()}
        <p class="text-xl text-yellow-400 italic font-space">
          Sending message...
        </p>
      {:then data}
        <p class="text-xl italic text-green-400 font-space">
          Successfuly send message, please refresh this page
        </p>
      {:catch error}
        <p class="text-xl italic text-red-500 font-space">
          Something went wrong while sending the message :
        </p>
        <pre>{error}</pre>
      {/await}
    {/if}

    <!-- show message -->
    <div>
      <h1
        class="font-basement text-3xl my-10 text-center mx-auto md:w-1/5 text-white tracking-wide bg-yellow-400 rounded-md px-5 py-3"
      >
        Message's
      </h1>
      {#await getData()}
        <div class="text-xl text-yellow-400 italic font-space">
          <p>Trying to fetch all messages from our lovely database...</p>
        </div>
      {:then data}
        {#each data as comment}
          <div
            class="rounded-md my-2 bg-white/70 text-center w-3/4 mx-auto px-5 py-5 backdrop-blur-md"
          >
            <div
              class="rounded-lg pb-2 text-pink-500 italic font-space font-bold"
            >
              {comment.created_at}
            </div>
            <p class="text-black text-xl inter">
              {comment.txt}
            </p>
          </div>
        {/each}
      {:catch error}
        <div class="text-xl italic text-red-500 text-center font-space">
          <p>Something went wrong while fetching the messages :</p>
          <pre>{error}</pre>
        </div>
      {/await}
    </div>
  </Layout>
</main>
