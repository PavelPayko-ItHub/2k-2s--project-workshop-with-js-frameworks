<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="main">
    <Header></Header>
      <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: scroll;
}
</style>
