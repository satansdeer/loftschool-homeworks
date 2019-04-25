import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: '',
    savedData: this.props.savedData()
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData().reduce((acc, el) => Math.max(acc, el.id), 0);
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
    const { savedData } = this.state;
    const { saveData } = this.props;
    let result = savedData.map(el => {
      if (String(el.id) === event.target.dataset.todoId) {
        return {
          text: el.text,
          id: el.id,
          checked: !el.checked
        };
      } else {
        return el;
      }
    });
    saveData(result);
    this.setState({ savedData: result });
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { saveData, savedData } = this.props;

    if (inputValue.length) {
      let newArr = [
        ...savedData(),
        {
          text: inputValue,
          id: this.getId(),
          checked: false
        }
      ];
      saveData(newArr);
      this.setState({ inputValue: '', savedData: newArr });
    }
  };

  renderRecord = record => {
    return (
      <div key={record.id} className="todo-item t-todo">
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={record.id}
          onClick={this.toggleRecordComplete}
        >
          {record.checked ? '[x]' : '[]'}
        </span>
      </div>
    );
  };

  render() {
    const { savedData } = this.props;
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
          {savedData().map(this.renderRecord)}
        </div>
      </Card>
    );
  }
}

export default withLocalstorage('todo-app', [])(Todo);
