<script>
  import NavigationBar from "./NavigationBar.svelte";
</script>

<main>
  <slot />
</main>
<NavigationBar />

<style>
  main {
    margin: 1rem 2rem 16rem;
  }
</style>
