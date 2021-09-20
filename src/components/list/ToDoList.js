import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

  import ListViewItem from './ListViewItem';
  import './ToDoList.css'; 


// Display the todo list based on the condition
// that decides whether to add the item in pending list
// or the completed list
const ToDoList = (props) => {
    const deleteItem = (id) => {
        setToDoList(toDoList.filter( (item) => item.id !== id))
    }

    // Change the boolean value to update the check and uncheck status of the checkbox
    const editToDoList = (id) => {
        const newToDoList = [...toDoList]
        newToDoList.forEach((toDoItem, index) => {
            if(toDoItem.id === id){newToDoList[index].isDone = !toDoItem.isDone}});
        setToDoList(newToDoList)
    }

    const {title, toDoList, isCompleted, setToDoList} = props;
    return(
        <div>
            <div>{title}</div>
            <hr/>
        <TransitionGroup className="todo-list">
        {toDoList.map((toDoItem) => {
        return(
            toDoItem.isDone === isCompleted &&
            <CSSTransition
            key={toDoItem.id}
            timeout={500}
            classNames="item"
            >
                <ListViewItem 
                    toDoItem={toDoItem} 
                    updateCheckStatus = {()=>editToDoList(toDoItem.id)} 
                    deleteSelf = {()=>deleteItem(toDoItem.id)}/>
            </CSSTransition>
        
        )})}
    </TransitionGroup>
    </div>)
}

export default ToDoList;