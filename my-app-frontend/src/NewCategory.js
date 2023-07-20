import React, { useState } from "react";

function NewCategory({ addCategory }) {

    const [name, setName] = useState('')

    const handleNewCategory = (e) => {
        e.preventDefault();
        const newCategory = {name: name}
        fetch("http://localhost:9292/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        })
        .then(r => r.json())
        .then(category => addCategory(category))
        setName('')
    }

    return (
        <form className="NewItem" onSubmit={handleNewCategory}>
        <label>
          New Category:
          <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} />
        </label>
  
        <button type="submit">Submit Category</button>
      </form>
    )
}

export default NewCategory