<script lang="ts">
  export let title: string = "";
  export let biggerTitle: boolean = false;
</script>

<section>
  {#if title}
    <h2 class:bigger={biggerTitle}>{title}</h2>
  {/if}
  <slot />
</section>

<style>
  h2 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.4rem;
  }

  h2.bigger {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0;
  }

  section {
    border-radius: 1rem;
    padding: 1.25rem;
    background-color: var(--clr-card-bg);
    margin-inline: 0.1rem;
    position: relative;
  }
</style>
