<template>
  <div class="container mt-4">
    <div class="card card-body bg-light mb-3">
      <div class="title">::TodoList App</div>
    </div>

    <div class="card">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />

        <TodoList
          :todoList="sortedTodoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
          @toggle-favorite="toggleFavorite"
          @edit-todo="editTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';

const ts = new Date().getTime();

const state = reactive({
  todoList: [],
});

onMounted(() => {
  state.todoList.push(
    { id: ts, todo: '자전거 타기', completed: false, favorite: false },
    { id: ts + 1, todo: '딸과 공원 산책', completed: true, favorite: true },
    { id: ts + 2, todo: '일요일 애견 카페', completed: false, favorite: false },
    { id: ts + 3, todo: 'Vue 원고 집필', completed: false, favorite: false },
  );
});

const sortedTodoList = computed(() => {
  const favorites = state.todoList.filter((item) => item.favorite);
  const normals = state.todoList.filter((item) => !item.favorite);
  return [...favorites, ...normals];
});

const addTodo = (todo) => {
  state.todoList.push({
    id: Date.now(),
    todo,
    completed: false,
    favorite: false,
  });
};

const deleteTodo = (id) => {
  const index = state.todoList.findIndex((item) => item.id === id);
  if (index !== -1) {
    state.todoList.splice(index, 1);
  }
};

const toggleCompleted = (id) => {
  const target = state.todoList.find((item) => item.id === id);
  if (target) {
    target.completed = !target.completed;
  }
};

const toggleFavorite = (id) => {
  const target = state.todoList.find((item) => item.id === id);
  if (target) {
    target.favorite = !target.favorite;
  }
};

const editTodo = (id) => {
  const target = state.todoList.find((item) => item.id === id);
  if (!target) return;

  const newTodo = prompt('수정할 할 일을 입력하세요.', target.todo);

  if (newTodo === null) return;

  const trimmedTodo = newTodo.trim();

  if (trimmedTodo.length < 3) {
    alert('3글자 이상 입력해야 한다.');
    return;
  }

  target.todo = trimmedTodo;
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
}
</style>
