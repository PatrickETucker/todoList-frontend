import { useEffect, useState } from 'react';
import mockTodos  from './data/mockTodos'
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    setTodos(mockTodos)
  };

  useEffect(() => {
    return fetchTodos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <ul>
          {todos.map( todo => (
            <li>
              {todo.task}
                <button>Edit</button>
                <button>Delete</button>
                <button>Complete</button>

            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
