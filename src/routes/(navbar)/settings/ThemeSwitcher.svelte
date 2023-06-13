<script lang="ts">
  import { browser } from "$app/environment";
  import ButtonSplit from "$lib/components/ButtonSplit.svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";

  let darkMode: boolean | null = true;

  function darkTheme(dark: boolean) {
    darkMode = dark;

    console.log(darkMode);

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

<style>
  div {
    border-radius: 100vw;
    width: max-content;
    margin-inline: auto;
    border: 1px solid var(--clr-secondary-inactive);
    display: flex;
    overflow: hidden;
  }

  button {
    background-color: inherit;
    color: var(--clr-text-inactive);
    font-weight: 600;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border: none;
    margin: 0;
    cursor: pointer;
  }

  button:nth-of-type(2) {
    border-left: 1px solid var(--clr-secondary-inactive);
    border-right: 1px solid var(--clr-secondary-inactive);
  }

  .active {
    background-color: var(--clr-secondary);
    color: var(--clr-text-active);
  }
</style>
