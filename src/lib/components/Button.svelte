<script lang="ts">
  import MdIcon from "./MdIcon.svelte";

  export let onClick: (e: MouseEvent) => void = () => {};
  export let absoluteAlignment: "TOP-RIGHT" | "NONE" = "NONE";
  export let type: "button" | "submit" | "reset" | null | undefined = "button";
  export let href: string = "";
</script>

{#if href.length === 0}
  <button
    {type}
    on:click={onClick}
    class:top-right={absoluteAlignment === "TOP-RIGHT"}
  >
    <slot />
  </button>
{:else}
  <a {href} class:top-right={absoluteAlignment === "TOP-RIGHT"}>
    <slot />
  </a>
{/if}

<style>
  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 100vw;
    border: 0;
    padding: 0.6rem 1.5rem;
    padding-right: 1.75rem;
    background-color: var(--clr-secondary);
    color: var(--clr-text-active);
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
  }

  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    cursor: pointer;
  }
</style>
