import React, { PureComponent } from 'react';
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

  handleChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  createNewRecordByEnter = e => {
    if (e.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = e => {
    const { todoId } = e.target.dataset;
    const { saveData } = this.props;
    const { inputValue, savedData } = this.state;

    const map = savedData.map(el =>
      el.id === +todoId ? { ...el, isComplete: !el.isComplete } : el
    );

    saveData(map);
    this.setState({ inputValue, savedData: map });
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { savedData, saveData } = this.props;

    if (inputValue) {
      saveData([
        ...savedData(),
        { id: this.getId(), isComplete: false, text: inputValue }
      ]);

      this.setState({ inputValue: '', savedData: savedData() });
    }
  };

  render() {
    const { savedData } = this.state;

    return (
      <div className="todo t-todo-list">
        {this.renderEmptyRecord()}
        {savedData.map(el => this.renderRecord(el))}
      </div>
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
      <div className="todo-item t-todo">
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id}
          onClick={this.toggleRecordComplete}
        >
          [{isComplete ? 'x' : '  '}]
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
