<template>
  <!-- <li><input type="checkbox" v-model="checked" />옵션1</li> -->
  <!-- :checked = v-bind  -->
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
  <!-- <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li> -->
</template>
<script>
export default {
  name: 'CheckboxItem',
  // 부모 > 자식 props (동일 개수, 출력만 가능-v-bind로만 가능)
  // 부모 속성명 = 자식 ['속성명']
  props: ['name', 'checked', 'id'],
  // props: ['prop'],
};
</script>
