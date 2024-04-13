import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;

