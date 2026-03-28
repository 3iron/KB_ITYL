<template>
  <div class="row mb-3">
    <div class="col">
      <!-- 두번씩 handler가 작동 (엔터, 버튼클릭)
            -> submit 사용 수정  -->
      <form class="input-group" @submit.prevent="addTodoHandler">
        <input
          type="text"
          id="msg"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
        />
        <button type="submit" class="btn btn-primary">추가</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);
const todo = ref('');

const addTodoHandler = () => {
  console.log('호출됨:', todo.value);

  if (todo.value.length < 3) {
    alert('3글자 이상만 추가됩니다.');
    return;
  }

  emit('add-todo', todo.value);
  todo.value = '';
};
</script>
