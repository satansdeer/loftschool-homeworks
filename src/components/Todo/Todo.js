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
    this.setState({inputValue: event.target.value});
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const el = event.target;
    const elId = el.dataset.todoId;
    const { savedData, saveData } = this.props;

    savedData.forEach(data => {
      if(data.id === +elId){
        data.isComplete = data.isComplete ? false : true;
      }      
    });
    
    saveData(savedData);
  };

  createNewRecord = () => {
    const { saveData, savedData } = this.props;
    const { inputValue } = this.state;

    if(!inputValue) return;

    const data = savedData;

    data.unshift({
      id: this.getId(),
      isComplete: false,
      text: inputValue
    });

    saveData(data);
    this.setState({inputValue: ''});
  };

  renderEmptyRecord() {
    const { inputValue } = this.state;

    return (
      <div className="todo-item todo-item-new">
        <input className="todo-input t-input" placeholder="Введите задачу" onChange={this.handleChange} onKeyPress={this.createNewRecordByEnter} value={inputValue} />
        <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
      </div>
    )
  }

  renderRecord = record => {
    const { id, isComplete, text } = record;
    const completeStr = isComplete ? '[x]' : '[ ]';

    return (
      <div key={id} className="todo-item t-todo">
        <p className="todo-item__text">{text}</p>
        <span className="todo-item__flag t-todo-complete-flag" data-todo-id={id} onClick={this.toggleRecordComplete}>{completeStr}</span>
      </div>
    )
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
    )
  }
}

export default withLocalstorage('todo-app', [])(Todo);
