import './component/todo/todo.css';
import TodoCreate from './component/todo/TodoCreate';
import TodoData from './component/todo/ToDoData';
import reactLogo from './assets/react.svg';

const App = () => {

  const name = "Hoai Dan It";
  const age = 20;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoCreate />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-img'>
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App
