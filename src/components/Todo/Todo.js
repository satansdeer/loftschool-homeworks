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

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value })
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = ({ target }) => {
    let { saveData, savedData } = this.props,
      updatedData = savedData.map(todo => {
        return todo.id === Number(target.id) ? { ...todo, isComplited: !todo.isComplited } : { ...todo }
      });

    saveData(updatedData);
  };

  createNewRecord = () => {
    let { inputValue } = this.state,
      { saveData, savedData } = this.props,
      currentData = [...savedData];

    if (inputValue) {
      currentData.push({ id: this.getId(), isComplited: false, text: inputValue });
      saveData(currentData);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title='Cписок дел'>
        <div className='todo t-todo-list'>
          {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </div>
      </Card>
    )
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;

    return (
      <div className='todo-item todo-item-new'>
        <input
          className='todo-input t-input'
          type='text'
          placeholder='Введите задачу'
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.createNewRecordByEnter} />
        <span onClick={this.createNewRecord} className='plus t-plus'>+</span>
      </div>
    )
  }

  renderRecord = ({ text, isComplited, id }) => {
    return (
      <div className='todo-item t-todo' key={id}>
        <p className='todo-item__text'>{text}</p>
        <span
          className='todo-item__flag t-todo-complete-flag'
          id={id}
          onClick={this.toggleRecordComplete}> [{isComplited ? 'x' : ' '}]
        </span>
      </div>
    )
  }
}

export default withLocalstorage('todo-app', [])(Todo);
