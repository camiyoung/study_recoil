import { ChangeEvent } from "react"
import { useRecoilState } from "recoil"
import todoListState, { TodoType } from "../recoil"

interface PropType {
  item: TodoType
}

const TodoItem = ({ item }: PropType): JSX.Element => {
  const [todoList, setTodoList] = useRecoilState<TodoType[]>(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event?.target
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
function replaceItemAtIndex(
  arr: TodoType[],
  index: number,
  newValue: TodoType
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr: TodoType[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default TodoItem
