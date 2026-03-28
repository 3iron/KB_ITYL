<template>
  <h2>Watch 사용</h2>
  <div>
    X : <input type="text" v-model.number="x" /> <br />
    결과 : {{ result }}
  </div>
</template>
<script>
import { ref, watch } from 'vue';
export default {
  name: 'Calc2',
  setup() {
    const x = ref(0);
    const result = ref(0);

    watch(x, (newValue, oldValue) => {
      console.log('이전 값:', oldValue);
      console.log('새로운 값:', newValue);

      result.value = newValue;
    });

    return { x, result };
  },
};
</script>
