<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{ 'list-group-item-success': todoItem.completed }"
    @click="emit('toggle-completed', todoItem.id)"
  >
    <div class="d-flex align-items-center gap-2">
      <span class="pointer" @click.stop="emit('toggle-favorite', todoItem.id)">
        <i
          :class="
            todoItem.favorite
              ? 'bi bi-star-fill text-warning'
              : 'bi bi-star text-secondary'
          "
        ></i>
      </span>

      <span :class="{ 'todo-done': todoItem.completed }">
        {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
      </span>
    </div>

    <div class="d-flex align-items-center gap-2">
      <span
        class="badge bg-info text-dark pointer"
        @click.stop="emit('edit-todo', todoItem.id)"
      >
        수정
      </span>

      <span
        class="badge bg-secondary pointer"
        @click.stop="emit('delete-todo', todoItem.id)"
      >
        삭제
      </span>
    </div>
  </li>
</template>

<script setup>
defineProps({
  todoItem: {
    type: Object,
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

<style scoped>
.pointer {
  cursor: pointer;
}

.todo-done {
  text-decoration: line-through;
  color: gray;
}
</style>
