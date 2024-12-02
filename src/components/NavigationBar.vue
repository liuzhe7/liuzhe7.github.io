<script setup>
const props = defineProps({
  navItems: {
    require: true,
    type: Array,
  },
  logo: {
    require: true,
    type: String,
  },
})
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">
      <router-link to="/" class="brand-link">
        <img class="logo" :src="logo" alt="logo" />
      </router-link>
    </div>

    <div class="nav-links">
      <router-link
        v-for="item in props.navItems"
        :key="item.path"
        :to="item.path"
        class="nav-link"
        active-class="active"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  font-size: 1rem;
  font-weight: bold;
}

.logo {
  width: 30px;
  height: 30px;
}

.brand-link {
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-weight: 200;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #333;
  background-color: #f5f5f5;
}

.nav-link.active {
  color: #fff;
  background-color: #333;
}
</style>
