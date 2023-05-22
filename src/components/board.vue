<template>
  <section
    class="flex overflow-x-auto overflow-y-hidden absolute select-none whitespace-nowrap px-2"
  >
    <div>
      <ListWrapper>
        <List v-for="(List, index) of requestToMakeList" :key="index" />
      </ListWrapper>
    </div>
    <span class="mx-2"></span>
    <div>
      <button @click="addList" class="transition-all bg-button-glasses px-5 py-1">
        <span class="text-xl">+</span>
        Add another list
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import ListWrapper from './ListWrapper.vue'
import List from './List.vue'
import { useTrelloStore } from '@/stores/trelloStore'

const trelloStore = useTrelloStore()
const { requestToMakeList, addList } = trelloStore
</script>
<style scoped>
.bg-button-glasses {
  /* From https://css.glass */
  background: rgba(176, 176, 176, 0.56);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
  border: 1px solid rgba(176, 176, 176, 0.55);
}

.bg-button-glasses:hover {
  /* From https://css.glass */
  background: rgba(129, 129, 129, 0.56);
  border: 1px solid rgba(129, 129, 129, 0.56);
}
</style>
