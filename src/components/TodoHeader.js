import React from 'react'

function TodoHeader({ todos }) {
    return (
        <div className="todo-header">
            <h2 className='todo-header-title'>
                Sushil's Todo List
            </h2>

            <div className='todo-header-subTitle'>
                {todos.length} Tasks remaining
            </div>
        </div>
    )
}

export default TodoHeader