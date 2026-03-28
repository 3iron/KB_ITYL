<template>
  <tr>
    <td>{{ contactItem.name }}</td>
    <td>{{ contactItem.gender }}</td>
    <td>{{ contactItem.age }}</td>
    <td>{{ contactItem.email }}</td>
    <td>{{ contactItem.github }}</td>
    <td>
      <button
        class="btn btn-danger btn-sm"
        @click="$emit('delete-contact', contactItem.id)"
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
    contactItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
