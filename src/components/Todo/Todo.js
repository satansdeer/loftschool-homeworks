import React, { PureComponent } from "react";
import Card from "../Card";
import "./Todo.css";
import withLocalStorage from "../../HOCs/withLocalstorage";
import propsTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";

class Todo extends PureComponent {
  state = {
    inputValue: ""
  };

  static get defaultProps() {
    return {
      initialData: {
        id: 0,
        isComplete: false,
        text: ""
      }
    };
  }

  static get propTypes() {
    return {
      savedData: propsTypes.func.isRequired,
      saveData: propsTypes.func.isRequired,
      changeState: propsTypes.func.isRequired,
      isComplete: propsTypes.bool.isRequired,
      initialData: propsTypes.object
    };
  }

  getId = () => {
    let { savedData, initialData } = this.props;
    savedData = savedData() || [...initialData];
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  };

  getStorage = () => {
    const { savedData } = this.props;
    const storageData = savedData();
    return storageData ? [...storageData] : null;
  };

  handleChange = event => this.setState({ inputValue: event.target.value });

  changeState = state => this.setState({ ...state });

  createNewRecordByEnter = event => {
    event.key === "Enter" && this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const storageData = this.getStorage();
    if (!storageData) return null;
    storageData.forEach(el => {
      el.isComplete = el.id === +event.target.dataset.todoId
        ? !el.isComplete
        : el.isComplete;
    });
    const { saveData, changeState } = this.props;
    saveData(storageData);
    changeState();
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    if (!inputValue.trim().length) {
      this.changeState({ inputValue: "" });
      return;
    }
    const { saveData } = this.props;
    const savedData = this.getStorage();
    const storageData = !savedData ? [] : savedData;
    const data = {
      id: this.getId(),
      text: inputValue.trim(),
      isComplete: false
    };
    storageData.push(data);
    saveData(storageData);
    this.changeState({ inputValue: "" });
  };

  render() {
    return (
      <Card title='Список дел'>
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              placeholder="Введите задачу"
              value={this.state.inputValue}
              onChange={this.handleChange}
              onKeyPress={this.createNewRecordByEnter}
            />
            <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
          </div>
          {this.renderEmptyRecord()}
        </div>
      </Card>
    );
  }

  renderEmptyRecord = () => {
    const storageData = this.getStorage();
    return storageData && storageData.reverse().map(item => (
      <TodoItem
        key={item.id}
        toggleFlag={this.toggleRecordComplete}
        {...item}
      />));
  };
}

export default withLocalStorage("todo-app", [])(Todo);