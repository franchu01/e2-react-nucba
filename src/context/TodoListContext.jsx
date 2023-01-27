import React, { createContext, useState } from 'react'

const TodoListContext = createContext()

export const TodoListProvider = ({children}) => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        if(!todo) { 
            alert("Ingresa algo en la todo list") 
        }

        let todosId = Math.floor(Math.random() * 10000)
        setTodoList([{value: todo, id: todosId }, ...todoList])
        console.log(todoList)
    }

    const handleDelete = (id) => {
        let newList = todoList.filter((listedTodo) => id !== listedTodo.id )
        setTodoList(newList)
    }

    const data = {handleChange, handleSubmit, handleDelete, todoList}

  return (
    <TodoListContext.Provider value={data} >{children}</TodoListContext.Provider>
  )
}

export default TodoListContext