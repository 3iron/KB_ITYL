<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <!-- 목록 컴포넌트
         props를 이용해서 todoList를 자식 컴포넌트로 전달 -->
        <!-- 부모 > 자식 : todoList로 전달 -->
        <TodoList
          :todoList="todoList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
        <!-- @delete-todo : 자식으로부터 delete-todo라는 이벤트가 감지되면
          "deleteTodo" : 해당 메소드를 호출한다. 
        -->

        <!-- deleteTodo == deleteTodo($event)
          -> 미작성 시 Vue가 내부적으로 추가 
        -->
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

let ts = new Date().getTime();
export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data() {
    return {
      todoList: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    // 체크 박스 선택
    toggleCompleted(id) {
      // 배열.findIndex((item) => 조건) : 조건이 true가 되는 첫번째 요소의 index 반환)

      let index = this.todoList.findIndex((item) => id === item.id);
      // console.log(index);
      // == (동등 비교) : 값만 비교
      // == (동일 비교) : 값 + 타입까지 비교

      // ! (부정 연산자) : true->false, false->true로 바꿔주는 연산자
      // 기존 completed 값을 반대로 변경
      this.todoList[index].completed = !this.todoList[index].completed;

      // let index = this.todoList.findIndex((item) => id === item.id);
      // this.todoList[index].completed = !this.todoList[index].completed;
    },
    // 할일 삭제
    deleteTodo(id) {
      let index = this.todoList.findIndex((ele) => id === item.id);

      // splice(시작위치, 삭제개수)
      this.todoList.splice(index, 1);

      // 해당 id를 가진 항목을 리스트에서 제거
      // this.todoList = this.todoList.filter((item) => item.id !== id);
    },

    /**
     * 할일 추가
     * @param todo InputTodo에서 전달된 todo
     */

    addTodo(todo) {
      this.todoList.push({
        id: Date.now(),
        todo: todo,
        completed: false,
      });
    },

    // addTodo(todo) {
    //   if (todo.length >= 3) {
    //     this.todoList.push({
    //       id: new Date().getTime(),
    //       todo,
    //       completed: false,
    //     });
    //   }
    // },
  },
};
</script>
