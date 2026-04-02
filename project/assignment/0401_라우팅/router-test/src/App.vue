<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue';

// export default {
//   name: 'App',
//   components: { Header },
// };
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
