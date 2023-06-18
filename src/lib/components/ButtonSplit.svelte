<script lang="ts">
  import MdIcon from "./MdIcon.svelte";

  export let buttons: {
    onClick: () => void;
    activeCondition: boolean;
    label: string;
    iconName?: string;
  }[];
</script>

<div>
  {#each buttons as { onClick, activeCondition, label, iconName }}
    <button on:click={onClick} class:active={activeCondition}>
      <MdIcon icon={activeCondition ? "done" : iconName ? iconName : ""} />
      {label}
    </button>
  {/each}
</div>

<style>
  div {
    display: flex;
    overflow: hidden;
    width: max-content;
    margin-inline: auto;
    border: 1px solid var(--clr-secondary-inactive);
    border-radius: 100vw;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 0;
    border: none;
    padding: 1rem 1.5rem;
    background-color: inherit;
    color: var(--clr-text-inactive);
    font-weight: 600;
    font-size: 1.1rem;
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
