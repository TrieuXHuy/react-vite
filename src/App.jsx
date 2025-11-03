import './components/todo/todo.css';
import TodoCreate from './components/todo/TodoCreate';
import TodoData from './components/todo/ToDoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {

  const [todos, setTodos] = useState([
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: todos.length + 1,
      title: name
    }
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoCreate
          addNewTodo={addNewTodo}
        />

        {todos.length === 0 ?
          <div className='todo-img'>
            <img src={reactLogo} alt="" className='logo' />
          </div> :
          <TodoData
            todos={todos}
            deleteTodo={deleteTodo}
          />}
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
