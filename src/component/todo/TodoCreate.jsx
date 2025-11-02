import { useState } from 'react';

const TodoCreate = (props) => {

    //userState hook
    const [valueInput, setValueInput] = useState("eric");

    const { addNewTodo } = props;

    const handleClick = () => {
        console.log(valueInput);
    }

    const handleOnChange = (event) => {
        setValueInput(event.target.value);
    }

    return (
        <div className="todo-create">
            <input
                className="todo-input"
                type="text"
                onChange={handleOnChange}
            />
            <button
                className="todo-button"
                onClick={handleClick}
            >Create</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoCreate