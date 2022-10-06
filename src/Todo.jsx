import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between text-gray-800 bg-green-300 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-green-500 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input type="checkbox" checked={todo.completed ? 'checked' : ''} onChange={() => toggleComplete(todo)} />
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo)} className={style.button}><FaRegTrashAlt /></button>
    </li>
  )
}

export default Todo
