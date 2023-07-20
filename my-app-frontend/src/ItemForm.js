import React, { useState } from "react";

function ItemForm({onItemFormSubmit, categories }) {
  const [name, setName] = useState ('')
  const [currentCat, setCurrentCat] = useState('Maintenance')

  const foundItem = categories.find(category => category.name === currentCat)

  const handleNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: name,
      category_id: foundItem?.id,
      completed: false
    } 
    
  try {

    fetch("http://localhost:9292/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((r) => r.json())
        .then((newObj) => {
          onItemFormSubmit(newObj);
        });
  }
  catch(e) {
    console.warn(e)
  }
 }

  return (
    <form className="NewItem" onSubmit={handleNewItem}>
      <label>
        New Task Name:
        <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} />
      </label>

      <label>
        Category:
        <select onChange={e => setCurrentCat(e.target.value)}>
          {categories.map(category => <option key={category.id}>{category.name}</option>)}
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
