<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { tagsCategories } from "$lib/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<form>
  <Card>
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
  </Card>
  {#each $tagsCategories as category}
    <Card title={category.type} biggerTitle>
      <button>
        <MdIcon icon="add" size={30} />
        Add tag
      </button>
    </Card>
  {/each}
  <a href="/tags-categories">
    <MdIcon icon="edit" />
    Edit tags & categories
  </a>
  <Card title="Notes" biggerTitle>
    <input type="text" name="" id="" />
  </Card>
  <button type="submit" class="fab">
    <MdIcon icon="save" size={30} />
  </button>
</form>

<style>
  form {
    display: grid;
    gap: 1rem;
  }

  button.fab {
    background-color: var(--clr-primary);
    color: var(--clr-text-active);
    border: 0;
    border-radius: 1.25rem;
    aspect-ratio: 1;
    padding: 1.25rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1.5rem;
  }

  a,
  button:not(.fab) {
    border-radius: 100vw;
    border: 0;
    background-color: var(--clr-secondary);
    padding: 0.75rem 1.25rem;
    padding-right: 1.5rem;
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--clr-text-active);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  button:not(.fab) {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.75rem;
  }
</style>
