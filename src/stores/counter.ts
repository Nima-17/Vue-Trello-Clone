import { reactive, computed, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const requestToMakeList: Array<String> = reactive([])
  const requestToMakeCard: Array<string> = reactive([])
  const hiddenFrom: Ref<boolean | null> = ref(true)

  function addNote() {
    requestToMakeList.push('List')
  }

  function addCard() {
    requestToMakeCard.push('Card')
    hiddenFrom.value = !hiddenFrom.value
  }

  function deleteForm() {
    requestToMakeList.splice(requestToMakeList.indexOf('type'), 1)
  }

  return { requestToMakeList, addNote, deleteForm, requestToMakeCard, addCard, hiddenFrom }
})
