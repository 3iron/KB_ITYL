<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <button class="btn btn-primary" type="button" @click="addTodoHandler">
          <!-- <button class="btn btn-primary" type=" button" @click="$emit('addTodo', todo)"> -->
          추가
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addTodoHandler() {
      // 할일이 3글자 이상인 경우에만
      if (this.todo.length >= 3) {
        // 부모 컴포넌트에 이벤트 전달(방출)
        this.$emit('addTodo', this.todo);
        // 초기화
        this.todo('');
        return; // 메소드 종료
      }

      alert('할 일은 3글자 이상 입력해주세요.');
    },
    // addTodoHandler() {
    //   const trimmedTodo = this.todo.trim();

    //   if (trimmedTodo.length >= 3) {
    //     this.$emit('add-todo', trimmedTodo);
    //     this.todo = '';
    //   } else {
    //     alert('글자수를 3글자 이상으로 맞춰주세요.');
    //   }
    // },

    emits: ['addTodo'],
    // 이벤트 방출 검사
    // -> 부모 컴포넌트가 전달되는 이벤트가 addTodo 가 맞는지 검사
  },
};
</script>
