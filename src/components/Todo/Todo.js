import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

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
    if (event.key === 'Enter') this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const { todoId } = event.target.dataset;
    const { saveData, savedData } = this.props;
    const toggle = savedData.map(item => {
      if (item.id === Number(todoId)) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return item;
      }
    });
    saveData(toggle);
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { savedData, saveData } = this.props;
    if (inputValue) {
      saveData([
        ...savedData,
        {
          id: this.getId(),
          text: inputValue,
          isComplete: false
        }
      ]);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { savedData } = this.props;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;
    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.createNewRecordByEnter}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    const { id, text, isComplete } = record;
    return (
      <div className="todo-item t-todo" key={id}>
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id}
          onClick={this.toggleRecordComplete}
        >
          [{isComplete ? 'x' : ' '}]
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
