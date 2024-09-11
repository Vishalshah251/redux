import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: []
}

const ItemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    editItem: (state, action) => {
        const { id, name, email } = action.payload
        const existingItem = state.items.find(item => item.id === id)
        if (existingItem) {
          existingItem.name = name
          existingItem.email = email
        }
      }
  }
})


export const { additem, deleteItem ,editItem} = ItemSlice.actions
export default ItemSlice.reducer
