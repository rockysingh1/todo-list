import { useState } from 'react'
import './App.css';
import InputText from './components/input/InputText'
import ListView from './components/list/ListView'
import Header from './components/header/Header'

function App() {
  const [pendingCount, setPendingCount] = useState(0)
  const [toDoList, setToDoList] = useState([]);

  const clearTodoList = () => {
    setToDoList([])
  }
  return(
    <div className="container">
      <Header/>
      <div className="todo-status">
        <div>Total Items: {toDoList.length} </div>
        <div>Pending: {pendingCount} </div>
        <div>Completed: {toDoList.length - pendingCount} </div>
      </div>
      <InputText setToDoList = {setToDoList}/>
      <ListView 
      toDoList = {toDoList} 
      setToDoList = {setToDoList} 
      setPendingCount = {setPendingCount} />

      {toDoList.length > 0 &&
      <button className="clear-all" onClick={clearTodoList}>Clear All</button>}
    </div>
  );
}

export default App;
