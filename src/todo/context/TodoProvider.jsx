/* eslint-disable react/prop-types */
import { useReducer } from 'react'
import { TodoContext } from './todoContext'

import {v4 as uuid }from 'uuid'
import { todoReducer } from './todoReducer'

const initialState =  [
  { id: uuid(),
    name: 'TODO TEST',
    description: 'TODO DESC TEST',
    state: false
  }
]




const TodoProvider = ({children}) => {

  

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const createTodo = (data) => { 
    const action = {
      type: '[TODO] create',
      payload: {...data, id: uuid()}
    }
    dispatch(action)
  }

  const value  ={
    state,
    createTodo
  }

  return (
    <TodoContext.Provider value={value} >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider