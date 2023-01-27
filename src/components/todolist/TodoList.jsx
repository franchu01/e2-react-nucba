import React, { useContext } from 'react'
import { DeleteTodoStyled, InputAndButtonContainerStyled, ListStyled, TodoListStyled, TodoStyled, TodoValueStyled } from './TodoListStyled'
import TodoListContext from '../../context/TodoListContext'

const TodoList = () => {

    const { handleChange, handleSubmit, handleDelete, todoList } = useContext(TodoListContext)
    
  return (
    <TodoListStyled>
        <InputAndButtonContainerStyled>
            <input onChange={handleChange} />
            <button onClick={handleSubmit} >Add</button>
        </InputAndButtonContainerStyled>
        <ListStyled>
            {
                todoList.map(todo => {
                    return <TodoStyled key={todo.id} >
                        <TodoValueStyled>{todo.value}</TodoValueStyled>
                        <DeleteTodoStyled onClick={() => handleDelete(todo.id)} >X</DeleteTodoStyled>
                    </TodoStyled>
                    
                    
                })
            }
        </ListStyled>
    </TodoListStyled>
  )
}

export default TodoList