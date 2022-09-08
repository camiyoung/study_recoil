import "./App.css"
import { useRecoilValue } from "recoil"
import { filteredTodoListState } from "./recoil"
import {
  TodoItem,
  TodoItemCreator,
  TodoListFilters,
  TodoListStats,
} from "./todoList"

const TodoList = (): JSX.Element => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="App">
      <h1>TodoList - 타입스크립트</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoList
