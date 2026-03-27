<template lang="">
  <li><input type="checkbox" :checked="checked" />{{ id }} - {{ name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem', // 컴포넌트 이름
  // props: ['name', 'checked', 'id'],

  // 부모 -> 자식으로 넘어오는 데이터 규칙 정의
  // 데이터 타입 지정
  // 유효하지 않은 경우 콘솔에 경고
  props: {
    id: [Number, String], // 타입(숫자, 문자열)만 정의
    name: String, // 문자열
    checked: {
      // 설정(default)
      type: Boolean,
      default: false,
      required: false,
    },
  },
  // props로 전달 받은 idol 객체 : 부모로부터 전달받음
};
</script>
