<script lang="ts">
  import "../app.css";
</script>

<div id="app">
  <slot />
</div>

<style>
  #app {
    padding-block: 2rem 12rem;
    margin-inline: auto;
    max-width: min(100% - 4rem, 1049px);
  }
</style>
