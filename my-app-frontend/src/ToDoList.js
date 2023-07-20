import React from "react";
import ItemForm from "./ItemForm";
import Task from "./Task";
import NewCategory from './NewCategory'

function ToDoList({ onItemFormSubmit, editTaskWords, addCategory, tasks, categories, removeTask }) {

  return (
    <div className="ShoppingList">
      <NewCategory 
        addCategory={addCategory}/>
      <ItemForm 
        categories={categories} 
        onItemFormSubmit={onItemFormSubmit}/>
      
      <ul className="Items">
        {tasks.map((task) => (
          <Task 
            key={task.id}
            editTaskWords={editTaskWords} 
            task={task}
            categories={categories} 
            removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
