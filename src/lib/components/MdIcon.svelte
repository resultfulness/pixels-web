<script lang="ts">
  export let icon: string;
  export let size: number = 24;
  export let variant: "outlined" | "round" | "sharp" | "two-tone" | "" = "";
  export let dark: boolean = false;
  export let color: string = "inherit";
</script>

<span
  class:dark
  class:light={!dark}
  class="material-icons{variant && `-${variant}`}"
  style:font-size={size + "px"}
  style:color
>
  {icon}
</span>

<style>
  .dark {
    color: rgba(0, 0, 0, 0.54);
  }
  .light {
    color: rgba(255, 255, 255, 1);
  }
</style>
