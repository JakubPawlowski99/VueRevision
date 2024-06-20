<template>
  <div class="product-grid">
    <div class="product" v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <div class="carousel">
        <button @click="prevImage(product)" class="arrow left-arrow">&lt;</button>
        <img :src="getCurrentImage(product)" :alt="product.name" class="product-image" />
        <button @click="nextImage(product)" class="arrow right-arrow">&gt;</button>
      </div>
      <div class="description">
        <p v-if="shouldShowFullDescription(product)">
          {{ product.description }}
          <button @click="toggleDescription(product)" class="see-more">{{ moreLessText(product) }}</button>
        </p>
        <p v-else>
          {{ truncatedDescription(product.description) }}
          <button @click="toggleDescription(product)" class="see-more">{{ moreLessText(product) }}</button>
        </p>
      </div>
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
      products: [] // Initialize products as an empty array
    };
  },
  created() {
    // Fetch products from your database/API here
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
        // Assuming data is an array of products from your database
        this.products = data.map(product => ({
          ...product,
          images: [
            require(`@/assets/products/${product.name.toLowerCase().replace(/ /g, '-')}/venu3-1.png`),
            require(`@/assets/products/${product.name.toLowerCase().replace(/ /g, '-')}/venu3-2.png`)
          ],
          currentImageIndex: 0,
          fullDescription: false
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
    },
    getCurrentImage(product) {
      return product.images[product.currentImageIndex];
    },
    toggleDescription(product) {
      product.fullDescription = !product.fullDescription;
    },
    moreLessText(product) {
      return product.fullDescription ? 'Show less' : 'See more';
    },
    shouldShowFullDescription(product) {
      return product.fullDescription;
    },
    truncatedDescription(description) {
      const maxLength = 100; // Adjust as needed
      if (description.length <= maxLength) return description;
      return description.substring(0, maxLength) + '...';
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
.carousel {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin: 10px 0;
}
.product-image {
  max-width: 100%;
  border-radius: 10px;
}
.arrow {
  position: absolute;
  top: 50%;
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
.see-more {
  background: none;
  border: none;
  cursor: pointer;
  color: blue;
}
</style>