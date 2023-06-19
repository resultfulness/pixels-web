<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Card from "$lib/components/Card.svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { SCORE_SYMBOLS } from "$lib/types";
  import { pixels, tagsCategories } from "$lib/stores";
  import DeleteModal from "./DeleteModal.svelte";
  import TagBadge from "../TagBadge.svelte";

  import type { PageData } from "./$types";
  export let data: PageData;

  let tags = data.entry?.tags || [];

  function handleRemove(type: string, entry: string) {
    if (tags) {
      const newEntries = tags
        .find((t) => t.type === type)!
        .entries.filter((e) => e !== entry);

      tags = [
        ...tags.filter((t) => t.type !== type),
        { type, entries: newEntries },
      ];
    }
  }

  let scores = data.entry?.scores[0] || 0;
  let notes = data.entry?.notes || "";

  function pixelsDateFormat(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  function onSubmit(e: SubmitEvent) {
    const newEntry = {
      date: pixelsDateFormat(data.date),
      type: "Mood",
      scores: [+scores],
      notes,
      tags,
    };

    if (data.entry) {
      pixels.update((val) => [
        ...val.filter((e) => e.date !== data.entry!.date),
        newEntry,
      ]);
    } else {
      pixels.update((val) => [...val, newEntry]);
    }

    goto($page.url.pathname.replace("/edit", ""), {
      replaceState: true,
      invalidateAll: true,
    });
  }

  let showDeleteConfirmation: boolean = false;

  function handleDelete(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    pixels.update((val) => val.filter((e) => e.date !== data.entry!.date));
    goto($page.url.pathname.replace("/edit", ""), {
      replaceState: true,
      invalidateAll: true,
    });
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <Card>
    <div class="scores">
      {#each [1, 2, 3, 4, 5] as i}
        <div class="score" class:checked={+scores === i}>
          <label>
            <input
              type="radio"
              name="score"
              id="score1"
              value={i}
              bind:group={scores}
              required
            />
            <span>{SCORE_SYMBOLS[i]}</span>
          </label>
        </div>
      {/each}
    </div>
  </Card>
  {#each $tagsCategories as { type }}
    <Card title={type} biggerTitle>
      <button type="button">
        <MdIcon icon="add" size={30} />
        Add tag
      </button>
      <div class="tag-entries">
        {#if tags?.some((t) => t.type === type)}
          {#each tags.find((t) => t.type === type).entries as tagEntry}
            <TagBadge onRemove={() => handleRemove(type, tagEntry)}>
              {tagEntry}
            </TagBadge>
          {/each}
        {/if}
      </div>
    </Card>
  {/each}
  <a href="/tags-categories">
    <MdIcon icon="edit" />
    Edit tags & categories
  </a>
  <Card title="Notes" biggerTitle>
    <input type="text" name="notes" id="notes" bind:value={notes} />
  </Card>

  <button type="submit" class="fab">
    <MdIcon icon="save" size={30} />
  </button>
</form>
{#if data.entry}
  <button class="delete" on:click={() => (showDeleteConfirmation = true)}>
    <MdIcon icon="delete_forever" size={30} />
  </button>
{/if}
{#if showDeleteConfirmation}
  <DeleteModal bind:showDeleteConfirmation {handleDelete} />
{/if}

<style>
  form {
    display: grid;
    gap: 1rem;
  }

  .scores {
    display: grid;
    grid-template-columns: repeat(5, 4rem);
    justify-content: center;
    gap: 1rem;
  }

  .score {
    position: relative;
    border-radius: 50%;
    width: 4rem;
    aspect-ratio: 1;
  }
  .score.checked {
    outline: 4px solid pink;
  }

  label {
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  label span {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    font-size: 3rem;
  }

  input[type="radio"] {
    opacity: 0;
  }

  .tag-entries {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }

  input#notes {
    margin-top: 0.75rem;
    border: 0;
    border-bottom: 2px solid var(--clr-secondary-inactive);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    background-color: var(--clr-secondary-inactive-bg);
    color: var(--clr-text-active);
    font-size: 1.1rem;
  }

  input#notes:focus {
    border-color: var(--clr-secondary-active-bg);
    outline: none;
  }

  button.fab {
    position: absolute;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    margin: 1.5rem;
    border: 0;
    border-radius: 1.25rem;
    padding: 1.25rem;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: var(--clr-primary);
    color: var(--clr-text-active);
  }

  a,
  button[type="button"] {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 100vw;
    border: 0;
    padding: 0.75rem 1.25rem;
    padding-right: 1.5rem;
    background-color: var(--clr-secondary);
    color: var(--clr-text-active);
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
  }

  button[type="button"] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.75rem;
    cursor: pointer;
  }

  button.delete {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    margin: 1rem;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    color: var(--clr-alert);
  }
</style>
