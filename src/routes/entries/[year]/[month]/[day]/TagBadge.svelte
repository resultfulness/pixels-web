<script lang="ts">
  import MdIcon from "$lib/components/MdIcon.svelte";

  export let onRemove: (() => void) | null = null;
</script>

<span class="badge">
  <slot />
  {#if onRemove !== null}
    <button on:click={onRemove} type="button">
      <MdIcon icon="close" size={18} />
    </button>
  {/if}
</span>

<style>
  span.badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--clr-secondary-inactive);
    border-radius: 0.5rem;
    padding: 0.25rem 1.25rem;
    background-color: var(--clr-bg);
    color: var(--clr-text);
    font-size: 1.15rem;
    font-weight: 500;
  }

  button {
    display: grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--clr-text-inactive);
    color: var(--clr-bg);
  }
</style>
