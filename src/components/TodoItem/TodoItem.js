import React from "react";
import propTypes from "prop-types";

const TodoItem = props => {
  const { id, text, toggleFlag, isComplete } = props;
  return (
    <div className="todo-item t-todo">
      <p className="todo-item__text">{text}</p>
      <span
        className="todo-item__flag t-todo-complete-flag"
        data-todo-id={id}
        onClick={toggleFlag}
      >
          {isComplete ? "[x]" : "[  ]"}
        </span>
    </div>
  );
};

TodoItem.defaultProps = {
  text: ""
};

TodoItem.propTypes = {
  text: propTypes.string,
  id: propTypes.number.isRequired,
  toggleFlag: propTypes.func.isRequired,
  isComplete: propTypes.bool.isRequired
};

export default TodoItem;