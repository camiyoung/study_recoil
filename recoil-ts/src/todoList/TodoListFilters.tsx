import { ChangeEvent } from "react"
import { useRecoilState } from "recoil"
import { todoListFilterState } from "../recoil"

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
