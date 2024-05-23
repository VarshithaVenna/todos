// Write your code here
import './index.css'

const TodoItem1 = props => {
  const {todoDetails, DeleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    DeleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button onClick={onDeleteTodo}>Delete</button>
    </li>
  )
}

export default TodoItem1
