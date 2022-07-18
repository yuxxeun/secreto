<script>
  import "./app.css";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Alert from "./components/alert.svelte";
</script>

<div class="px-10 mx-auto items-center py-10">
  <Header />
  <Alert />
  <slot />
  <Footer />
</div>
