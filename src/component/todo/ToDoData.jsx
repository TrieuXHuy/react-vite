const TodoData = (props) => {

    // const { name, age } = props;

    return (
        <div className="todo-list">
            <div>My name is </div>
            <div>Learn React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todos)}
            </div>
        </div>
    )
}

export default TodoData