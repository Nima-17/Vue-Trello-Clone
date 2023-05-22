<template>
  <div class="inline-block h-fit bg-black rounded-lg whitespace-nowrap w-72">
    <div class="px-3 py-2 transition-all">
      <input
        placeholder="Enter list title..."
        class="bg-transparent w-full rounded-sm outline-none transition-all border-transparent text-base px-2 font-semibold"
        type="text"
      />
    </div>
    <div class="">
      <slot></slot>
    </div>
    <div class="flex transition-all items-center px-3 py-2">
      <button @click="addCard" class="button px-3 rounded-md">
        <span class="text-xl">+</span>
        Add a card
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTrelloStore } from '@/stores/trelloStore'
const trelloStore = useTrelloStore()
const { addCard } = trelloStore
</script>
<style>
input {
  color: white;
  cursor: pointer;
  border: 2px solid transparent;
}

input:focus {
  border: 2px solid white;
}

.button:hover {
  background: rgba(129, 129, 129, 0.56);
}
</style>
