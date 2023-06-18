<script lang="ts">
  import { page } from "$app/stores";
  import MdIcon from "$lib/components/MdIcon.svelte";

  const links = [
    {
      href: "/",
      title: "Pixels",
      icon: "home",
    },
    {
      href: "/reports",
      title: "Reports",
      icon: "multiline_chart",
    },
    {
      href: "/about",
      title: "About",
      icon: "favorite",
    },
    {
      href: "/settings",
      title: "Settings",
      icon: "settings",
    },
  ];

  $: active = $page.url.pathname;
</script>

<nav>
  <ul>
    {#each links as { href, title, icon }}
      <li>
        <a {href} {title} class:active={active === href}>
          <!-- workaround for 'favorite' icon not having an outlined version -->
          <MdIcon
            icon={href === "/about" && active !== "/about"
              ? `${icon}_border`
              : icon}
            variant={active !== href ? "outlined" : ""}
            size={30}
          />
          {title}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--clr-bar-bg);
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-inline: auto;
    padding: 0;
    max-width: 512px;
  }

  a {
    position: relative;
    display: grid;
    place-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
    color: var(--clr-text-inactive);
    font-weight: 500;
    text-decoration: none;
  }

  a.active {
    color: var(--clr-text-active);
  }

  a::after {
    content: "";
    position: absolute;
    top: 0.7rem;
    left: 20%;
    z-index: -1;
    border-radius: 100vw;
    width: 60%;
    height: 2.4rem;
    background-image: radial-gradient(
      circle at center,
      var(--clr-secondary) 1%,
      transparent 0%,
      transparent
    );
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  a.active::after {
    background-size: 15000%;
    transition: background-size 500ms;
  }
</style>
