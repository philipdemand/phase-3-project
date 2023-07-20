import React, { useState } from "react"

function EditTask ({ id, editTaskWords, setIsClicked }) {

    const [words, setWords] = useState('')

    const handleSubmit = (e) => {
    const string = words
        e.preventDefault()
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: string})
        })
        .then(r => r.json())
        .then(data => editTaskWords(data))
        setIsClicked(false)
        setWords('')
    }

    const handleChange = (e) => {
        setWords(e.target.value)
    }

    return (
        <div className="ShoppingList">
       <form onSubmit={handleSubmit}>
        <label>Edit Task:
        <input
            type="text"
            value={words}
            onChange={handleChange}
            /></label>
        <button type="submit">Submit</button>
       </form>
       </div>
    )
}

export default EditTask