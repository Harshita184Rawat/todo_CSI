import React, { useState } from 'react'


export const EditTodoForms = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' vaue={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Update Task</button>

        </form>
    )
}
