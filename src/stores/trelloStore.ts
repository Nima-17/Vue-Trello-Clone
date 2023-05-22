import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTrelloStore = defineStore('trello', () => {
  // STATE
  const requestToMakeList: Array<String> = reactive([])
  const requestToMakeCard: Array<String> = reactive([])
  // ACTIONS
  const addList = () => {
    requestToMakeList.push('text')
  }
  const addCard = () => {
    requestToMakeCard.push('text')
  }

  return {
    requestToMakeList,
    addList,
    requestToMakeCard,
    addCard
  }
})
