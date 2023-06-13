<script lang="ts">
  import { browser } from "$app/environment";

  let darkMode: boolean = true;

  function toggleTheme() {
    darkMode = !darkMode;

    localStorage.setItem("theme", darkMode ? "dark" : "light");

    darkMode
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.removeAttribute("data-theme");
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

<button on:click={toggleTheme}>{darkMode ? "dark" : "light"}</button>
