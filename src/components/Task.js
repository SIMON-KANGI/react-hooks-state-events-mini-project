import React from "react";

function Task({text, category, onHandleDelete,task}) {
  function OnHandleDelete(){
    onHandleDelete(task)
  }
 
  return (

  <div className="task">
   <div className="label">
    <h2>{category}</h2>
      </div>
    <div className="text">
    <h2>{text}</h2>
      </div>
      
      
      <button className="delete" onClick={OnHandleDelete}>X</button>
    </div>

  
   
  );

}

export default Task;
