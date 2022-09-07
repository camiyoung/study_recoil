import "./App.css"
import { useRecoilValue } from "recoil"
import { filteredTodoListState } from "./recoil"
import TodoItem from "./todoList/TodoItem"
import TodoItemCreator from "./todoList/TodoItemCreator"
import TodoListFilters from "./todoList/TodoListFilters"
import TodoListStats from "./todoList/TodoListStats"
function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="App">
      <h1>TodoList </h1>
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
