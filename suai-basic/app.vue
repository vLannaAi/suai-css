<template>
  <div class="suai-page">
    <!-- Sidebar toggle checkbox (mobile) -->
    <input type="checkbox" id="sidebar-toggle" class="hidden" />

    <!-- Header -->
    <header>
      <!-- Logo -->
      <NuxtLink to="/" class="font-bold text-xl">SUAI Showcase</NuxtLink>

      <!-- Mobile hamburger menu -->
      <label for="sidebar-toggle" class="lg:hidden ml-auto">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <!-- Theme and Mode Toggles -->
      <div class="flex items-center gap-4">
        <!-- Theme Toggle (Thai/Sintony) -->
        <select
          v-model="currentTheme"
          @change="setTheme"
          class="px-3 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        >
          <option value="thai">Thai</option>
          <option value="sintony">Sintony</option>
        </select>

        <!-- Dark/Light Mode Toggle -->
        <label class="toggle-theme">
          <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode" />
        </label>
      </div>
    </header>

    <!-- Sidebar overlay (mobile) - only below header -->
    <div class="lg:hidden fixed top-[4.5rem] inset-x-0 bottom-0 bg-black bg-opacity-50 z-30" :class="{ hidden: !sidebarOpen }"></div>

    <!-- Sidebar Navigation -->
    <aside id="sidebar">
      <nav>
        <h3>Base Layer</h3>
        <ul>
          <li><a href="#base" data-layer="base">h1-h6</a></li>
          <li><a href="#base" data-layer="base">p</a></li>
          <li><a href="#base" data-layer="base">a</a></li>
          <li><a href="#base" data-layer="base">strong, em</a></li>
          <li><a href="#base" data-layer="base">code</a></li>
          <li><a href="#base" data-layer="base">blockquote</a></li>
          <li><a href="#base" data-layer="base">article</a></li>
          <li><a href="#base" data-layer="base">hr</a></li>
        </ul>

        <h3>Layout Layer</h3>
        <ul>
          <li><a href="#layout" data-layer="layout">section</a></li>
          <li><a href="/layout-demo" data-layer="layout">Page Mockup</a></li>
        </ul>

        <h3>Modules</h3>
        <ul>
          <li><a href="#modules" data-layer="modules">figure, figcaption</a></li>
          <li><a href="#modules" data-layer="modules">ul, ol</a></li>
          <li><a href="#modules" data-layer="modules">dl</a></li>
          <li><a href="#modules" data-layer="modules">pre, code</a></li>
        </ul>

        <h3>Architecture</h3>
        <ul>
          <li><a href="#architecture" data-layer="state">SMACSS</a></li>
        </ul>
      </nav>
    </aside>

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
import { ref, onMounted, nextTick } from 'vue';

const currentTheme = ref<'thai' | 'sintony'>('thai');
const isDarkMode = ref(false);
const sidebarOpen = ref(false);

const setTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('suai-theme', currentTheme.value);
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  const mode = isDarkMode.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-mode', mode);
  localStorage.setItem('suai-mode', mode);
};

const scrollTo = (sectionId: string) => {
  sidebarOpen.value = false;
  // Use nextTick to ensure DOM is updated
  nextTick(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

onMounted(() => {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('suai-theme') as 'thai' | 'sintony' | null;
  if (savedTheme) {
    currentTheme.value = savedTheme;
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value);

  // Load saved mode preference
  const savedMode = localStorage.getItem('suai-mode') || 'light';
  isDarkMode.value = savedMode === 'dark';
  document.documentElement.setAttribute('data-mode', savedMode);

  // Watch for sidebar toggle
  const sidebarToggle = document.getElementById('sidebar-toggle') as HTMLInputElement;
  if (sidebarToggle) {
    sidebarToggle.addEventListener('change', () => {
      sidebarOpen.value = sidebarToggle.checked;
    });
  }
});
</script>
