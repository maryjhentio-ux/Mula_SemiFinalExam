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
