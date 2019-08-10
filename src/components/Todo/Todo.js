import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';
import { save } from '../../localstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  createNewRecordByEnter = event => {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = id => {
    const { saveData, savedData } = this.props;

    const newArray = savedData.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }

      return item;
    });

    saveData([...newArray]);
  };

  createNewRecord = () => {
    const { saveData, savedData } = this.props;
    const { inputValue } = this.state;
    saveData([
      ...savedData,
      { id: this.getId(), text: inputValue, isComplete: false }
    ]);
    this.setState({ inputValue: '' });
  };

  render() {
    const { savedData } = this.props;
    const { inputValue } = this.state;
    const todos = savedData;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="t-input todo-input"
              autoComplete="off"
              placeholder="Введите задачу"
              onChange={this.handleChange}
              onKeyDown={this.createNewRecordByEnter}
              value={inputlValue}
            />
            <button className="plus t-plus" onClick={this.createNewRecord}>
              +
            </button>
          </div>
          {todos.map(item => (
            <div className="todo-item t-todo" key={item.id}>
              <p className="todo-item__text">{item.text}</p>
              <span
                className="todo-item__flag t-todo-complete-flag"
                onClick={() => this.toggleRecordComplete(item.id)}
              >
                [{item.isComplete ? 'x' : ' '}]
              </span>
            </div>
          ))}
        </div>
      </Card>
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
