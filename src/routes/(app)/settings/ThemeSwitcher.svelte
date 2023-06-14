<script lang="ts">
  import { browser } from "$app/environment";
  import ButtonSplit from "$lib/components/ButtonSplit.svelte";

  let darkMode: boolean | null = true;

  function darkTheme(dark: boolean) {
    darkMode = dark;

    localStorage.setItem("theme", darkMode ? "dark" : "light");

    darkMode
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.removeAttribute("data-theme");
  }

  function revertToSystemTheme() {
    localStorage.removeItem("theme");
    darkMode = null;
  }

  if (browser) {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      darkMode = true;
    } else {
      document.documentElement.removeAttribute("data-theme");
      darkMode = false;
    }
  }
</script>

<ButtonSplit
  buttons={[
    {
      onClick: () => darkTheme(false),
      activeCondition: darkMode === false,
      label: "Light",
      iconName: "light_mode",
    },
    {
      onClick: () => darkTheme(true),
      activeCondition: darkMode === true,
      label: "Dark",
      iconName: "dark_mode",
    },
    {
      onClick: revertToSystemTheme,
      activeCondition: darkMode === null,
      label: "System",
      iconName: "phone_iphone",
    },
  ]}
/>
