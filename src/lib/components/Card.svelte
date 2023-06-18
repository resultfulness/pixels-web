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
    font-size: 1.4rem;
    font-weight: 500;
  }

  h2.bigger {
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: 400;
  }

  section {
    position: relative;
    margin-inline: 0.1rem;
    border-radius: 1rem;
    padding: 1.25rem;
    background-color: var(--clr-card-bg);
  }
</style>
