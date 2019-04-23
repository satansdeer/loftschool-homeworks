import React, { Component } from 'react';
import Card from '../../molecules/Card';
import withLocalstorage from '../../../containers/WithLocalstorage';
import InputBox from '../../molecules/InputBox';
import ListOfTasks from './../../molecules/ListOfTasks/index';
import './Todo.css';

const ENTER_KEY_CODE = 13;
class Todo extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  getId = () => {
    const { savedData } = this.props;
    const biggest = savedData().reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  };

  handleChange = inputValue => this.setState({ ...this.state, inputValue });

  saveItem = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      const { saveData, savedData } = this.props;
      const { getId } = this;
      const newItems = [
        { value: inputValue, id: getId(), done: false },
        ...savedData()
      ];

      saveData(newItems);
      this.setState({ ...this.state, inputValue: '' });
    }
  };

  changeStatus = (value, id) => {
    const { saveData, savedData } = this.props;
    const newItems = [...savedData()];
    newItems.forEach(item => {
      if (item.id === id) {
        item.done = value;
      }
    });

    saveData(newItems);
  };

  handleKeyDown = keyCode => {
    keyCode === ENTER_KEY_CODE && this.saveItem();
  };

  render() {
    const { inputValue } = this.state;
    const { savedData } = this.props;
    const { handleChange, saveItem, handleKeyDown } = this;

    return (
      <Card title="Список">
        <div className="todo t-todo-list">
          <InputBox
            handleChange={handleChange}
            value={inputValue}
            saveData={saveItem}
            handleKeyDown={handleKeyDown}
          />
          <ListOfTasks
            listOfItems={savedData()}
            handleChangeStatus={this.changeStatus}
            ref={this.listContainer}
          />
        </div>
      </Card>
    );
  }
}

export default withLocalstorage()(Todo);
