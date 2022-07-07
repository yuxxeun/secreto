<script>
  import "./app.css";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Alert from "./components/alert.svelte";
</script>

<div class="w-5/6 mx-auto items-center py-5">
  <Header />
  <Alert />
  <slot />
  <Footer />
</div>
