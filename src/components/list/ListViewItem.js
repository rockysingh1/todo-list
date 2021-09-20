import './ListViewItem.css'; 

const ListViewItem = ({toDoItem, deleteSelf, updateCheckStatus}) => {
    return (
    <div className="list-view-item">
        <input type = "checkbox" defaultChecked = {toDoItem.isDone} onChange={updateCheckStatus}/>
        <label>{toDoItem.itemName}</label>
        <button className="delete-button" onClick={deleteSelf}>X</button>
    </div>
    )
}

export default ListViewItem;