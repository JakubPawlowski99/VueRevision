<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="prevPage">Previous</button>
    <span>Page {{ currentPage }}</span>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  name: 'ProductPagination',
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      this.currentPage++;
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
}
button {
  margin: 0 10px;
  padding: 5px 10px;
}
</style>
