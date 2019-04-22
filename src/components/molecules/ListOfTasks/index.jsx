import React from 'react';
import ToDoItem from '../../molecules/ToDoItem';

const ListOfTasks = ({ listOfItems, handleChangeStatus }) => {
  console.log('check listOfItems', listOfItems);
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
