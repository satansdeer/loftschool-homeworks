import React, {PureComponent} from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: '',
    taskList: this.getOldValues(),
    taskName: ''
  };

  getOldValues() {
    const {savedData} = this.props;
    return savedData();
  }


  getId() {
    const {savedData} = this.props;
    const biggest = savedData().reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({taskName: event.target.value})
  };

  createNewRecordByEnter = event => {
    if (event.keyCode === 13) {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    console.log('RecordComplete');
    const todoId = event.target.dataset;
    let {taskList} = this.state;
    const {saveData} = this.props;

    taskList.map((item) => {
      if (item.id == todoId.todoId) {
        console.log('ConditionDone')

        if (item.taskStatus === '') {
          document.querySelectorAll('[data-todo-id]')[item.id].innerText = '[X]';
          item.taskStatus = '1';
        } else {
          item.taskStatus = '';
          document.querySelectorAll('[data-todo-id]')[item.id].innerText = '[]';
        }
      }
    })

    this.setState({taskList: taskList})
    saveData(taskList);
  };

  createNewRecord = () => {
    const {saveData} = this.props;
    let {taskName, taskList} = this.state;
    console.log('TaskName', taskName);
    taskList = taskList == null ? [] : taskList;
    taskList.push({
        id: taskList.length === 0 ? 0 : this.getId(),
        taskTitle: taskName,
        taskStatus: ''
      }
    );
    this.setState({taskList: taskList, taskName: ''});
    saveData(taskList);
  };

  render() {
    const {taskList} = this.state;
    return (
      <div className="main__cell">
        <div className="card">
          <h3 className="card__title card-title">Список дел</h3>
          <div className="card-scrollable-content">
            <div className="todo t-todo-list">
              <div className="todo-item todo-item-new">
                <input type="text" className="todo-input t-input" placeholder="Введите задачу"
                       onKeyDown={this.createNewRecordByEnter} onChange={this.handleChange}
                       value={this.state.taskName}/>
                <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
              </div>
              <div>
                {taskList.map(item =>
                  <div className="todo-item t-todo" key={item.id}>
                    <p className="todo-item__text">{item.taskTitle}</p>
                    <span className="todo-item__flag t-todo-complete-flag"
                          data-todo-id={item.id}
                          onClick={this.toggleRecordComplete}>[{item.taskStatus !== '' ? 'x' : ''}]</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withLocalstorage(Todo);
