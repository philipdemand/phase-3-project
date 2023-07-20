import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => { 
      Promise.all([
        fetch('http://localhost:9292/tasks'),
        fetch('http://localhost:9292/categories'),
      ])
        .then(([resTasks, resCategories]) => 
          Promise.all([resTasks.json(), resCategories.json()])
        )
        .then(([dataTasks, dataCategories]) => {
          setTasks(dataTasks);
          setCategories(dataCategories);
        });
  }, []);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleSubmit = (newItem) => {
    setTasks([...tasks, newItem])
  }

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId)
    setTasks(filteredTasks)
  }

  // const updateCompletedStatus = (object) => {
  //   const updatedTasks = tasks.map(task => {
  //     if (task.id === object.id) {
  //       return object
  //     } else {
  //       return task
  //     }
  //   })
  //   setTasks(updatedTasks)
  // }

  const addCategory = (item) => {
    setCategories([...categories, item])
  }

  const editTaskWords = (changedObject) => {
    const updatedName = tasks.map(task => {
      if (task.id === changedObject.id) {
        return changedObject
      } else {
        return task
      }
    })
    setTasks(updatedName)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
        isDarkMode={isDarkMode} 
        onDarkModeClick={handleDarkModeClick} />
      {categories.length && <ToDoList 
        tasks={tasks}
        categories={categories}
        editTaskWords={editTaskWords} 
        addCategory={addCategory} 
        removeTask={removeTask} 
        onItemFormSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
