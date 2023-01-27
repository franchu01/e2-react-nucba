import React from 'react'
import Home from '../components/home/Home'
import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import TodoList from '../components/todolist/TodoList'
import PokeSearch from '../components/pokeSearch/PokeSearch'

const Routes = () => {

  return (
    <Layout>
        <ReactDomRoutes>
            <Route  path="/" element={ <Home/> }  />
             <Route  path="todo-list" element={ <TodoList/> }  /> 
            <Route  path="pokeapi-search" element={ <PokeSearch/> }  />
        </ReactDomRoutes>
    </Layout>
  )
}

export default Routes