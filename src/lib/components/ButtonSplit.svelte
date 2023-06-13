<script lang="ts">
  import MdIcon from "./MdIcon.svelte";

  export let buttons: {
    onClick: () => void;
    activeCondition: boolean;
    label: string;
    iconName: string;
  }[];
</script>

<div>
  {#each buttons as { onClick, activeCondition, label, iconName }}
    <button on:click={onClick} class:active={activeCondition}>
      <MdIcon icon={activeCondition ? "done" : iconName} />
      {label}
    </button>
  {/each}
</div>

<style>
  div {
    border-radius: 100vw;
    width: max-content;
    margin-inline: auto;
    border: 1px solid var(--clr-secondary-inactive);
    display: flex;
    overflow: hidden;
  }

  button {
    background-color: inherit;
    color: var(--clr-text-inactive);
    font-weight: 600;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border: none;
    margin: 0;
    cursor: pointer;
  }

  button:nth-of-type(2) {
    border-left: 1px solid var(--clr-secondary-inactive);
    border-right: 1px solid var(--clr-secondary-inactive);
  }

  .active {
    background-color: var(--clr-secondary);
    color: var(--clr-text-active);
  }
</style>
