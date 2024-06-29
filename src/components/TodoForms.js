import React, { useState } from 'react'


export const TodoForms = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input border-solid border-2 border-black py-2 px-6 w-[30%]' vaue={value} placeholder='What  is the task today' onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
