<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { SCORE_SYMBOLS, type PixelsEntry } from "$lib/types";
  import TagBadge from "./TagBadge.svelte";

  export let entry: PixelsEntry;
</script>

<div class="score">{SCORE_SYMBOLS[entry.scores[0]]}</div>
{#each entry.tags as tag}
  <Card title={tag.type} biggerTitle>
    <div class="tag-entries">
      {#each tag.entries as tagEntry}
        <TagBadge>{tagEntry}</TagBadge>
      {/each}
    </div>
  </Card>
{/each}
{#if entry.notes.length !== 0}
  <Card title="Notes" biggerTitle>
    <div class="notes">{entry.notes}</div>
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

  .tag-entries,
  .notes {
    margin-top: 0.75rem;
  }
</style>
