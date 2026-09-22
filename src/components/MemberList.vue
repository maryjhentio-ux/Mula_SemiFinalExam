<template>
  <div>
    <h2>Member List</h2>

    <p v-if="members.length === 0">
      No members registered yet.
    </p>

    <MemberItem
      v-for="member in members"
      :key="member.id"
      :member="member"
      @activate="$emit('activate', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<script setup>
import MemberItem from './MemberItem.vue'

defineProps({
  members: {
    type: Array,
    required: true
  }
})

defineEmits(['activate', 'delete'])
</script>