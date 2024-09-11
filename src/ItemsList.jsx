import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, editItem } from './ItemSlice'

function ItemsList() {
  const items = useSelector(state => state.items.items)
  const dispatch = useDispatch()

  
  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState("")
  const [editEmail, setEditEmail] = useState("")

  function handleDelete(id) {
    dispatch(deleteItem(id))
  }

  const handleEdit = (item) => {
    setEditId(item.id)
    setEditName(item.name)
    setEditEmail(item.email)
  }

  const handleSave = () => {
    dispatch(editItem({ id: editId, name: editName, email: editEmail }))
    setEditId(null) 
  }

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {items.map(val => (
          <li key={val.id}>
            {editId === val.id ? (
              
              <div>
                <input 
                  type="text" 
                  value={editName} 
                  onChange={(e) => setEditName(e.target.value)} 
                  placeholder="Edit Name" 
                />
                <input 
                  type="text" 
                  value={editEmail} 
                  onChange={(e) => setEditEmail(e.target.value)} 
                  placeholder="Edit Email" 
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                {val.name} - {val.email}
                <button onClick={() => handleEdit(val)}>Edit</button>
                <button onClick={() => handleDelete(val.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsList