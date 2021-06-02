import React, { useState } from 'react';

function Todo({ todo, index }) {
  return (
    <div>
      {todo.activity}
    </div>
  );
}

function TodoForm({addTodo}) {

  const [value, setValue] = useState('');
  console.log(value)

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

return (
  <form onSubmit={ handleSubmit }>
      <input
      placeholder="Add todo..."
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    </form>
    
  )
}


function App() {

  const [todos, setTodos] = useState([
    {
      activity: "This is first todo"
    },
    {
      activity: "This is Second todo"
    },
    {
      activity: "This is Third todo"
    },

  ]);

  const addTodo = activity => {
    const newTodo = [...todos, { activity }];
    setTodos(newTodo);
  }


  return (
    <div className="app">
      <div className="todo">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
        <TodoForm addTodo={ addTodo }/>
      </div>
    </div>
  )
}

export default App;