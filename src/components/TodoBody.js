import React, { useState } from 'react';
import uuid from 'react-uuid';
import TodoItem from './TodoItem';

function TodoBody({ todos, createTodo, updateTaskStatus, removeTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAddTodo = () => {
        const todo = {
            id: uuid(),
            title: inputValue,
            isCompleted: false
        }

        createTodo(todo);
        setInputValue('');
    }
    return (
        <div className="todo-body">
            <div className="todo-body-input-div">
                <input className='todo-body-input' placeholder='Type your Task' onChange={handleInputChange} value={inputValue} />

                <button className='todo-body-btn' onClick={handleAddTodo}>Add</button>
            </div>

            <div className="todo-list">
                {
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} updateTaskStatus={updateTaskStatus} removeTodo={removeTodo} />)
                }
            </div>
        </div>
    )
}

export default TodoBody