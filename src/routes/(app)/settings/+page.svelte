<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { get } from "svelte/store";
  import { toast } from "$lib/stores/toaster";
  import FirstDayOfTheWeekSwitcher from "./FirstDayOfTheWeekSwitcher.svelte";
  import Reminder from "./Reminder.svelte";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import FileSaver from "file-saver";

  let files: FileList;

  function readFile(file: File): Promise<string> {
    return file.text();
  }

  $: if (files) {
    readFile(files[0])
      .then(importData)
      .catch((e) => {
        toast.showWithMessage(`${e.toString()}`);
      });
  }

  function areArraysEqual(arr1: any[], arr2: any[]): boolean {
    return (
      arr1.length === arr2.length &&
      arr1.sort().every((value, index) => value === arr2.sort()[index])
    );
  }

  async function importData(contents: string) {
    let data: any;
    try {
      data = JSON.parse(contents);
    } catch (_) {
      throw new Error("couldn't parse data as JSON");
    }

    if (data.constructor !== Array) {
      throw new Error("not an array");
    }

    const requiredKeys = ["date", "type", "scores", "notes", "tags"];
    for (const entry of data) {
      const entryKeys = Object.keys(entry);
      if (!areArraysEqual(requiredKeys, entryKeys)) {
        throw new Error("invalid data format");
      }
    }

    const { pixels } = await import("$lib/stores");
    pixels.set(data);
    toast.showWithMessage("Imported successfully");
  }

  async function exportData(event: MouseEvent) {
    const { pixels } = await import("$lib/stores");
    let filename = `PIXELS-BACKUP-${new Date().toISOString()}.json`;
    let fileToSave = new Blob([JSON.stringify(get(pixels), null, 4)], {
      type: "application/json",
    });
    FileSaver.saveAs(fileToSave, filename);
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
<label class="data-porter">
  <MdIcon icon="file_download" />
  Import Pixels Data
  <input
    type="file"
    id="import"
    name="import"
    accept="application/json"
    style="display: none;"
    bind:files
  />
</label>
<button class="data-porter" on:click={exportData}>
  <MdIcon icon="file_upload" />
  Export Pixels Data
</button>

<style>
  hr {
    filter: grayscale(0.5) opacity(0.6);
    margin-block: 1.5rem;
    border-color: var(--clr-separator);
  }

  .data-porter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    border: 0;
    border-radius: 100vw;
    padding: 0.75rem;
    width: 100%;
    cursor: pointer;
    background-color: var(--clr-secondary);
    color: var(--clr-text-active);
    font-weight: 700;
  }
</style>
