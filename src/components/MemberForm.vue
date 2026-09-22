<template>
  <div class="card">
    <h2>Add Member</h2>

    <form @submit.prevent="submitForm">

      <div class="form-group">
        <label>Member Name</label>

        <input
          v-model="form.name"
          type="text"
          placeholder="Enter member name"
        />
      </div>

      <div class="form-group">
        <label>Email</label>

        <input
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        />
      </div>

      <div class="form-group">
        <label>Club Role</label>

        <select v-model="form.role">
          <option value="">Select Role</option>
          <option value="Member">Member</option>
          <option value="Officer">Officer</option>
          <option value="Treasurer">Treasurer</option>
          <option value="President">President</option>
        </select>
      </div>

      <div class="form-group">
        <label>Join Date</label>

        <input
          v-model="form.joinDate"
          type="date"
        />
      </div>

      <p v-if="error" class="error">
        {{ error }}
      </p>

      <button type="submit">
        Add Member
      </button>

    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['member-added'])

const form = reactive({
  name: '',
  email: '',
  role: '',
  joinDate: ''
})

const error = ref('')

function submitForm() {
  error.value = ''

  if (
    !form.name ||
    !form.email ||
    !form.role ||
    !form.joinDate
  ) {
    error.value = 'Please complete all fields.'
    return
  }

  const newMember = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    role: form.role,
    joinDate: form.joinDate,
    status: 'Inactive'
  }

  emit('member-added', newMember)

  form.name = ''
  form.email = ''
  form.role = ''
  form.joinDate = ''
}
</script>

<style scoped>
.card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error {
  color: #e74c3c;
}
</style>