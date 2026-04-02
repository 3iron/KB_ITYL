<template>
  <div class="container">
    <Header />
    <!-- RouterView 태그 -->
    <!-- <router-view></router-view> -->
    <RouterView />
  </div>
</template>
<!-- <script setup>
import Header from '@/components/Header.vue';
</script> -->

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  setup() {
    // setup() : 컴포넌트 로직을 작성하는 함수
    // 템플릿에서 사용할 데이터와 함수는 반환(return)해야 한다
    return {};
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
