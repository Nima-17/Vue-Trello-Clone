<template>
  <!-- Top List -->
  <div style="background: #e5e7eb" class="py-2 px-5 rounded-lg">
    <div class="my-1">
      <input
        type="text"
        class="bg-transparent focus:bg-white text-black font-semibold p-1 outline-none rounded"
        :value="text"
      />
    </div>
    <slot></slot>
    <!-- Bottom List -->
    <div class="text-gray-500 font-semibold my-1">
      <button>+ Add a card</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref()
defineProps(['text'])
</script>
