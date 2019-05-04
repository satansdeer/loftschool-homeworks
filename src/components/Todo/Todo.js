import React, { PureComponent } from 'react';
// import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const savedDataArray = savedData('todo-app');
    const biggest = savedDataArray.reduce((acc, el) => Math.max(acc, el.id), 0);
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
    const savedDataArray = savedData('todo-app');
    const todoId = +event.target.dataset.todoId;

    let index = savedDataArray.findIndex(item => item.id === todoId);
    savedDataArray[index].isComplete = !savedDataArray[index].isComplete;
    savedDataArray[index].isComplete
      ? (event.target.innerText = '[x]')
      : (event.target.innerText = '[]');

    saveData('todo-app', savedDataArray);
  };

  createNewRecord = () => {
    const { saveData, savedData } = this.props;
    const { inputValue } = this.state;

    let savedDataArray = savedData('todo-app');
    let newSavedDataArray = savedDataArray
      ? savedDataArray
      : (savedDataArray = []);
    let id = savedDataArray.length ? this.getId() : 0;

    newSavedDataArray.push({
      id: id,
      isComplete: false,
      text: inputValue
    });

    saveData('todo-app', newSavedDataArray);

    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    const { savedData } = this.props;
    const savedDataArray = savedData('todo-app');

    return (
      <div className="todo t-todo-list">
        <div className="todo-item todo-item-new">
          <input
            className="todo-input t-input"
            placeholder="Введите задачу"
            onChange={this.handleChange}
            onKeyPress={this.createNewRecordByEnter}
            value={inputValue}
          />
          <span className="plus t-plus" onClick={this.createNewRecord}>
            +
          </span>
        </div>
        {savedDataArray
          ? savedDataArray.map(record => this.renderRecord(record)).reverse()
          : this.renderEmptyRecord()}
      </div>
    );
  }

  renderEmptyRecord() {
    return null;
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
          [{record.isComplete ? 'x' : ''}]
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
