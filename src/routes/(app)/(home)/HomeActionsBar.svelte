<script>
  import MdIcon from "$lib/components/MdIcon.svelte";
  import constructUrlFromDate from "$lib/urlFromDate";
</script>

<div class="bar">
  <div class="settings">
    <button><MdIcon icon="tune" size={30} /></button>
    <button><MdIcon icon="palette" size={30} /></button>
  </div>
  <a href={constructUrlFromDate(new Date())} class="add">
    <MdIcon icon="add_reaction" size={30} />
    <span>Today</span>
  </a>
</div>

<style>
  .bar {
    position: fixed;
    right: 0;
    bottom: 6rem;
    left: 0;
    z-index: 99;
    margin-inline: auto;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 0.5rem;
    width: min(100%, 1049px + 4rem);
    background-color: var(--clr-bar-bg-secondary);
  }

  .settings {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.75rem;
    width: max-content;
    background-color: var(--clr-bar-bg);
  }

  .settings > button {
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    padding: 0.5rem;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: transparent;
    color: var(--clr-text-inactive);
  }

  .settings > button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .add {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform: translateY(-50%);
    margin-right: 1rem;
    border: 0;
    border-radius: 1rem;
    padding-block: 0.8rem;
    padding-inline: 1rem 1.25rem;
    background-color: var(--clr-primary);
    color: var(--clr-text-active);
    font-weight: 600;
    text-decoration: none;
  }
</style>
