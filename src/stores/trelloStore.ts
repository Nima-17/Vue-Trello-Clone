import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTrelloStore = defineStore('trello', () => {
  /// State
  const requestToMakeList: Array<string> = reactive([])
  /// Getters
  /// Actions
  const addList = () => {
    requestToMakeList.push('text')
  }

  return {
    requestToMakeList, addList
  }
})
