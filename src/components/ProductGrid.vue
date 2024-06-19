<template>
  <div class="product-grid">
    <div v-for="n in 12" :key="n" class="product-box">
      Product {{ n }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGrid'
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
}
.product-box {
  background-color: #e7e7e7;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
