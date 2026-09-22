<template>
  <header class="navbar">
    <h2>Club Membership Manager</h2>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/members">Members</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
}

.navbar {
  background: #2c3e50;
  color: white;
  padding: 20px;
}

.navbar h2 {
  margin: 0 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 30px;
}
</style>
