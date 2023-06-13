<script lang="ts">
  export let title: string = "";
</script>

<section>
  {#if title}
    <h2>{title}</h2>
  {/if}
  <slot />
</section>

<style>
  h2 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.4rem;
  }

  section {
    border-radius: 1rem;
    padding: 1.25rem;
    background-color: var(--clr-card-bg);
    margin-inline: 0.1rem;
    position: relative;
  }
</style>
