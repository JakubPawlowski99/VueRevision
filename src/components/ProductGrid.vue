<template>
  <div class="product-grid">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="product-images">
        <button @click="prevImage(product)" class="arrow left-arrow">&lt;</button>
        <img :src="getImageUrl(product.images[product.currentImageIndex])" :alt="product.name" />
        <button @click="nextImage(product)" class="arrow right-arrow">&gt;</button>
      </div>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.category }}</p>
      <p>${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGrid',
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.products = data.map(product => ({
          ...product,
          images: JSON.parse(product.images),
          currentImageIndex: 0
        }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    nextImage(product) {
      product.currentImageIndex = (product.currentImageIndex + 1) % product.images.length;
    },
    prevImage(product) {
      product.currentImageIndex = (product.currentImageIndex - 1 + product.images.length) % product.images.length;
    }
  },
  computed: {
    getImageUrl() {
      return (imagePath) => `@/assets${imagePath}`;
    }
  }
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.product {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.product-images {
  position: relative;
}
.product-images img {
  max-width: 100%;
  border-radius: 10px;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
}
.left-arrow {
  left: 10px;
}
.right-arrow {
  right: 10px;
}
</style>
