import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:'Wash the room',
      day:'Feb 5th at 2:00 PM',
      reminder:true, 
   },
   {
       id:2,
       text:'Cook the food',
       day:'Feb 6th at 8:00 PM',
       reminder:true, 
    },
   {
       id:3,
       text:'Roaming',
       day:'Feb 7th at 2:00 PM',
       reminder:false, 
    },
    {
       id:4,
       text:'Going to office',
       day:'Feb 8th at 10:00 PM',
       reminder:true, 
    },
  ])

  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  return (
    <div className="container">
      <Header/>
      {/*tasks length should be greater than zero*/}
      {tasks.length>0 ?(
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      ):(
        'No Tasks to Show'
        )}
    </div>
  )
}

export default App;

