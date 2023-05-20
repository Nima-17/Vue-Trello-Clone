import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const requestToMakeList: Array<String> = reactive([])
  const requestToMakeCard: Array<String> = reactive([])
  let requestToMakeTask: Array<String> = reactive([])
  const hiddenFrom: Ref<boolean | null> = ref(false)

  function addNote() {
    requestToMakeList.push('List')
    hiddenFrom.value = true
  }

  function addCard() {
    requestToMakeCard.push('tsk')
  }

  function addTask() {
    const items = ['test']
    requestToMakeTask.push(...items)
  }

  function deleteForm() {
    requestToMakeList.splice(requestToMakeList.indexOf('List'), 1)
  }

  return {
    requestToMakeList,
    addNote,
    deleteForm,
    requestToMakeCard,
    addCard,
    hiddenFrom,
    requestToMakeTask,
    addTask
  }
})
