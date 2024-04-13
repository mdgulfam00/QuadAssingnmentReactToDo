import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './index.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      
      <h1 className='size-50 text-5xl font-extrabold text-blue-600 p-6 '>ToDo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onComplete={handleCompleteTodo}
      />
   
    </div>
  );
};

export default App;
