import React from "react";
import { useState } from "react"
import { TASKS } from "../data";
function NewTaskForm({handleSubmit,handleChange, task}) {
//   const [newTask, setNewTask]=useState({
//     text:"",
//     category:""
//   })
//   const [initialTasks, setInitialTasks]=useState(TASKS)
  
// function handleChange(e){
//   const {name,value}=e.target
//   setNewTask((prevTask)=>({...prevTask, [name]:value}))
//   console.log(newTask)

// }
// function handleSubmit(e){
//   e.preventDefault()
// console.log("newTask",newTask)
// setInitialTasks((prevTasks)=>[...prevTasks,{...newTask} ] )
// setNewTask({text:"", category:""})
// console.log("newtasks:",initialTasks)
// }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" value={task.text} name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleChange}>
          {/* render <option> elements for each category here */}
          <option value="">Category</option>
          <option value="Food">Food</option>
          <option value="Code">Code</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
