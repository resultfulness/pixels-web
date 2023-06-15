<script lang="ts">
  import MdIcon from "$lib/components/MdIcon.svelte";

  export let date: Date;
</script>

<header>
  <a href="/">
    <MdIcon icon="arrow_back" size={30} />
  </a>
  <h1>
    {date.toLocaleDateString("default", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
    ({date.toLocaleString("default", { weekday: "long" })})
  </h1>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    margin: 1rem;
    gap: 2rem;
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
</style>
