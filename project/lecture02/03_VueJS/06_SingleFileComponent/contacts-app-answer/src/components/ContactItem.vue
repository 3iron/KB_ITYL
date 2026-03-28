<template>
  <tr>
    <td>{{ contact.name }}</td>
    <td>{{ contact.gender }}</td>
    <td>{{ contact.age }}</td>
    <td>{{ contact.email }}</td>
    <td>{{ contact.github }}</td>
    <td>
      <button
        class="btn btn-danger btn-sm"
        @click="deleteContactHandler(contact.id)"
      >
        삭제
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    contact: { type: Object, required: true },
  },
  methods: {
    deleteContactHandler(id) {
      this.$emit('delete-contact', id);
    },
  },
};
</script>
