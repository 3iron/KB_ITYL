<template>
  <ul class="list-group">
    <TodoListItem
      v-for="item in sortedTodoList"
      :key="item.id"
      :todoItem="item"
      @delete-todo="emit('delete-todo', $event)"
      @toggle-completed="emit('toggle-completed', $event)"
      @toggle-favorite="emit('toggle-favorite', $event)"
    />
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todoList: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits([
  'delete-todo',
  'toggle-completed',
  'toggle-favorite',
]);

const sortedTodoList = computed(() => {
  return [...props.todoList].sort(
    (a, b) => Number(b.favorite) - Number(a.favorite),
  );
});
</script>
