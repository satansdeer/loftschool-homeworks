import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  saveData = this.props.saveData;
  savedData = this.props.savedData;
  key = 'todo-app';

  getId() {
    let biggest = 0;
    if (this.savedData(this.key) !== null) {
      biggest = this.savedData(this.key).reduce((acc, el) => {
        return Math.max(acc, el.id);
      }, 0);
    }
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    if (event.target.textContent === '[]') {
      event.target.textContent = '[x]';
    } else {
      event.target.textContent = '[]';
    }
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    if (inputValue.length) {
      this.saveData('todo-app', {
        text: inputValue,
        id: this.getId(),
        checked: false
      });
    }

    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              placeholder="Введите задачу"
              value={inputValue}
              onChange={this.handleChange}
              onKeyPress={this.createNewRecordByEnter}
            />
            <span className="plus t-plus" onClick={this.createNewRecord}>
              +
            </span>
          </div>
          {this.savedData(this.key)
            ? this.savedData(this.key).map(el => {
                return this.renderRecord(el);
              })
            : null}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    return;
  }

  renderRecord = record => {
    return (
      <div key={record.id} className="todo-item t-todo">
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={record.id}
          onClick={this.toggleRecordComplete}
        >
          []
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
