import { useState } from 'react'
import './ListView.css'; 
import ListViewItem from './ListViewItem';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const ListView = (props) => {
    let count=0;
    const {toDoList, setToDoList, setPendingCount} = props
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
    
    // Display the todo list based on the condition
    // that decides whether to add the item in pending list
    // or the completed list
    const displayToDoItem = (cond) => {
        count = 0;
        return(
        <TransitionGroup className="todo-list">
        {toDoList.map((toDoItem) => {
            !toDoItem.isDone && count++;
            return(
                toDoItem.isDone === cond &&
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
        </TransitionGroup>)
    }

    //get the count of the pending items
    toDoList.map((toDoItem) => {
        if(!toDoItem.isDone)
            count++;
    })
    setPendingCount(count)

    return (
    <div className = "todo-container">
        {count>0 && 
        <div>
            <div>Pending Items</div>
            <hr/>
        {displayToDoItem(false)}
        </div>}
        
        {toDoList.length-count > 0 && 
        <div>
            <div>Completed Items</div>
            <hr/>
        {displayToDoItem(true)}
        </div>}
    </div>
    )}

export default ListView;