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

<script setup>
import TodoListItem from './TodoListItem.vue';

defineProps({
  todoList: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits([
  'delete-todo',
  'toggle-completed',
  'toggle-favorite',
  'edit-todo',
]);
</script>
