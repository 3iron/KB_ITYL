<template>
  <div class="contact-list mt-3">
    <table class="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>이메일</th>
          <th>Github ID</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <!-- 이벤트 방출 시 전달되는 데이터는 $event로 수신 가능 -->
        <ContactItem
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
          @delete-contact="$emit('delete-contact', $event)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue';
export default {
  components: {
    ContactItem,
  },
  // 부모 컴포넌트로부터 전달받은 데이터
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete-contact'],
};
</script>
