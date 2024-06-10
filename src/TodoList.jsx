import React from 'react';
import './App.css';

const TodoList = () => {
  const tasks = [
    { id: 1, text: 'Mau bobo duluuu' },
    { id: 2, text: 'Mau mandi duluuuu' },
    { id: 3, text: 'Mau makan duluuu' },
  ];

  return (
    <div className='kiyt'>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
