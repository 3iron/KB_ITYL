<template>
  <div>
    <h3>당신이 경험한 프론트 엔드 기술은? (첫번째 : Slot 사용(X))</h3>
    <span v-for="item in items" :key="item.id"> {{ item }} </span>
  </div>
</template>
<script>
export default {
  name: 'NoSlotTest',
  data() {
    return {
      items: [
        { id: 'V', checked: true, label: 'Vue' },
        { id: 'A', checked: false, label: 'Angular' },
        { id: 'R', checked: false, label: 'React' },
        { id: 'S', checked: false, label: 'Svelte' },
      ],
    };
  },
};
</script>
<style></style>
