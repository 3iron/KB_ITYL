<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <div class="container text-center">
          <div class="row">
            <div class="col">전체 todo 개수 : {{ todoList.length }}</div>
            <!-- (todoList.filter((todo) => todo.completed).length; -->
            <div class="col">완료 todo 개수 : {{ completedCount }}</div>
            <div class="col">
              미완료 todo 개수 : {{ todoList.length - completedCount }}
            </div>
          </div>
        </div>

        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="$emit('delete-todo', $event)"
          @checkbox-completed="$emit('toggle-completed', $event)"
        />

        <!-- $event : 이벤트 방출 시 전달되는 데이터 수신 가능 -->
      </ul>
    </div>
  </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  // props : 부모 컴포넌트에서 전달된 데이터
  props: { todoList: { type: Array, required: true } },
  computed: {
    completedCount() {
      return this.todoList.filter((todo) => todo.completed).length;
    },
  },
};
</script>
