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
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    event.preventDefault();
    const { inputValue } = this.state;
    console.log(inputValue);
  };

  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {
    const { savedData } = this.props;
    return (
      <Card title="Список дел!!!">
        <div className="todo t-odo-list">
          {this.renderEmptyRecord()}
          {/*{savedData.map(this.renderRecord)}*/}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;
    return (
      <div className="todo-item todo-item-new">
        <input
          type="text"
          className="todo-input t-input"
          onInput={this.handleChange}
          value={inputValue}
        />
        <span className="plus t-plus" onClick={this.createNewRecordByEnter}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage('todo-app', [])(Todo);
