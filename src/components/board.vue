<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import List from './List.vue'
import draggable from 'vuedraggable'
import FromAddNote from './FromAddNote.vue'

const title = ref()

const store = useCounterStore()
const { requestToMakeList, requestToMakeCard, requestToMakeTask } = storeToRefs(store)
const { addNote, addCard } = store
</script>
<template>
  <!-- board -->
  <div style="" class="bottom-0 left-0 right-0 top-0 absolute flex justify-center">
    <div class="inline-flex h-96 box-border px-3 scroll-m-2 align-top w-full">
      <div class="flex h-fit gap-3">
        <List v-for="(element, index) in requestToMakeList" :key="index"></List>
        <!-- <FromAddNote v-for="(mapInComponent, index) in requestToMakeList" :key="index" /> -->
      </div>
      <span class="mx-2"></span>
      <div class="transition-all">
        <button
          @click="addNote"
          class="h-fit whitespace-nowrap bg-indigo-800 text-white py-1 hover:shadow-md hover:shadow-indigo-700 transition px-3 rounded"
        >
          + Add another list
        </button>
      </div>
    </div>
  </div>
</template>
