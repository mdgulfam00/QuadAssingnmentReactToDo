import React from 'react';

const TodoItem = ({ todo, onDelete, onComplete }) => {
  return (
    <div className="todo-item">
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className='p-3 rounded-lg bg-red-600 text-white'>Delete</button>
      <button onClick={() => onComplete(todo.id)} className='p-3 rounded-lg bg-green-600 text-white'>Complete</button>
    </div>
  );
};

export default TodoItem;
