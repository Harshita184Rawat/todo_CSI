import React, { useState } from 'react'
import { TodoForms } from './TodoForms'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo'
import { EditTodoForms } from './EditTodoForms';

uuidv4();


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])

        console.log(todos)

    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1 className='text-blue-600 text-4xl font-bold'>Get Things Done</h1>
            <TodoForms addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForms editTodo={editTask} task={todo} />
                ) : (
                    < Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )

            ))}

        </div>
    )
}
