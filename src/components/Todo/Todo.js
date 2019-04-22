import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../containers/WithLocalstorage';
import ToDoItem from '../ToDoItem';
import InputBox from '../InputBox';

class Todo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.loadedItems = props.savedData;
  }

  componentDidMount() {
    console.log('App mounted', localStorage.items);
  }

  componentDidUpdate() {
    console.log('App Updated', localStorage.items);
  }

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = inputValue => this.setState({ ...this.state, inputValue });

  getListOfTasks = listOfItems => (
    <div>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );

  saveData = () => {
    console.log(this.loadedItems);
    // const { inputValue } = this.state;
    // const { saveData } = this.props;
    // const { getId } = this;

    // saveData({ value: inputValue, id: getId() });
  };

  getInputBlock = () => {
    return (
      <InputBox
        handleChange={this.handleChange}
        value={this.state.inputValue}
        saveData={this.saveData}
      />
    );
  };

  render() {
    const { SaveData } = this.props;

    return (
      <Card title="Список">
        <div className="todo t-todo-list">
          {this.getInputBlock()}
          {this.getListOfTasks(SaveData)}
        </div>
      </Card>
    );
  }
}

export default Todo;
