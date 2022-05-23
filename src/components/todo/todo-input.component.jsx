import { useState } from "react";
import TodoItems from "../todo-items/todo-items.component";
import "./todo-input.styles.css";

const Todo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoId, setTodoId] = useState(null);
  const [todoItems, setTodoItems] = useState([]);
  const [showWarning, setWarning] = useState(false);

  const findIfTodoElementExists = (value) => {
    return todoItems.findIndex((item) => item.id === value);
  };

  const getTodoValue = (event) => {
    const value = event.target.value;
    if (!value) {
      setTodoValue("");
    }
    setWarning(false);
    setTodoValue(value);
  };

  const addTodoItem = () => {
    debugger;
    if (!todoValue) {
      setWarning(true);
      return;
    }
    if (todoId != null) {
      const todoItemExists = findIfTodoElementExists(todoId);

      todoItems.map((item, index) => {
        if (index === todoItemExists) {
          item.value = todoValue;
        }
        return item;
      });
      setTodoItems([...todoItems]);
      setTodoValue("");
      setTodoId(null);
      return;
    }
    let obj = {
      id: Date.now(),
      value: todoValue,
      finished: false,
    };
    // setTodoItems((todoItems) => [...todoItems, obj]);
    setTodoItems([...todoItems, obj]);
    setTodoValue("");
  };

  const handleCallback = (childData) => {
    setTodoValue(childData.value);
    setTodoId(childData.id);
    setWarning(false);
  };

  return (
    <>
      <div className="todo-container">
        <input
          value={todoValue}
          type="text"
          placeholder="What do you need to do today?"
          className="todo-input"
          onChange={(e) => getTodoValue(e)}
        />
        <button className="add-todo__btn" onClick={addTodoItem}>
          Add
        </button>
        {showWarning && <p className="error-text">This is a required field.</p>}
      </div>
      <TodoItems
        todoItems={todoItems}
        stateChanger={setTodoItems}
        parentCallBack={handleCallback}
      />
    </>
  );
};

export default Todo;
