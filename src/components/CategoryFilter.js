import React, { useState } from "react";

function CategoryFilter({handleFilter, Categories}) {
//   const [isClicked, setClicked]=useState({

//   })
//   const [tasks, setTasks]=useState(filterTasks)
//   console.log('item,s', tasks)

//   function handleClick(category){
//     console.log('cat', category)
//     let filteredCat = tasks.filter((task) => task.category !== category)

//     setTasks(filteredCat);
// setClicked(prevCategory=>{
//       const updateClicked={...prevCategory}
//  updateClicked[category]=!updateClicked[category]
//  return updateClicked
//     })
//     console.log('clicked')


//   }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        Categories.map((btn, index)=><button key={index} onClick={()=>handleFilter(btn)}>{btn}</button>)
      }
    </div>
  );
}

export default CategoryFilter;
