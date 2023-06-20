<script lang="ts">
  export let checked: boolean;
  export let absoluteAlignment: "TOP-RIGHT" | "NONE" = "NONE";
</script>

<label class="switch" class:top-right={absoluteAlignment === "TOP-RIGHT"}>
  <input type="checkbox" bind:checked />
  <span class="slider round" />
</label>

<style>
  .switch {
    --_switch-width: 4rem;
    --_switch-height: 2.5rem;
    --_slider-width: 1.5rem;
    --_switch-border-width: 3px;

    position: relative;
    display: inline-block;
    width: var(--_switch-width);
    height: var(--_switch-height);
  }

  .switch.top-right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    transition: 0.2s;
    border: var(--_switch-border-width) solid var(--clr-secondary-inactive);
    border-radius: 100vw;
    background-color: var(--clr-secondary-inactive-bg);
    cursor: pointer;
  }

  .slider::before {
    --_slider-offset: calc(
      (
          var(--_switch-height) - var(--_slider-width) -
            var(--_switch-border-width) * 2
        ) / 2
    );

    content: "";
    position: absolute;
    bottom: var(--_slider-offset);
    left: var(--_slider-offset);
    scale: 0.8;
    transition: 0.2s;
    width: var(--_slider-width);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--clr-secondary-inactive);
  }

  input:checked + .slider {
    border-color: var(--clr-secondary-active-bg);
    background-color: var(--clr-secondary-active-bg);
  }

  input:checked + .slider::before {
    transform: translateX(18px);
    scale: 1.3;
    background-color: var(--clr-secondary-active);
  }
</style>
