import React, {  useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [initialTasks, setInitialTasks]= useState(TASKS)
  console.log('tasks list', initialTasks)
const [clicked, setClicked]=useState(false)
  function OnDelete(taskindex){
    setInitialTasks(prevTask=>prevTask.filter(task=>task !==taskindex))
  }
  const [newTask, setNewTask]=useState({
    text:"",
    category:""
  })
 function handleChange(e){
  const {name,value}=e.target
  setNewTask((prevTask)=>({...prevTask, [name]:value}))
  console.log(newTask)

}
function handleFilter(category){
const filtered=initialTasks.filter(task=>task.category !==category)
console.log(filtered)
}
function handleSubmit(e){
  e.preventDefault()
console.log("newTask",newTask)
setInitialTasks((prevTasks)=>[...prevTasks,{...newTask} ] )
setNewTask({text:"", category:""})
console.log("newtasks:",initialTasks)
}
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} handleFilter={handleFilter} />
      <NewTaskForm handleSubmit={handleSubmit} handleChange={handleChange} task={newTask}/>
      <TaskList tasks={initialTasks} handleDelete={OnDelete} />
    </div>
  );
}

export default App;
