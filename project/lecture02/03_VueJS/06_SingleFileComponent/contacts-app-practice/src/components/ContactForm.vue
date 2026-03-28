<template>
  <div class="input-form card card-body mt-3">
    <div class="row g-3">
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          v-model="name"
          placeholder="이름"
        />
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="gender" placeholder="성별">
          <option value="">성별</option>
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </div>
      <div class="col-md-2">
        <input
          type="number"
          class="form-control"
          v-model="age"
          placeholder="나이"
        />
      </div>
      <div class="col-md-3">
        <input
          type="email"
          class="form-control"
          v-model="email"
          placeholder="이메일"
        />
      </div>
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          v-model="github"
          placeholder="github ID"
        />
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100" @click="addContactHandler">
          추가
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  emits: ['addContact'],

  data() {
    return {
      name: '',
      gender: '',
      age: '',
      email: '',
      github: '',
    };
  },

  methods: {
    // 이름이 입력 안된 경우 '이름을 입력하세요' 알림창
    // 이메일이 입력 안된 경우 '이메일을 입력하세요' 알림창
    // 둘 다 입력이 된 경우 연락처 추가
    addContactHandler() {
      if (!this.name) {
        alert('이름을 입력하세요');
        return;
      }
      if (!this.email) {
        alert('이메일을 입력하세요');
        return;
      }

      // 여러개 값 전송
      // this.$emit('emit', {k:v, k:v, ...})
      this.$emit('addContact', {
        name: this.name,
        gender: this.gender,
        age: this.age,
        email: this.email,
        github: this.github,
      });
      // 입력값 초기화
      this.name = '';
      this.gender = '';
      this.age = '';
      this.email = '';
      this.github = '';
    },
  },
};
</script>
