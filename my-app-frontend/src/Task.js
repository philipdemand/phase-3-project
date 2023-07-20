import React, { useState } from "react";
import EditTask  from './EditTask'

function Task({ task, editTaskWords, removeTask, categories }) {

  const {name, id, category_id} = task

  const [isClicked, setIsClicked] = useState(false)

  function handleRemoveClick() {
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "DELETE",
    });
    removeTask(id)
  }

  // const handleClickCompleted = () => {
  //   fetch(`http://localhost:9292/tasks/${id}`, {
  //     method: "PATCH",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({completed: true})
  //   })
  //   .then(r => r.json())
  //   .then(object => updateCompletedStatus(object))
  // }

  const handleEditClick = () => {
    setIsClicked(!isClicked)
  }

  const foundItem = categories.find(item => item.id === category_id);

  return (
    <div>
    <li>
      <span>{name} <img onClick={handleEditClick} src="https://img.icons8.com/?size=512&id=8186&format=png" alt="edit" width="20" height="20"></img></span>
      <span className="category">{foundItem.name}</span>
      <button
        className="add"
        onClick={handleRemoveClick}
      >
        Remove Task
      </button>
    </li>
    <li>
      {isClicked ? <EditTask id={id} editTaskWords={editTaskWords} setIsClicked={setIsClicked}/> : null}
    </li>
    </div>
  );
}

export default Task;
