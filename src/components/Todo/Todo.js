import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  newitemRef = React.createRef();

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const id = parseInt(event.target.dataset.todoId, 10);

    saveData(
      savedData.map(record =>
        record.id === id
          ? { ...record, isCompleted: !record.isCompleted }
          : record
      )
    );
  };

  createNewRecord = () => {
    const { saveData, savedData } = this.props;
    const { current } = this.newitemRef;
    const { value } = current;
    if (value) {
      saveData([
        ...savedData,
        { id: this.getId(), text: value, isCompleted: false }
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
          {!savedData.length
            ? ''
            : savedData.map(el => {
                return this.renderRecord(el);
              })}
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
          onKeyPress={this.createNewRecordByEnter}
          ref={this.newitemRef}
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
