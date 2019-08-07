import React, { Component } from 'react';
import ItemValue from '../../atoms/ItemValue';
import CheckDoneButton from '../../atoms/CheckDoneButton';
import './ToDoItem.css';

export default class ToDoItem extends Component {
  state = {
    isDone: null
  };

  componentDidMount() {
    this.setState({ ...this.state, isDone: this.props.done });
  }

  handleChangeStatus = () => {
    const { isDone } = this.state;
    const { handleChangeStatus, id } = this.props;

    handleChangeStatus(!isDone, id);
    this.setState({ ...this.state, isDone: !this.state.isDone });
  };

  render() {
    const { isDone } = this.state;
    const { value } = this.props;
    return (
      <div className="todo-item t-todo">
        <ItemValue value={value} />
        <CheckDoneButton handleClick={this.handleChangeStatus} done={isDone} />
      </div>
    );
  }
}

ToDoItem.defaultProps = {
  value: 'test',
  handleClick: () => console.log('check')
};
