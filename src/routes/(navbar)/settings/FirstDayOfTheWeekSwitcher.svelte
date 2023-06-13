<script lang="ts">
  import { browser } from "$app/environment";
  import ButtonSplit from "$lib/components/ButtonSplit.svelte";

  let firstDayIsMonday: boolean | null = null;

  function setMondayAsFirst(mondayFirst: boolean) {
    firstDayIsMonday = mondayFirst;

    localStorage.setItem("fdotw", firstDayIsMonday ? "monday" : "sunday");
  }

  function unsetFirstDayPreference() {
    localStorage.removeItem("fdotw");
    firstDayIsMonday = null;
  }

  if (browser) {
    const fdotw = localStorage.getItem("fdotw");
    if (fdotw) {
      firstDayIsMonday = fdotw === "monday" ? true : false;
    } else {
      firstDayIsMonday = null;
    }
  }
</script>

<ButtonSplit
  buttons={[
    {
      onClick: unsetFirstDayPreference,
      activeCondition: firstDayIsMonday === null,
      label: "Auto",
    },
    {
      onClick: () => setMondayAsFirst(false),
      activeCondition: firstDayIsMonday === false,
      label: "Sunday",
    },
    {
      onClick: () => setMondayAsFirst(true),
      activeCondition: firstDayIsMonday === true,
      label: "Monday",
    },
  ]}
/>
