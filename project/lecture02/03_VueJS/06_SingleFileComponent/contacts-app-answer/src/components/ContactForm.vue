<template>
  <div class="input-form card card-body mt-3">
    <div class="row g-3">
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          v-model.trim="newContact.name"
          placeholder="이름"
        />
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="newContact.gender">
          <option value="">성별</option>
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </div>
      <div class="col-md-2">
        <input
          type="number"
          class="form-control"
          v-model.number="newContact.age"
          placeholder="나이"
        />
      </div>
      <div class="col-md-3">
        <input
          type="email"
          class="form-control"
          v-model.trim="newContact.email"
          placeholder="이메일"
        />
      </div>
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          v-model.trim="newContact.github"
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

  data() {
    return {
      newContact: {
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
      },
    };
  },

  // 이벤트 방출 검사(부모 컴포넌트로 전달되는 이벤트가 addContact가 맞는지 검사)
  emits: ['add-contact'],

  methods: {
    addContactHandler() {
      if (!this.newContact.name) {
        alert('이름을 입력하세요');
        return;
      }

      if (!this.newContact.email) {
        alert('이메일을 입력하세요');
        return;
      }

      this.$emit('add-contact', this.newContact);
      this.newContact = {
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
      };
    },
  },
};
</script>
