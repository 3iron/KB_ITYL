<template>
  <div>
    <h3>다른 컴포넌트</h3>
    <div>
      x : <input type="text" v-model.number="x" />
      <br />
      y : <input type="text" v-model.number="y" />
      <br />
      <button @click="calculateSum(x, y, 1)">X + Y</button>
      <p>X + Y = {{ sum1 }}</p>
    </div>
  </div>
</template>

<script setup>
// export default {} 대신 script에 setup 추가
import { useCalc } from './Composition.vue';

const { x, y, sum1, calculateSum } = useCalc();
// useCalc()에서 return된 객체
</script>

<!-- ----------------------------------------------- -->
<!-- 
<script>
import { useCalc } from './Composition.vue';
export default {
  setup() {
    const { x, y, sum1, calculateSum } = useCalc();

    return { x, y, sum1, calculateSum };
  },
};
</script> -->
