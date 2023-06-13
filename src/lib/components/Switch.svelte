<script lang="ts">
  export let checked: boolean;
</script>

<label class="switch">
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

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    border-radius: 100vw;
    border: var(--_switch-border-width) solid var(--clr-secondary-inactive);
    background-color: var(--clr-secondary-inactive-bg);
    transition: 0.2s;
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
    width: var(--_slider-width);
    aspect-ratio: 1;
    left: var(--_slider-offset);
    bottom: var(--_slider-offset);
    border-radius: 50%;
    background-color: var(--clr-secondary-inactive);
    scale: 0.8;
    transition: 0.2s;
  }

  input:checked + .slider {
    border-color: var(--clr-secondary-active-bg);
    background-color: var(--clr-secondary-active-bg);
  }

  input:checked + .slider::before {
    background-color: var(--clr-secondary-active);
    scale: 1.3;
    transform: translateX(18px);
  }
</style>
