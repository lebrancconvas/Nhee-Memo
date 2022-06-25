<script lang="ts">
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Memo from './routes/Memo.svelte';

  let routes = {
    "/": Home,
    "/memo": Memo
  };
</script>

<main>
  <Router {routes} /> 
</main>

<style>

</style>