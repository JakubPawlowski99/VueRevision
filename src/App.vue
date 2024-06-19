<template>
  <div id="app">
    <TopBar />
    <ProductGrid />
    <Pagination />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import ProductGrid from './components/ProductGrid.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    ProductGrid,
    Pagination
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>