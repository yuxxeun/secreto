<script>
  import "./app.css";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Alert from "./components/alert.svelte";
</script>

<div class="px-5 mx-auto md:w-5/6 lg:w-5/6 items-center py-5">
  <Header />
  <Alert />
  <slot />
  <Footer />
</div>
