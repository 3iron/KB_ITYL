<template>
  <div>
    X :
    <input
      type="text"
      v-model.number="x"
      style="background-color: yellow"
      class="form-control"
    />
    <br />
    Y :
    <input
      type="text"
      v-model.number="y"
      style="background-color: yellow"
      class="form-control"
    />
    <br />
    <button @click="calcAdd" class="btn btn-primary" style="width: 780px">
      계산
    </button>
    <div class="alert alert-warning">결과 : {{ result }}</div>
  </div>
  <hr style="color: red" />

  <div>
    X :
    <input
      type="text"
      v-model.number="state.x"
      style="background-color: yellow"
      class="form-control"
    />
    <br />
    Y :
    <input
      type="text"
      v-model.number="state.y"
      style="background-color: yellow"
      class="form-control"
    />
    <br />
    <button @click="calcAdd2" class="btn btn-primary" style="width: 780px">
      계산
    </button>
    <div class="alert alert-warning">결과 : {{ state.result }}</div>
  </div>
  <hr style="color: red" />
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'Calc',
  setup() {
    //1. ref
    const x = ref(0);
    const y = ref(0);
    // const imsi = 100; --> ref, reactive함수가 설정되어있지 않은 변수는 v-model, v-bind로 연결해서 쓸 수 없음.
    const result = ref(0);

    const calcAdd = () => {
      result.value = x.value + y.value;
    };

    //2. reactive
    const state = reactive({ x: 0, y: 0, result: 0 });

    const calcAdd2 = () => {
      state.result = state.x + state.y;
    };
    //리턴은 setup()맨끝에 위치해야함.
    return { x, y, result, calcAdd }; //{변수명, 변수명, 함수명}
  },
};
</script>

<style></style>
