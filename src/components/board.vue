<script setup lang="ts">
import FromAddNote from './FromAddNote.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useCounterStore()
const { requestToMakeList } = storeToRefs(store)
const { addNote } = store
</script>
<template>
  <!-- board -->
  <div
    style="height: 700px"
    class="bottom-0 left-0 right-0 top-0 p-3 overflow-x-auto overflow-y-hidden absolute flex justify-center"
  >
    <div class="inline-flex justify-center box-border px-3 scroll-m-2 align-top w-full">
      <div class="flex h-fit gap-3">
        <FromAddNote v-for="(mapInComponent, index) of requestToMakeList" :key="index" />
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
