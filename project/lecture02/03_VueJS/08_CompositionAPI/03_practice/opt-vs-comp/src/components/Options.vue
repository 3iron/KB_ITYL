<template>
  <div>
    <h3>Options API 적용</h3>
    <div>
      이름 :
      <input
        type="text"
        placeholder="입력 시 대문자로 변환"
        :value="name"
        @input="changeName($event.target.value)"
      />
      <!-- $event.target : 이벤트가 발생한 요소 -->
      <hr />
      <h5>계산하기</h5>
      <div>
        x : <input type="text" v-model.number="x" />
        <br />
        y : <input type="text" v-model.number="y" />
        <br />
        <button @click="calculateSum(x, y, 1)">X + Y</button>
        <p>X + Y = {{ sum }}</p>
      </div>
      <div>
        a : <input type="text" v-model.number="a" />
        <br />
        b : <input type="text" v-model.number="b" />
        <br />
        <button @click="calculateSum(a, b, 2)">A + B</button>
        <p>A + B = {{ sum2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Options',
  data() {
    return {
      name: '',
      x: 0,
      y: 0,
      a: 0,
      b: 0,
      sum: 0,
      sum2: 0,
    };
  },
  methods: {
    changeName(inputName) {
      // console.log(inputName);
      this.name = inputName.toUpperCase();
    },
    // 계산용 메소드
    calculateSum(num1, num2, type) {
      if (type === 1) {
        // x + y 버튼 클릭 시
        this.sum = num1 + num2;
      } else {
        // a + b 버튼 클릭 시
        this.sum2 = num1 + num2;
      }
    },
  },
};
</script>
<style></style>
