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
    this.setState({ inputValue: event.currentTarget.value });
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { saveData, savedData } = this.props;
    console.log('this.getId() ', this.getId());
    if (inputValue) {
      const newSavedData = [
        ...savedData,
        {
          id: this.getId(),
          record: inputValue,
          isCompleted: false
        }
      ];
      saveData(newSavedData);
      this.setState({ inputValue: '' });
    }
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;

    saveData(
      savedData.map(record => {
        return record.id === Number(event.currentTarget.id)
          ? { ...record, isCompleted: !record.isCompleted }
          : record;
      })
    );
  };

  renderEmptyRecord() {
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
  }

  renderRecord = item => {
    const { id, isCompleted, record } = item;

    return (
      <div className="todo-item t-todo" key={id}>
        <p className="todo-item__text">{record}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          id={id}
          onClick={this.toggleRecordComplete}
        >
          [{isCompleted ? 'x' : ' '}]
        </span>
      </div>
    );
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(item => this.renderRecord(item))}
        </div>
      </Card>
    );
  }
}

export default withLocalstorage('todo-app', [])(Todo);
