import "./todo-items.styles.css";

const TodoItems = (props) => {
  const { todoItems, stateChanger, parentCallBack } = props;

  const findTodoItem = (todo) => {
    const todoIndex = todoItems.findIndex((item) => item.id === todo.id);
    return todoIndex;
  };

  const deleteTodoItem = (todo) => {
    const index = findTodoItem(todo);
    todoItems.splice(index, 1);
    stateChanger([...todoItems]);
  };

  const editTodoItem = (todo) => {
    if (!!todo) {
      parentCallBack(todo);
    }
  };

  const finishedTodoItem = (event, todo) => {
    todoItems.map((item) => {
      if (item.id === todo.id) {
        item.finished = event.target.checked;
      }
      return item;
    });
    stateChanger([...todoItems]);
  };
  return (
    <ul>
      {todoItems.map((todo) => {
        return (
          <li key={todo.id}>
            <div className="todo-value__wrapper">
              <input
                type="checkbox"
                name="check"
                id="check"
                onClick={(event) => finishedTodoItem(event, todo)}
              />
              <span
                style={{
                  textTransform: "capitalize",
                  letterSpacing: "1.4px",
                }}
                className={todo.finished ? "line-through" : "decoration-none"}
              >
                {todo.value}
              </span>
            </div>
            <div className="icons__container">
              <span onClick={() => editTodoItem(todo)}>
                <i className="fa-solid fa-pen-to-square icon-cancel__styles"></i>
              </span>
              <span onClick={() => deleteTodoItem(todo)}>
                <i className="fa-solid fa-xmark icon-cancel__styles"></i>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoItems;
