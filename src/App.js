import React, { Component } from "react";
import Todos from "./Todos";
import AddToDo from "./AddToDo";

//using materialized css included in index.h
class App extends Component {
  state = {
    todos: [{ id: 1, content: "Buy Milk" }, { id: 2, content: "Play Games" }]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      // keep the item with id not matching the item to be deleted id
      return todo.id !== id;
    });
    this.setState({
      // es6 if key and value have same name you can do todos only below
      todos: todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddToDo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
