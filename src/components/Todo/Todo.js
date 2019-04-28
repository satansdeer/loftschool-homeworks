import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';
import { save } from '../../localstorage.js';

class Todo extends PureComponent {
  state = {
    inputValue: '',
    localStorageKey: 0,
    list: [
      {
        id: '',
        text: '',
        isComplete: false
      }
    ]
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    const { inputValue, localStorageKey } = this.state;
    this.setState({
      localStorageKey: localStorageKey + 1
    });
    console.log(localStorageKey);
    save(1, { inputValue });
  };

  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {
    return (
      <div className="todo">
        <div className="todo-item todo-item-new">
          <input
            type="text"
            className="todo-input"
            placeholder="Введите задачу"
            onInput={this.handleChange}
          />
          <span className="plus" onClick={this.createNewRecordByEnter}>
            +
          </span>
        </div>
      </div>
    );
  }

  renderEmptyRecord() {
    return;
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage('todo-app', [])(Todo);
