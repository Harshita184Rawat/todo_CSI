import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}  >{task.task}</p>
            <div>
                <FaEdit onClick={() => editTodo(task.id)} />
                <RiDeleteBin6Fill onClick={() => deleteTodo(task.id)} />
            </div>

        </div>
    )
}
