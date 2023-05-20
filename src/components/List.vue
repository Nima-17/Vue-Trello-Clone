<template>
  <!-- Top List -->
  <div style="background: #e5e7eb" class="py-2 px-5 rounded-lg flex-col flex">
    <div class="my-1">
      <input
        type="text"
        class="bg-transparent focus:bg-white text-black font-semibold p-1 outline-none rounded"
        placeholder="Enter list title..."
      />
    </div>
    <div>
      <Task v-for="(element, index) in requestToMakeTask" :key="index" />
    </div>
    <!-- Bottom List -->
    <div class="text-gray-500 font-semibold my-1">
      <button @click.passive="addTask">+ Add a card</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Task from './Task.vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { addCard, addTask } = store
const { requestToMakeTask } = storeToRefs(store)
</script>
