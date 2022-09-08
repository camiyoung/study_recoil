import { atom, selector } from "recoil"

export interface TodoType {
  id: number
  text: string
  isComplete: boolean
}

const todoListState = atom<TodoType[]>({
  key: "todoListState",
  default: [],
})

const todoListFilterState = atom<string>({
  key: "todoListFilterState",
  default: "Show All",
})

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete)
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

export { filteredTodoListState, todoListFilterState, todoListStatsState }
export default todoListState
