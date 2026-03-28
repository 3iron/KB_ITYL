<template>
  <div class="container mt-4">
    <div class="card card-body bg-light mb-3">
      <div class="title">::TodoList App (setup)</div>
    </div>
    <!-- App.vue의 역할
        1. 할 일 데이터
        2. 기능 (추가, 삭제, 완료 + 즐겨찾기, 수정)
    -->
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
// reactive : 객체, 배열을 반응형 데이터로 - todoList
// onMounted : 컴포넌트가 화면에 붙은 후 바로 실행 (초기 데이터)
// computed : 기존 데이터 바탕으로 계산된 값 - sortedTodoList (즐겨찾기 우선 정렬)
import { reactive, onMounted, computed } from 'vue';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';

const ts = new Date().getTime();
// state : 상태 데이터 (반응형 객체)
const state = reactive({
  todoList: [],
});

// 할일 데이터
// onMounted() : 초기 데이터 넣기 (컴포넌트 마운트 후 데이터 넣기)
onMounted(() => {
  state.todoList.push(
    { id: ts, todo: '자전거 타기', completed: false, favorite: false },
    { id: ts + 1, todo: '딸과 공원 산책', completed: true, favorite: true },
    { id: ts + 2, todo: '일요일 애견 카페', completed: false, favorite: false },
    { id: ts + 3, todo: 'Vue 원고 집필', completed: false, favorite: false },
  );
});

// sortedTodoList : 즐겨찾기 우선 정렬 (computed)
const sortedTodoList = computed(() => {
  // favorites : favorite === true
  const favorites = state.todoList.filter((item) => item.favorite);
  // normals : favorite === false
  const normals = state.todoList.filter((item) => !item.favorite);
  // ... : 배열 안의 요소를 하나씩 펼쳐서 넣는다
  return [...favorites, ...normals];
});

// addTodo : 할일 추가
const addTodo = (todo) => {
  state.todoList.push({
    id: Date.now(),
    todo,
    completed: false,
    favorite: false,
  });
};

// deleteTodo : 할일 삭제
const deleteTodo = (id) => {
  const index = state.todoList.findIndex((item) => item.id === id);
  if (index !== -1) {
    state.todoList.splice(index, 1);
  }
};

// toggleCompleted : 할일 완료
const toggleCompleted = (id) => {
  const target = state.todoList.find((item) => item.id === id);
  if (target) {
    target.completed = !target.completed;
  }
};

// toggleFavorite : 할일 즐겨찾기
const toggleFavorite = (id) => {
  const target = state.todoList.find((item) => item.id === id);
  if (target) {
    target.favorite = !target.favorite;
  }
};

// editTodo : 할일 수정
const editTodo = (id) => {
  const target = state.todoList.find((item) => item.id === id);
  if (!target) return;

  const newTodo = prompt('수정할 할 일을 입력하세요.', target.todo);

  if (newTodo === null) return;

  const trimmedTodo = newTodo.trim();

  if (trimmedTodo.length < 3) {
    alert('3글자 이상 입력해야 추가됩니다.');
    return;
  }

  target.todo = trimmedTodo;
};
</script>

<!-- 즐겨찾기 우선순위 정렬 -->
<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
}
</style>
