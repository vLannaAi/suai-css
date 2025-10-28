<template>
  <div class="suai-page">
    <!-- Header -->
    <header>
      <!-- Logo -->
      <NuxtLink to="/">SUAI</NuxtLink>

      <!-- Navigation -->
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
        </ul>
      </nav>

      <!-- Actions -->
      <div>
        <label class="toggle-theme">
          <input type="checkbox" @change="toggleTheme" />
        </label>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer>
      <p>© 2025 SUAI Framework. All rights reserved.</p>
      <p class="tag">
        <span class="i-heroicons-shield-check-20-solid"></span>
        Built with Suai
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { toggleTheme, isDark, initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>
