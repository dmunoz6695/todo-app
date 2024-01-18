import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TodoContext } from '../context/todoContext'


const CreateTodo = () => {

  const {createTodo} = useContext(TodoContext)

  const { handleSubmit, control} = useForm()

  const onSubmit = (data) => {
    createTodo(data)
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Controller
      
        name='name'
        control={control}
        defaultValue={''}
        render={({ field: { onChange, value } }) => (
          <>
            <input className='text-black' type="text" onChange={onChange} value={value} />
          </>
        )}
      />
      <Controller
      
        name='description'
        control={control}
        defaultValue={''}
        render={({ field: { onChange, value } }) => (
          <>
            <input className='text-black' type="text" onChange={onChange} value={value} />
          </>
        )}
      />

      <Controller
      
        name='state'
        control={control}
        defaultValue={''}
        render={({ field: { onChange, value } }) => (
          <>
            <input type="checkbox" value={value} onChange={onChange} />
          </>
        )}
      />

      <button>send</button>

    </form>
  )
}

export default CreateTodo