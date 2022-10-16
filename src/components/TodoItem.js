import React from 'react'

function TodoItem({ todo, updateTaskStatus, removeTodo }) {

    const handleTodoClick = () => {
        let updatedTodo = {
            ...todo,
            isCompleted: !todo.isCompleted
        }
        updateTaskStatus(updatedTodo);
    }

    return (
        <div className="todo-item" key={todo.id}>

            <label className='todo-item__label'>
                <input type="checkbox" className='todo-checkbox' checked={TextTrackList.isCompleted}
                    onChange={handleTodoClick}
                />

                <div className='todo-text'>{todo.title}</div>

                <span className='checkmark' />
            </label>

            <button className='remove-btn' onClick={() => removeTodo(todo.id)}>
                -
            </button>
        </div>
    )
}

export default TodoItem