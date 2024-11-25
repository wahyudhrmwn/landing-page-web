<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['toggle'])

const menuItems = [
  { name: 'Home', icon: 'home' },
  { name: 'Portfolio', icon: 'briefcase' },
  { name: 'Watchlist', icon: 'star' },
  { name: 'Explore', icon: 'search' },
  { name: 'Analytics', icon: 'chart-line' },
  { name: 'Reports', icon: 'file-alt' },
  { name: 'Education', icon: 'graduation-cap' },
  { name: 'Transactions', icon: 'exchange-alt' },
]
</script>

<template>
  <div
    :class="[
      'h-screen bg-white shadow-lg transition-all duration-300 w-72 justify-items-start pt-2 px-2',
    ]"
  >
    <!-- Header Sidebar -->
    <div class="flex items-center justify-between w-full">
      <span class="text-xl font-bold">New Balance</span>
      <button @click="$emit('toggle')">
        <div
          class="bg-blue-500 w-12 h-12 items-center content-center hover:bg-blue-950 rounded-full"
        >
          <font-awesome-icon :icon="['fas', 'angle-left']" size="1x" />
        </div>
      </button>
    </div>

    <!-- Menu Sidebar -->
    <ul :class="['mt-4 space-y-2 w-full']">
      <li
        v-for="item in menuItems"
        :key="item.name"
        :class="[
          'flex items-center text-center space-x-4 py-2 rounded-lg hover:bg-gray-100',
        ]"
      >
        <div :class="['item-icon text-center w-12']">
          <font-awesome-icon :icon="['fas', item.icon]" class="text-xl" />
        </div>
        <div class="item-name">
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
