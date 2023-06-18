<script lang="ts">
  import type { LayoutData } from "./$types";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { page } from "$app/stores";

  export let data: LayoutData;
</script>

<header>
  <a
    href={$page.url.pathname.endsWith("/edit")
      ? $page.url.pathname.replace("/edit", "")
      : "/"}
  >
    <MdIcon icon="arrow_back" size={30} />
  </a>
  <h1>
    {data.date.toLocaleDateString("default", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
    ({data.date.toLocaleString("default", { weekday: "long" })})
  </h1>
</header>

<main>
  <slot />
</main>

<style>
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 400;
  }

  a {
    display: grid;
    color: inherit;
    text-decoration: none;
  }
  main {
    display: grid;
    place-content: center;
    justify-content: stretch;
    gap: 1rem;
    padding-inline: 2rem;
    min-height: calc(100vh - 3rem - 11.5rem);
  }
</style>
