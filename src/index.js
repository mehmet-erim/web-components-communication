import { counterStore } from './stores';

counterStore.dispatch({ type: 'INCREMENT' });

counterStore.dispatch({ type: 'INCREMENT' });

counterStore.dispatch({ type: 'DECREMENT' });
setInterval(() => {
  counterStore.dispatch({ type: 'INCREMENT' });
}, 1000);

window.store = counterStore;

setTimeout(() => {
  const svelteElement = document.body.querySelector('svelte-counter-element');
  svelteElement.setAttribute('count', counterStore);
}, 1000);
