import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const ListTodo = () => {

  const {state} = useContext(TodoContext)

  console.log('state', state)


  return (
    <div className=" h-[90%] w-full flex items-center justify-center ">
      <div className="border-teal-500 border w-[30%] h-[60%] rounded">
        <div className="w-full h-[20%] border-teal-500 border-b  flex items-center justify-center">
          <h1 className="font-bold text-lg ">TODO</h1>
        </div>
        <div className="h-[80%] ">
          <div className='w-full '>
            {state.map( todo => (
              <div key={todo?.id}>
                <h1>Name: <span>{ todo.name}</span> </h1>
                <h2>Description: <span>{ todo.description}</span></h2>
                <h3>state: <span>{String(todo.state)}</span></h3>
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListTodo