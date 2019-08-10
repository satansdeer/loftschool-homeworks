import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  //Функция получения id для записи
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

  //Функция для создания новой заметки
  createNewRecord = () => {
    const { saveData, savedData } = this.props; //saveData and savedData - функции для работы с localStorage
    let arrListTodo = [...savedData]; //Массив со всеми todo (todo храниться в localStorage)
    if (this.state.inputValue) {
      //Запишем в массив arrListTodo новую заметку с помощью метоа push (каждая заметка будет содержать поля record, id, isCompleted)
      arrListTodo.push({
        record: this.state.inputValue,
        id: this.getId(),
        isCompleted: false
      });
      saveData(arrListTodo); //Передадим созданный массив arrListTodo в функцию saveData - которая запишет данный массив в localStorage
      this.setState({
        inputValue: ''
      });
    }
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    saveData(
      savedData.map(record => {
        return record.id === Number(event.target.id)
          ? { ...record, isCompleted: !record.isCompleted }
          : record;
      })
    );
  };

  //Функция возвращает разметку основного поля ввода для создания заметки
  renderEmptyRecord() {
    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder="Введите задачу"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyDown={this.createNewRecordByEnter}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  //Функция возвращает разметку каждой созданой Todo записи
  renderRecord = ({ id, record, isCompleted }) => {
    return (
      <div className="todo-item t-todo" key={id}>
        <p className="todo-item__text">{record}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          id={id}
          onClick={this.toggleRecordComplete}
        >
          {''}[{isCompleted ? 'x' : ''}]
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
          {savedData.map(this.renderRecord)} {/*С помощью цикла map вызовим функцию renderRecord - столько раз скользо записей заметок в localStorage */}
        </div>
      </Card>
    );
  }
}

export default withLocalstorage('todo-app', [])(Todo);
