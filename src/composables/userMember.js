import { ref } from 'vue'

export function useMembers() {
  const members = ref([])

  function addMember(member) {
    members.value.push({ ...member, active: false })
  }

  function toggleActive(index) {
    members.value[index].active = !members.value[index].active
  }

  function removeMember(index) {
    members.value.splice(index, 1)
  }

  return {
    members,
    addMember,
    toggleActive,
    removeMember
  }
}

