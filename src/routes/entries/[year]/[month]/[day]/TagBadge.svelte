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
    border-radius: 0.5rem;
    border: 1px solid var(--clr-secondary-inactive);
    background-color: var(--clr-bg);
    font-weight: 500;
    padding: 0.25rem 1.25rem;
    font-size: 1.15rem;
    color: var(--clr-text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    display: grid;
    place-items: center;
    background-color: var(--clr-text-inactive);
    color: var(--clr-bg);
    border-radius: 50%;
    padding: 0;
    border: 0;
    cursor: pointer;
  }
</style>
