import { useRecoilValue } from "recoil"
import { todoListStatsState } from "../recoil"

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted * 100)

  return (
    <ul>
      <li>총 아이템 개수 : {totalNum}</li>
      <li>완료 개수: {totalCompletedNum}</li>
      <li>미완료 개수: {totalUncompletedNum}</li>
      <li>완료 진행률: {formattedPercentCompleted} %</li>
    </ul>
  )
}

export default TodoListStats
