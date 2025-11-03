import TodoCreate from './TodoCreate';
import TodoData from './ToDoData';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';
import './todo.css';

const TodoApp = () => {
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
    )
}

export default TodoApp;
