<script lang="ts">
  import MdIcon from "$lib/components/MdIcon.svelte";
  import type { PageData } from "./$types";
  import EntryHeader from "./EntryHeader.svelte";
  import EntryView from "./EntryView.svelte";

  export let data: PageData;

  $: entry = data.entry;

  function constructUrlFromDate(date: Date) {
    return `/entries/${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
  }
</script>

<EntryHeader date={data.date} />
<main>
  {#if entry}
    <EntryView {entry} />
  {:else}
    <p>No Pixel</p>
  {/if}
</main>
<div class="bottom-bar">
  <a href={constructUrlFromDate(data.previousDate)}>
    <MdIcon icon="chevron_left" size={30} />
    Previous day
  </a>
  <a href={constructUrlFromDate(data.nextDate)}>
    <MdIcon icon="chevron_right" size={30} />
    Next day
  </a>
  <button>
    <MdIcon icon={entry ? "edit" : "add"} size={30} />
  </button>
</div>

<style>
  main {
    display: grid;
    min-height: calc(100vh - 3rem - 11.5rem);
    place-content: center;
    padding-inline: 2rem;
    gap: 1rem;
  }

  p {
    font-size: 1.1rem;
  }

  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto auto 1fr;
    padding: 1.5rem;
    gap: 0.75rem;
  }

  .bottom-bar a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 100vw;
    background-color: var(--clr-card-bg);
    width: max-content;
    padding: 0.75rem 1.5rem;
    padding-right: 2rem;
    color: var(--clr-secondary-active-bg);
    font-weight: 500;
    font-size: 1.1rem;
    grid-row: 2;
    text-decoration: none;
  }

  button {
    background-color: var(--clr-primary);
    color: var(--clr-text-active);
    border: 0;
    border-radius: 1.25rem;
    aspect-ratio: 1;
    padding: 1.25rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    grid-row: 1;
    grid-column: -1;
  }
</style>
