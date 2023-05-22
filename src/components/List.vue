<template>
  <div class="inline-block h-fit bg-black rounded-lg whitespace-nowrap w-72">
    <div class="px-3 py-2 transition-all" v-for="card in cards" :key="card.id">
      <input
        v-model="card.content"
        placeholder="Enter list title..."
        class="bg-transparent w-full rounded-sm outline-none transition-all border-transparent text-base px-2 font-semibold"
        type="text"
        @change="updateCardContent(listId, card.id, $event as InputEvent)"
      />
    </div>

    <!-- <div class="px-3 py-1">
      <textarea
        placeholder="Enter a title for this card..."
        class="text-black outline-none rounded-lg max-h-20 px-2 py-1"
        cols="29"
      ></textarea>
    </div> -->

    <div class="flex transition-all items-center px-3 py-2">
      <button @click="addCard(listId)" class="button px-3 rounded-md">
        <span class="text-xl">+</span>
        Add a card
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, useTrelloStore } from '@/stores/trelloStore'

const { addCard, updateCardContent } = useTrelloStore()

defineProps<{ cards: Card[]; listId: number }>()
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
