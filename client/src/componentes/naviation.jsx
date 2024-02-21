import {Link} from 'react-router-dom'

export default function naviation() {
  return (
    <div>
        <Link to="/taskspage">
        <h1>task app</h1>
        <Link to="/tasksform">create task</Link>
        
        </Link>
    </div>
  )
}

