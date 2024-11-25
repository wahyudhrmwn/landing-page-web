<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ position: boolean }>()
</script>

<template>
  <div
    :class="[
      'content min-h-screen bg-blue-600',
      position ? 'pl-2 pt-2' : 'pt-16 pl-2',
    ]"
  >
    CONTENT
  </div>
</template>

<style scoped>
/* .first-content::after {
  content: '';
  display: block;
  width: 100%;
  height: calc(80px * 2);
  background: rgba(167, 243, 208, 1);
  border-radius: 80px;
  position: absolute;
  left: 0;
  bottom: calc(80px * -1);
} */
</style>
