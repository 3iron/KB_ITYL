<!-- TodoList.vue : 할일 목록 화면 -->
<template>
  <ul class="list-group">
    <TodoListItem
      v-for="item in todoList"
      :key="item.id"
      :todoItem="item"
      @delete-todo="emit('delete-todo', $event)"
      @toggle-completed="emit('toggle-completed', $event)"
      @toggle-favorite="emit('toggle-favorite', $event)"
      @edit-todo="emit('edit-todo', $event)"
    />
  </ul>
</template>
<!-- Composition API 방식 -->
<!-- script setup : setup()을 생략하고 쓰는 문법 설탕(Syntax Sugar) -->
<script setup>
// 부모 : App.vue
// 자식 : TodoListItem
import TodoListItem from './TodoListItem.vue';

// props : 데이터 (부모에게서 받는다)
defineProps({
  todoList: {
    type: Array,
    required: true,
  },
});
// emit : 이벤트 (부모에게 전달)
const emit = defineEmits([
  'delete-todo',
  'toggle-completed',
  'toggle-favorite',
  'edit-todo',
]);
</script>
