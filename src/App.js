import { Component } from "react";
import Todo from "./components/todo/todo-input.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <section>
          <div className="container">
            <h2>Awesome Todo List</h2>
            <Todo />
          </div>
        </section>
      </div>
    );
  }
}
export default App;
