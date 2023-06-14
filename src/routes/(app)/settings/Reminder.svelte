<script>
  import MdIcon from "$lib/components/MdIcon.svelte";
  import Switch from "$lib/components/Switch.svelte";

  let checked = false;

  let showModal = false;
</script>

<div>
  <div class="switch">
    <Switch bind:checked topRight />
  </div>

  <div class="buttons">
    <button disabled={!checked}>
      <MdIcon icon="notifications" />
      <span>Launch notification</span>
    </button>
    <button on:click={() => (showModal = true)} disabled={!checked}>
      <MdIcon icon="edit" />
      <span>Hour: 20:00</span>
    </button>
  </div>

  {#if !checked}
    <p>Reminders are disabled!</p>
  {/if}
</div>

<style>
  p {
    text-align: center;
    font-weight: 400;
    font-size: 1.1rem;
    color: var(--clr-alert);
    margin-top: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  button {
    border-radius: 0.75rem;
    border: 1px solid var(--clr-secondary-inactive);
    background-color: var(--clr-bg);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    padding-right: 1.25rem;
    font-size: 1rem;
    gap: 0.75rem;
    color: var(--clr-text-inactive);
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  button span {
    color: var(--clr-text);
  }
</style>
