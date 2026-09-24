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


