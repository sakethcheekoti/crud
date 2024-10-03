import React from 'react'
import { useState } from 'react'
import axios from "axios"
import './app.css';
import { useNavigate } from 'react-router-dom'
const AddUsers = () => {
 let[values, setValues] = useState({username:"", email:""})
let navigate = useNavigate()
 function change(e){
    
      setValues({...values,[e.target.name] : e.target.value})
     
 }
 function addUser(e){
  e.preventDefault();
    axios.post("http://localhost:3002/data",values)
    .then(()=>{
        navigate("/")
    })
 }
  return (
    <div>
        <h1>Enter Data</h1>
        <form action="">
            <input type="text" placeholder='enter username' name='username' onChange={change} value={values.username}/><br />
            <input type="email" placeholder='enter email' name='email' onChange={change}  value={values.email}/><br />
            <button type='submit' onClick={addUser} >Add</button>
        </form>
    </div>
  )
}

export default AddUsers
