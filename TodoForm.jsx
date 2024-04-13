import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='p-3'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new Todo item"
      />
      <button className='p-3 rounded-lg bg-blue-600 text-white' type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
