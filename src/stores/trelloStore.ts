import { computed, reactive, ref } from 'vue'

type List = {
  id: number
  cards: Card[]
}

export type member = {
  id: string
  fullName: string
}

export type ToDo = {
  id: string
  isChecked: boolean
}

export type Card = {
  id: number
  content: string
  toDoList?: ToDo
  members?: member[]
  showDialog?: boolean
}

const lists = ref([] as List[])

export const useTrelloStore = () => {
  const addList = () => {
    lists.value.push({ id: new Date().getTime(), cards: [] })
    console.log(lists.value)
  }

  const addCard = (listId: number) => {
    const list = lists.value.find((l) => l.id === listId)
    if (!list) return
    list.cards.push({ id: new Date().getTime(), content: '' })
  }

  const updateCardContent = (listId: number, cardId: number, content: InputEvent) => {
    const list = lists.value.find((l) => l.id === listId)
    if (!list) return
    const card = list.cards.find((c) => c.id === cardId)
    if (card) card.content = (content.target as HTMLInputElement).value
  }

  return {
    lists,
    addList,
    addCard,
    updateCardContent
  }
}
