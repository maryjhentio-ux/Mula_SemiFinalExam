<template>
  <div class="members-page">

    <h1>Club Members</h1>

    <MemberForm
      @member-added="handleAddMember"
    />

    <MemberList
      :members="members"
      @activate="handleActivate"
      @delete="handleDelete"
    />

  </div>
</template>

<script setup>
import MemberForm from '../components/MemberForm.vue'
import MemberList from '../components/MemberList.vue'

import { useMembers } from '../composables/useMembers'

const {
  members,
  addMember,
  removeMember,
  activateMember
} = useMembers()

function handleAddMember(member) {
  addMember(member)
}

function handleActivate(id) {
  activateMember(id)
}

function handleDelete(id) {
  removeMember(id)
}
</script>

<style scoped>
.members-page {
  max-width: 900px;
  margin: auto;
}

h1 {
  margin-bottom: 25px;
}
</style>