<template lang="">
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNalChi)</span>
    <div :class="navClass"></div>
  </nav>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    // 반응형 체크 변수 (ref, reactive), 메서드 (화살표 함수)
    // 컴퓨티드 (자동계산) 등 모두 리턴해야 함.
    // 리턴 : 객체리터럴 {}

    // 1. 삼선 무늬 상태값 저장 (true: 열기, false : 닫기)
    const state = reactive({ isNavShow: false });

    // 2. 상태 값 변화될 때 처리 (computed)
    const navClass = computed(() => {
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navebar-collapse';
    });

    // 3. 클릭 시 상태값 변경 메서드
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
      // toggle 기능
    };

    // (삼항연산자) 조건?true일 때 실행:false일 때 실행되는 코드
    return {};
  },
};
</script>
<style></style>
