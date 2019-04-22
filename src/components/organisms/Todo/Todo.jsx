import React, { PureComponent } from 'react';
import Card from '../../molecules/Card';
import './Todo.css';
import withLocalstorage from '../../../containers/WithLocalstorage';
import ToDoItem from '../../molecules/ToDoItem';
import InputBox from '../../molecules/InputBox';
import ListOfTasks from './../../molecules/ListOfTasks/index';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId = () => {
    const { loadData } = this.props;
    const biggest = loadData().reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  };

  handleChange = inputValue => this.setState({ ...this.state, inputValue });

  saveItem = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      const { saveData, loadData } = this.props;
      const { getId } = this;
      const newItems = [
        ...loadData(),
        { value: inputValue, id: getId(), done: false }
      ];

      saveData(newItems);
      this.setState({ ...this.state, inputValue: '' });
    }
  };

  changeStatus = (value, id) => {
    const { saveData, loadData } = this.props;
    const newItems = [...loadData()];
    newItems.forEach(item => {
      if (item.id === id) {
        item.done = value;
      }
    });

    saveData(newItems);
  };

  getInputBlock = () => {
    return (
      <InputBox
        handleChange={this.handleChange}
        value={this.state.inputValue}
        saveData={this.saveItem}
      />
    );
  };

  render() {
    const { saveData, loadData } = this.props;

    return (
      <Card title="Список">
        <div className="todo t-todo-list">
          {this.getInputBlock()}
          <ListOfTasks
            listOfItems={loadData()}
            handleChangeStatus={this.changeStatus}
          />
        </div>
      </Card>
    );
  }
}

export default Todo;
