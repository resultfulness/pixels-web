<script lang="ts">
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { fade } from "svelte/transition";

  export let showDeleteConfirmation = true;
  export let handleDelete: (
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) => void;
</script>

<div transition:fade={{ duration: 200 }} class="modal">
  <span>
    <MdIcon icon="warning" variant="round" color="#e1bdc9" size={30} />
  </span>
  <h2>Delete pixel?</h2>
  <p>
    Are you sure you want to delete this pixel?
    <strong>This action cannot be undone!</strong>
  </p>
  <div class="actions">
    <button on:click={() => (showDeleteConfirmation = false)}>Cancel</button>
    <button on:click={handleDelete}>Delete</button>
  </div>
</div>

<style>
  .modal {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin-inline: auto;
    border-radius: 2rem;
    padding: 1.5rem;
    max-width: 360px;
    transform: translate(0, -50%);
    background-color: var(--clr-modal-bg);
    text-align: center;
  }

  span {
    color: var(--clr-text-active);
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
  }

  p {
    text-align: left;
    line-height: 1.4;
    margin-block: 1.5em;
  }

  .actions {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  button {
    position: relative;
    z-index: 999;
    border: 0;
    border-radius: 100vw;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: transparent;
    color: var(--clr-secondary-active-bg);
    font-weight: 500;
  }

  button:hover {
    background-color: var(--clr-secondary);
  }

  .modal::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: 0 0 0 100vw rgba(0 0 0 / 0.5);
    border-radius: 2rem;
  }
</style>
