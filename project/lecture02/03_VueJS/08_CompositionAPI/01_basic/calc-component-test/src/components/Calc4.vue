<template>
  <h2>버튼 없이 자동 계산 (Computed)</h2>
  <div>
    X : <input type="text" v-model.number="state.x" /> <br />
    Y : <input type="text" v-model.number="state.y" /> <br />
    <div>결과 : {{ result }}</div>
  </div>
</template>
<script>
import { reactive, computed } from 'vue';
export default {
  name: 'Calc3',
  setup() {
    const state = reactive({ x: 10, y: 20 });
    const result = computed(() => {
      return state.x + state.y; // 값 반환 및 함수 종료
    });
    return { state, result };
  },
};
</script>
