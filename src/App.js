import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc,} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import { db } from "./Firebase";
import Todo from "./Todo";


const style = {
  bg: `h-screen w-screen p-4 bg-black`,
  container: `max-w-[500px] bg-gray-800 text-white w-full mt-[10rem] m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-green-300 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-gray-800 text-xl`,
  button: `p-4 ml-2 bg-green-300 text-gray-800`,
  count: `text-center p-2` 
}


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("")

  //create
  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === ''){
      alert('Input cannot be empty')
      return
    }
    await addDoc(collection(db, "todos"),{
      text: input,
      completed: false,
    })
    setInput('')
  }
  //read
  useEffect(()=>{
    const q = query(collection(db,"todos"))
    const dbData = onSnapshot(q, (querySnapshot)=>{
    const  todoArr =[]
    querySnapshot.forEach(doc => {
      todoArr.push({...doc.data(), id:doc.id})
    });
    setTodos(todoArr)
    })
    return () => dbData()
  },[])
  //update
  const toggleComplete = async(todo) => {
    await updateDoc(doc(db, "todos", todo.id),{
      completed: !todo.completed
    })
  }
  //delete
  const deleteTodo = async(todo) => {
    await deleteDoc(doc(db,"todos",todo.id),{
      text: input
    })
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <form className={style.form} onSubmit={createTodo}>
          <input value={input}  onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a Todo" className={style.input} />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        {todos.map((todo,index)=> (
          <ul key={index}>
            <Todo todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          </ul>
        ))}
        {todos.length < 1 ? null : <p className={style.count}>{`You have ${todos.length} todo`}</p>}
      </div>
    </div>
  );
}

export default App;
