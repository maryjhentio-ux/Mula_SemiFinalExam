<template>
  <div class="member-card">

    <div>
      <h3>{{ member.name }}</h3>

      <p>
        <strong>Email:</strong>
        {{ member.email }}
      </p>

      <p>
        <strong>Role:</strong>
        {{ member.role }}
      </p>

      <p>
        <strong>Join Date:</strong>
        {{ formatDate(member.joinDate) }}
      </p>

      <p>
        <strong>Status:</strong>
        <span :class="member.status.toLowerCase()">
          {{ member.status }}
        </span>
      </p>
    </div>

    <div class="actions">
      <button
        v-if="member.status !== 'Active'"
        class="activate"
        @click="$emit('activate', member.id)"
      >
        Mark as Active
      </button>

      <button
        class="delete"
        @click="$emit('delete', member.id)"
      >
        Delete
      </button>
    </div>

  </div>
</template>

<script setup>
import { formatDate } from '../composables/useFormatDate'

defineProps({
  member: {
    type: Object,
    required: true
  }
})

defineEmits(['activate', 'delete'])
</script>

<style scoped>
.member-card {
  background: white;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.member-card h3 {
  margin-top: 0;
}

.active {
  color: #27ae60;
  font-weight: bold;
}

.inactive {
  color: #e67e22;
  font-weight: bold;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
}

.activate {
  background: #2980b9;
}

.delete {
  background: #c0392b;
}
</style>