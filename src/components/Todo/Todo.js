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
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const id = Number(event.target.dataset.id);
    const { savedData, saveData } = this.props;
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
    if (inputValue === '') {
      return;
    }
    const newRecord = [
      ...savedData,
      { id: this.getId(), text: inputValue, isCompleted: false }
    ];

    saveData(newRecord);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { savedData } = this.props;
    return (
      <Card title="Список дел!!!">
        <div className="todo t-odo-list">
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
          type="text"
          className="todo-input t-input"
          onInput={this.handleChange}
          value={inputValue}
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
      <div className="todo-item">
        <p className="todo-item__text">{record.text}</p>
        <span
          data-id={record.id}
          onClick={this.toggleRecordComplete}
          className="todo-item__flag t-todo-complete-flag"
        >
          {record.isCompleted ? '[x]' : '[]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
