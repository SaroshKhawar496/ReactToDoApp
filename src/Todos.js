import React from "react";

const Todos = props => {
  //first check if list in props has a non zero length
  //then use map to return jsx for each item in list
  const todoList = props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              props.deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yaay!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
