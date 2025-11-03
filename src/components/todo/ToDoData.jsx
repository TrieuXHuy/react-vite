const TodoData = (props) => {

    const { todos, deleteTodo } = props;

    return (
        <div className="todo-list">
            <div>
                {todos.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <div>{todo.title}</div>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoData