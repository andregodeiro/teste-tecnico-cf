<script setup>
import Orders from './pages/Orders.vue'
</script>

<template>
  <header class="header-container">
   
      <Orders/>

  </header>

  <main>
  
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

*{
  margin: 0px;
  padding: 0px;
  font-family: 'DM sans', sans-serif;
}

body {
  margin: 0px;
  padding: 0px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
