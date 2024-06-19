<template>
  <div class="top-bar">
    <h1>TEMPORARY NAME</h1>
     <img src="@/assets/logo.png" alt="Logo" class="logo"/>
    <select>
      <option disabled selected>Select a category</option>
      <!-- Categories will be populated here later -->
    </select>
    <input type="text" placeholder="Search products..." />
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e7e7e7;
}
.logo {
  height: 50px;
  margin-right: 10px;
}
h1 {
  margin: 0;
}
select, input[type="text"] {
  margin-left: 10px;
  padding: 5px;
}
</style>
