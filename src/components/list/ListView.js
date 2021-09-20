import './ListView.css'; 
import ToDoList from './ToDoList';


const ListView = (props) => {
    let count=0;
    const {toDoList, setToDoList, setPendingCount} = props

    //get the count of the pending items
    toDoList.map((toDoItem) => {
        !toDoItem.isDone && count++;
    })
    setPendingCount(count)

    return (
    <div className = "todo-container">
        {count>0 && 
        <ToDoList 
            title = "Pending Items"
            isCompleted = {false} 
            toDoList = {toDoList} 
            setToDoList = {setToDoList}/>}
        
        {toDoList.length-count > 0 && 
        <ToDoList 
            title = "Completed Items"
            isCompleted = {true} 
            toDoList = {toDoList} 
            setToDoList = {setToDoList}/>}
    </div>
    )}

export default ListView;