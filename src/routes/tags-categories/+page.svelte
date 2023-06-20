<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { tagsCategories } from "$lib/stores";
  import TagBadge from "../entries/[year]/[month]/[day]/TagBadge.svelte";

  $: console.log($tagsCategories);

  let prevPage: string | undefined;
  afterNavigate(({ from }) => {
    prevPage = from?.url.pathname;
  });
</script>

<header>
  <a href={prevPage}>
    <MdIcon icon="arrow_back" size={30} />
  </a>
</header>
<main>
  {#each $tagsCategories as { type, entries }}
    <Card title={type} biggerTitle>
      <Button onClick={() => {}} absoluteAlignment="TOP-RIGHT">
        <MdIcon icon="add" size={30} variant="round" />
        New tag
      </Button>
      <div class="entries">
        {#each entries as entry}
          <TagBadge onEditHref={`/tags-categories/${type}/${entry}`}
            >{entry}</TagBadge
          >
        {/each}
      </div>
    </Card>
  {/each}
</main>

<style>
  header {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    z-index: 999;
  }

  a {
    display: grid;
    /* this is so the arrow doesn't move around on navigation */
    /* the previous page has a title that stretches the header's height */
    margin-block: 7.4px;
    color: inherit;
    text-decoration: none;
  }

  main {
    display: grid;
    gap: 1rem;
    margin-top: 4rem;
  }

  .entries {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
</style>
