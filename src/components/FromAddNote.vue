<!-- <template>
  <List v-for="(mapInComponent, index) in requestToMakeCard" :key="index" :text="title" />
  <div
    v-show=""
    class="bg-gray-100 rounded-md p-2 w-64 inline-block box-border align-top whitespace-nowrap"
  >
    <div>
      <input
        class="border-2 font-semibold focus:shadow transition focus:shadow-sky-500 rounded-md border-sky-500 text-black outline-none px-2 py-custom-1 w-full"
        placeholder="Enter list title..."
        type="text"
        v-model="title"
      />
    </div>
    <div class="flex mt-2 w-full">
      <button @click.prevent="addCard" class="bg-blue-400 rounded-md px-3 py-1">Add list</button>
      <span class="mx-1"></span>
      <button @click="deleteForm">
        <Close />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Close from './icons/Close.vue'
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import List from './List.vue'

const title = ref('')

const store = useCounterStore()
// const { requestToMakeCard, hiddenFrom } = storeToRefs(store)
// const { deleteForm, addCard } = store
</script>

<style scoped>
.py-custom-1 {
  padding-bottom: 2px;
  padding-top: 2px;
}
</style> -->
