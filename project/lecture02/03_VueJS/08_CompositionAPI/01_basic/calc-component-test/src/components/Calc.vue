<template>
  <h2>setup 함수 사용</h2>
  <div>
    X : <input type="text" v-model.number="x" /> <br />
    Y : <input type="text" v-model.number="y" /> <br />
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'Calc',
  setup() {
    const x = ref(10);
    const y = ref(20);
    return { x, y };
  },
};
</script>
<style></style>
