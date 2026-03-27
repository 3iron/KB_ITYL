<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
        />
        <button class="btn btn-primary" type="button">추가</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputTodo',
};
</script>
