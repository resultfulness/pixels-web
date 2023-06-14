<script>
  import Toast from "$lib/components/Toast.svelte";
  import NavigationBar from "./NavigationBar.svelte";
</script>

<main>
  <slot />
</main>
<Toast />
<NavigationBar />
