import { useState } from 'react';

const TodoCreate = (props) => {

    //userState hook
    const [valueInput, setValueInput] = useState("");

    const { addNewTodo } = props;

    const handleOnChange = (event) => {
        setValueInput(event.target.value);
    }

    return (
        <div className="todo-create">
            <input
                className="todo-input"
                type="text"
                onChange={handleOnChange}
                value={valueInput}
            />
            <button
                className="todo-button"
                onClick={() => {
                    addNewTodo(valueInput)
                    setValueInput("");
                }}
            >Create</button>
        </div>
    )
}

export default TodoCreate