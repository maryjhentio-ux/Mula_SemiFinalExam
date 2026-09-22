<template>
  <div class="page">
    <h1>Welcome to Club Membership Manager</h1>

    <p>
      Manage your club members easily by adding, viewing,
      activating, and deleting membership records.
    </p>

    <RouterLink class="button" to="/members">
      View Members
    </RouterLink>
  </div>
</template>

<style scoped>
.page {
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
}

.button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>