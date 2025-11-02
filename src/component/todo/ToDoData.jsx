const TodoData = ({ name, age }) => {
    // console.log('Props in ToDoData:', props);

    // const { name, age } = props;

    return (
        <div className="todo-list">
            <div>My name is {name}, age {age}</div>
            <div>Learn React</div>
            <div>Watching Youtube</div>
        </div>
    )
}

export default TodoData