<script setup lang="ts">
import { ref } from 'vue'
import NavbarView from './components/NavbarView.vue'
import FooterView from './components/FooterView.vue'
import SidebarView from './components/SidebarView.vue'

const isOpen = ref(true)

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar z-0 fixed">
      <SidebarView :isOpen="isOpen" @toggle="toggleSidebar" />
    </aside>

    <!-- Toggle Button in Parent -->
    <button
      v-if="!isOpen"
      @click="toggleSidebar"
      class="fixed top-5 left-5 bg-blue-500 w-12 h-12 hover:bg-blue-950 rounded-full"
    >
      <font-awesome-icon :icon="['fas', 'angle-right']" size="1x" />
    </button>

    <div
      class="main-content relative z-10"
      :class="{ 'ml-72': isOpen, 'ml-0': !isOpen }"
    >
      <!-- Header -->
      <header>
        <nav>
          <NavbarView />
        </nav>
      </header>

      <!-- Main Content -->
      <main>
        <div class="wrapper-content w-full mt-20 bg-yellow-100">
          <button
            v-if="!isOpen"
            @click="toggleSidebar"
            class="absolute top-2 left-2"
          >
            <div
              class="bg-blue-500 w-12 h-12 items-center content-center hover:bg-blue-950 rounded-full"
            >
              <font-awesome-icon :icon="['fas', 'angle-right']" size="1x" />
            </div>
          </button>
          <RouterView :position="isOpen" :class="[isOpen ? '' : '']" />
        </div>
      </main>

      <!-- Footer -->
      <footer>
        <div class="w-full bg-amber-300 h-16 fixed bottom-0">
          <FooterView />
        </div>
      </footer>
    </div>
  </div>
</template>
