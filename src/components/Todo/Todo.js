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
    if(event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    saveData(
      savedData.map(el => {
        console.log(el.id + ' - ' + event.target);
        return el.id === parseInt(event.target.dataset.todoId, 10)
          ? { ...el, isCompleted: !el.isCompleted }
          : el
      })
    );
  };

  createNewRecord = () => {        
    const { saveData, savedData } = this.props;
    const { inputValue } = this.state;
    let arrTodo = savedData;
    arrTodo.push({
      id: this.getId(),
      value: inputValue,
      isCompleted: false
    })
    saveData(arrTodo);
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

  renderEmptyRecord() {
    const { inputValue } = this.state;
    return(
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder="Введите задачу"
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
          value={inputValue} />
        <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
      </div>
    );
  }

  renderRecord = record => {
    const { id, value, isCompleted } = record;
    return(      
      <div className="todo-item t-todo">
        <p className="todo-item__text">{value}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id}
          onClick={this.toggleRecordComplete} >
          [{isCompleted ? 'x': ''}]
        </span>
      </div>       
    );
  };

}

export default withLocalstorage('todo-app2', [])(Todo);
