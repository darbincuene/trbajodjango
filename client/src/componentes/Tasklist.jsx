import { useEffect , useState} from "react"
import { getAllTasks } from "../api/Task.api";
import Card from "./card";

export default function Tasklist() {
    const [tasks, setTasks]=useState([]);

    useEffect(()=>{
       async function loadTasks(){
            const res= await getAllTasks();
            setTasks(res.data)
        }

        loadTasks();

    },[]);



  return (
    <div className="grid grid-cols-3 gap-3 w-100  h-12" >
        {tasks.map((task) => (
            <Card key={task.id} task={task}/>
           
        ))}
    </div>
);
  
}

