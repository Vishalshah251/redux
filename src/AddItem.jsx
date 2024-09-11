import { useState } from "react"
import { additem } from "./ItemSlice"
import { useDispatch } from "react-redux"

function Additem() {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit() {
    const allusers = {
      id: Date.now(),
      name,
      email
    }
    dispatch(additem(allusers))
  }

  return (
    <div>
      <label>Name:</label> <br />
      <input 
        type="text" 
        placeholder="enter your name" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />
      <hr />
      <label>Email:</label> <br />
      <input 
        type="text" 
        placeholder="enter your email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Additem
