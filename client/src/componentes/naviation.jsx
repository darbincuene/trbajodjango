import {Link} from 'react-router-dom'

export default function naviation() {
  return (
    <div className='flex justify-between py-3'>
        <Link to="/taskspage">
        <h1 className='font-bold text-3xl mb-4'>task app</h1>
        </Link>
        <button className='bg-indigo px-3 py-2 rounded-lg'>
        <Link to="/tasksform">create task</Link>
        </button>
    </div>
  )
}

