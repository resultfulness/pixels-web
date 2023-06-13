<script>
  import Card from "$lib/components/Card.svelte";
  import Reminder from "./Reminder.svelte";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<main>
  <Card title="Theme">
    <ThemeSwitcher />
  </Card>
  <hr />
  <Card title="Daily reminder">
    <Reminder />
  </Card>
  <hr />
  <Card />
</main>

<style>
  main {
    margin: 2rem;
  }

  hr {
    margin-block: 1.5rem;
    border-color: var(--clr-separator);
    filter: grayscale(0.5) opacity(0.6);
  }
</style>
