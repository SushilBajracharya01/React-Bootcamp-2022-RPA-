import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TodoBody from './components/TodoBody';
import TodoHeader from './components/TodoHeader';

const backendUrl = `http://localhost:4001/`;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTasks = () => {
      axios.get(`${backendUrl}todos`).then(response => {
        const tasks = response.data;
        setTodos(tasks);
      }).catch(error => console.log(error));
    }

    fetchTasks();
  }, []);

  const createTodo = (task) => {
    axios.post(`${backendUrl}todos`, task).then(() => {
      let tempTasks = [...todos, task];
      setTodos(tempTasks);
    }).catch(error => console.log(error));
  }

  const updateTaskStatus = (updatedTodo) => {
    axios.patch(`${backendUrl}todos/${updatedTodo.id}`, updatedTodo).then(() => {
      let tempTasks = todos.map(tempTask => {
        if (tempTask.id === updatedTodo.id) {
          return updatedTodo;
        }
        else {
          return tempTask;
        }
      })

      setTodos(tempTasks)
    }).catch(error => console.log(error));
  }

  const removeTodo = (todoId) => {
    axios.delete(`${backendUrl}todos/${todoId}`).then(() => {
      const tempTodos = todos.filter((todo) => todo.id !== todoId);

      setTodos(tempTodos);
    }).catch(error => console.log(error));
  }

  const handleClearAll = () => {
    setTodos([]);
  }

  const handleClearCompleteTod = () => {
    const notCompletedTodo = todos.filter(todo => !todo.isCompleted);

    setTodos(notCompletedTodo);
  }

  return (
    <div className="App">
      <div className="todo-container">
        <div className='todo'>
          <TodoHeader todos={todos} />

          <TodoBody todos={todos} createTodo={createTodo} updateTaskStatus={updateTaskStatus} removeTodo={removeTodo} />
        </div>

        <div className='bottom-menu'>
          <button className='clearbtn' onClick={handleClearAll}>Clear all</button>

          <button className='clearbtn' onClick={handleClearCompleteTod}>Clear Completed tasks</button>
        </div>
      </div>
    </div>
  );
}

export default App;
