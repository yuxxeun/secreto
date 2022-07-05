<script>
  import supabase from "./lib/db";
  import logo from "/static/assets/svelte.png";

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
  <img src={logo} alt="Svelte Logo" />
  <h1>secreto.now.sh</h1>
  <p>Send message with anonymously to @yuxxeun.</p>

  <!-- show comment -->
  <div>
    <h1>Comment</h1>
    {#await getData()}
      <p>trying to fetching comment from supabase...</p>
    {:then data}
      {#each data as comment}
        <li>{comment.txt}</li>
      {/each}
    {:catch error}
      <p>something went wrong while fetching the data :</p>
      <pre>{error}</pre>
    {/await}
  </div>

  <!-- insert comment -->
  <form on:submit|preventDefault={() => (submit = true)}>
    <input type="text" bind:value={newComment} />
    <input type="submit" value="Submit" on:click={() => (submit = false)} />
  </form>
  {#if submit}
    {#await sendData()}
      <p>sending Comment...</p>
    {:then data}
      <p>successfuly send comment, please refresh this page</p>
    {:catch error}
      <p>something went wrong while sending the comment :</p>
      <pre>{error}</pre>
    {/await}
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
