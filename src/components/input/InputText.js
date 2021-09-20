import { useState } from 'react'
import './InputText.css'; 
import {v1 as uuid} from 'uuid';

const InputText = (props) => {
  const [inputValue, setInputValue] = useState("");
  const {setToDoList} = props

  const handleUserInput = (e) => {
    setInputValue(e.target.value)
  }

  // Add item to the toList list of the input is not empty 
  const addItemToList = (itemName) =>{
    if(itemName==="")
      return;
    const newToDoItem = {
      id: uuid(),
      itemName: inputValue,
      isDone: false,
    }
    setToDoList(prev => [...prev, newToDoItem]);
  }

  const clearInputField = () => {
    setInputValue("")
  }
  

  const handleKeyDown = (e) => {
    // On pressing the enter / return key
    if (e.key === 'Enter' || e.keyCode === 13) {
      addItemToList(e.target.value.trim())
      clearInputField()
    }
  }
  
  return <input 
    className="todo-input" 
    type="text" 
    placeholder = "add item" 
    value={inputValue} 
    onChange={handleUserInput} 
    onKeyDown={handleKeyDown} />
}

export default InputText;