import './component/todo/todo.css';
import TodoCreate from './component/todo/TodoCreate';
import TodoData from './component/todo/ToDoData';
import reactLogo from './assets/react.svg';
import { use, useState } from 'react';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Vue" },
    { id: 3, title: "Learn Angular" }
  ]);

  const name = "Hoai Dan It";
  const age = 20;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`addNewTodo: ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoCreate
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todos={todos}
      />
      <div className='todo-img'>
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App
