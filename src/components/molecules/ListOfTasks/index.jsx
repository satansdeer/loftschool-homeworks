import React from 'react';
import ToDoItem from '../../molecules/ToDoItem';

const ListOfTasks = ({ listOfItems, handleChangeStatus }) => {
  return (
    <div>
      {listOfItems &&
        listOfItems.map(item => (
          <ToDoItem
            value={item.value}
            key={item.id}
            done={item.done}
            handleChangeStatus={handleChangeStatus}
            id={item.id}
          />
        ))}
    </div>
  );
};

export default ListOfTasks;
