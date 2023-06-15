<script lang="ts">
  import { goto } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import type { PixelsEntry } from "$lib/types";

  export let entry: PixelsEntry;

  const scoreToSymbol: Record<number, string> = {
    5: "😀",
    4: "🙂",
    3: "😐",
    2: "🙁",
    1: "😵",
  };
</script>

<div class="score">{scoreToSymbol[entry.scores[0]]}</div>
{#each entry.tags as tag}
  <Card title={tag.type}>
    <div class="tag-entries">
      {#each tag.entries as tagEntry}
        <span>{tagEntry}</span>
      {/each}
    </div>
  </Card>
{/each}
{#if entry.notes.length !== 0}
  <Card title="Notes">
    {entry.notes}
  </Card>
{/if}

<style>
  .score {
    font-size: 6rem;
    text-align: center;
  }

  .tag-entries {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  span {
    border-radius: 0.5rem;
    border: 1px solid var(--clr-secondary-inactive);
    background-color: var(--clr-bg);
    font-weight: 500;
    padding: 0.25rem 1.25rem;
    font-size: 1.15rem;
    color: var(--clr-text);
  }
</style>
