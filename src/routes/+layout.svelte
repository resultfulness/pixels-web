<script lang="ts">
  import "../app.css";

  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { page } from "$app/stores";

  let scrollY: number;

  beforeNavigate(() => {
    if ($page.url.pathname === "/")
      sessionStorage.setItem("scrollpos", `${scrollY}`);
  });

  afterNavigate(() => {
    let scrollpos = sessionStorage.getItem("scrollpos");

    if (scrollpos && $page.url.pathname === "/") {
      scrollY = +scrollpos;
    }
  });
</script>

<svelte:window bind:scrollY />

<div id="app">
  <slot />
</div>

<style>
  #app {
    margin-inline: auto;
    padding-block: 2rem 12rem;
    max-width: min(100% - 4rem, 1049px);
  }
</style>
