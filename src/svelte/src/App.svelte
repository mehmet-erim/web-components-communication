<script>
  export let count = "tasds";
  let counter;
  store.subscribe(() => (counter = store.getState()));

  setInterval(() => console.warn(count), 1000);
</script>

<style>

</style>

<!-- 
This tells the Svelte compiler that this file is a custom element. 
We also have to include the "customElement: true" compiler setting in rollup configuration.
-->
<svelte:options tag="svelte-counter-element" />

<div id="svelte-counter">
  Svelte
  <br />
  {counter}
  <br />
  {count}
</div>
