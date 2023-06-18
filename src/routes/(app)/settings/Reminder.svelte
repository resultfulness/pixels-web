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
    margin-top: 1rem;
    color: var(--clr-alert);
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid var(--clr-secondary-inactive);
    padding: 0.75rem;
    padding-right: 1.25rem;
    cursor: pointer;
    background-color: var(--clr-bg);
    color: var(--clr-text-inactive);
    font-size: 1rem;
    font-weight: 600;
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  button span {
    color: var(--clr-text);
  }
</style>
