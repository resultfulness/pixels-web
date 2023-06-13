<script lang="ts">
  import "../app.css";
</script>

<div id="app">
  <slot />
</div>

<style>
  #app {
    margin-inline: auto;
    max-width: min(100% - 0rem, 1049px);
  }
</style>
