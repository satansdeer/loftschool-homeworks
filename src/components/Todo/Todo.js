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
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.key !== 'Enter') {
      return;
    }

    this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    saveData(
      savedData.map(record => {
        return record.id === parseInt(event.target.dataset.todoId, 10)
          ? { ...record, completed: !record.completed }
          : record;
      })
    );
  };

  createNewRecord = () => {
    const { inputValue } = this.state;

    if (!inputValue) {
      return;
    }

    const { saveData, savedData } = this.props;
    saveData([
      ...savedData,
      { id: this.getId(), text: inputValue, completed: false }
    ]);

    this.setState({
      inputValue: ''
    });
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

  renderEmptyRecord = () => {
    const { inputValue } = this.state;

    return (
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
    );
  };

  renderRecord = record => (
    <div className="todo-item t-todo" key={record.id}>
      <p className="todo-item__text">{record.text}</p>
      <span
        className="todo-item__flag t-todo-complete-flag"
        data-todo-id={record.id}
        onClick={this.toggleRecordComplete}
      >
        {record.completed ? '[x]' : '[ ]'}
      </span>
    </div>
  );
}

export default withLocalstorage('todo-app', [])(Todo);
