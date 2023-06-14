<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import FirstDayOfTheWeekSwitcher from "./FirstDayOfTheWeekSwitcher.svelte";
  import Reminder from "./Reminder.svelte";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import FileSaver from "file-saver";
  // import { localData } from "$lib/stores";

  function importData(event: MouseEvent) {
    throw new Error("Function not implemented.");
  }
  function exportData(event: MouseEvent) {
    // let filename = `PIXELS-BACKUP-${new Date().toISOString()}.json`;
    // let fileToSave = new Blob([JSON.stringify($localData, null, 4)], {
    //   type: "application/json",
    // });
    // FileSaver.saveAs(fileToSave, filename);
  }
</script>

<Card title="Theme">
  <ThemeSwitcher />
</Card>
<hr />
<Card title="Daily reminder">
  <Reminder />
</Card>
<hr />
<Card title="First day of the week">
  <FirstDayOfTheWeekSwitcher />
</Card>
<hr />
<button class="data-porter" on:click={importData}>
  <MdIcon icon="file_download" />
  Import Pixels Data
</button>
<button class="data-porter" on:click={exportData}>
  <MdIcon icon="file_upload" />
  Export Pixels Data
</button>

<style>
  hr {
    margin-block: 1.5rem;
    border-color: var(--clr-separator);
    filter: grayscale(0.5) opacity(0.6);
  }

  .data-porter {
    width: 100%;
    border-radius: 100vw;
    border: 0;
    background-color: var(--clr-secondary);
    padding: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
    color: var(--clr-text-active);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }
</style>
