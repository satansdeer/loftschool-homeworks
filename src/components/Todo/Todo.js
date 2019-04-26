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
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { saveData, savedData } = this.props;
    const id = parseInt(event.target.dataset.todoId, 10);

    saveData(
      savedData.map(record => {
        return record.id === id
          ? { ...record, isCompleted: !record.isCompleted }
          : record;
      })
    );
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { savedData, saveData } = this.props;

    if (inputValue !== '') {
      let newRecord = [
        ...savedData,
        {
          id: this.getId(),
          text: inputValue,
          isCompleted: false
        }
      ];
      saveData(newRecord);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { savedData } = this.props;
    const title = 'Список дел';

    return (
      <Card title={title}>
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;
    const placeholder = 'Введите задачу';

    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    return (
      <div className="todo-item t-todo" key={record.id}>
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={record.id}
          onClick={this.toggleRecordComplete}
        >
          {record.isCompleted ? '[x]' : '[]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
