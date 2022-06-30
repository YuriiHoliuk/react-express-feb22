import React, { useEffect, useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [input, setInput] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos APP</h1>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
