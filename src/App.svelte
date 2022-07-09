<script>
  import Layout from "./___layout.svelte";
  import supabase from "./lib/db";
  import moment from "moment";

  // fetch the data
  async function getData() {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("id", { ascending: false });
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
      class="text-black text-center my-5"
    >
      <textarea
        type="text"
        placeholder="give me a joke"
        required
        minlength="5"
        bind:value={newComment}
        class="border w-5/6 p-2 italic text-center bg-transparent text-white items-center font-inter text-md rounded-md"
      />
      <br />
      <button
        value="Submit"
        on:click={() => (submit = false)}
        class="mx-5 rounded-md mt-3 bg-orange-500 hover:text-orange-500 hover:bg-white font-basement text-white px-5 py-2"
        >send</button
      >
    </form>
    {#if submit}
      {#await sendData()}
        <p class="text-md text-center text-yellow-400 italic font-space">
          Sending message...
        </p>
      {:then data}
        <p class="text-md text-center italic text-green-400 font-space">
          Successfuly send message, please refresh this page!
        </p>
      {:catch error}
        <p class="text-md text-center italic text-red-500 font-space">
          {error}
        </p>
      {/await}
    {/if}

    <!-- show message -->
    <div>
      <h1
        class="font-basement text-xl my-8 text-center mx-auto md:w-1/2 text-white tracking-wide bg-pink-400 rounded-md py-2"
      >
        Message's
      </h1>
      {#await getData()}
        <div class="text-md text-center text-yellow-500 italic font-space">
          <p>Trying to fetch all messages from our lovely database...</p>
        </div>
      {:then data}
        {#each data as comment}
          <div
            class="rounded-md my-2 bg-white/70 text-center w-3/5 mx-auto px-5 py-5 backdrop-blur-md"
          >
            <div
              class="rounded-md pb-2 __orange italic text-md font-space font-bold"
            >
              {moment(comment.created_at).format("Do MMMM, YYYY")}
            </div>
            <p class="text-black text-lg font-inter">
              {comment.txt}
            </p>
          </div>
        {/each}
      {:catch error}
        <div class="text-md italic text-red-500 text-center font-space">
          <p>{error}</p>
        </div>
      {/await}
    </div>
  </Layout>
</main>
