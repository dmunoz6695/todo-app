import { NavLink } from 'react-router-dom'

const links = [
  {
    path: '/',
    name: 'List'
  },
  {
    path: 'create',
    name: 'Create'
  }
]

const Navbar = () => {
  return (

    <nav className='w-full h-[10%] flex bg-slate-800'>
      <div className='h-full w-[20%] flex items-center justify-center'>
        <NavLink
          to={'/'}
          className={'font-bold'}
              
        >
    TODO APP
        </NavLink>
      </div>
      <div className='h-full font-medium w-[50%] flex items-center justify-center gap-10'>
        {
          links.map( navlink => (
            <NavLink
              key={navlink.path}
              to={navlink.path}
              className={({isActive}) => `${isActive ? 'text-teal-500' : ''}`}
              
            >
              {navlink.name}
            </NavLink>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar