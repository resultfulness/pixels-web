<script lang="ts">
  import { cubicInOut } from "svelte/easing";
  import { toast } from "$lib/stores/toaster";

  $: visible = $toast.visible;
  $: message = $toast.message;

  function expand(node: Element) {
    return {
      delay: 0,
      duration: 500,
      css: (t: number) => {
        const eased = cubicInOut(t);
        return `grid-template-rows: ${8 * eased}rem`;
      },
    };
  }
</script>

{#if visible}
  <div transition:expand class:visible on:click={() => (visible = false)}>
    <p>
      {message}
    </p>
  </div>
{/if}

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-rows: 0rem;
    padding: 1rem 2rem;
    width: 100%;
    background-color: var(--clr-text);
    color: var(--clr-bg);
  }

  .visible {
    grid-template-rows: 8rem;
  }

  p {
    overflow: hidden;
    max-width: 1049px;
    font-size: 1.1rem;
  }
</style>
