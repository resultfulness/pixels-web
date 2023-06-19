<script lang="ts">
  import MdIcon from "$lib/components/MdIcon.svelte";
  import type { PageData } from "./$types";
  import EntryView from "./EntryView.svelte";
  import constructUrlFromDate from "$lib/urlFromDate";

  export let data: PageData;

  $: entry = data.entry;
</script>

{#if entry}
  <EntryView {entry} />
{:else}
  <p style="text-align:center;">No Pixel</p>
{/if}
<div class="bottom-bar">
  <a href={constructUrlFromDate(data.previousDate)}>
    <MdIcon icon="chevron_left" size={30} />
    Previous day
  </a>
  <a href={constructUrlFromDate(data.nextDate)}>
    <MdIcon icon="chevron_right" size={30} />
    Next day
  </a>
  <a href={constructUrlFromDate(data.date) + "/edit"} class="fab">
    <MdIcon icon={entry ? "edit" : "add"} size={30} />
  </a>
</div>

<style>
  p {
    font-size: 1.1rem;
  }

  .bottom-bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto auto 1fr;
    gap: 0.75rem;
    padding: 1.5rem;
  }

  .bottom-bar a {
    grid-row: 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 100vw;
    background-color: var(--clr-card-bg);
    padding: 0.75rem 1.5rem;
    padding-right: 2rem;
    width: max-content;
    color: var(--clr-secondary-active-bg);
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
  }

  .bottom-bar .fab {
    grid-row: 1;
    grid-column: -1;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 1.25rem;
    padding: 1.25rem;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: var(--clr-primary);
    color: var(--clr-text-active);
  }
</style>
