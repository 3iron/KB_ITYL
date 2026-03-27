<template>
  <h1>사용자 정의 이벤트(자식 -> 부모 이벤트 발신)</h1>
  <!-- 자식 컴포넌트로부터 전달받은 이벤트(nameChanged)가 
   감지 되었을 때 (이벤트 리스너, @nameChanged) 
   이벤트 핸들러 메소드(nameChangeHandler)가 호출
   -->
  <InputName @nameChanged="nameChangeHandler" />
  <br />
  <h3>App 데이터 : {{ parentName }}</h3>
</template>
<script>
import InputName from './Components/InputName.vue';
export default {
  name: 'App4',
  components: { InputName },
  data() {
    return {
      parentName: '',
    };
  },
  methods: {
    nameChangeHandler(e) {
      // e : 자식 컴포넌트에서 전달받은 이벤트 객체
      this.parentName = e.name;
      // Vue는 data에 있어야 화면에 반영된다
    },
  },
};
</script>
<style lang=""></style>
