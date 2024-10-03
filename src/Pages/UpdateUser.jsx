import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import './app.css';
import { useNavigate, useParams } from 'react-router-dom'
const UpdateUsers = () => {
 let[values, setValues] = useState({username:"", email:""})
let navigate = useNavigate()
 function change(e){
    
      setValues({...values,[e.target.name] : e.target.value})
     
 }
 function update(e){
    e.preventDefault()
    axios.put("http://localhost:3002/data/"+id, values)
    .then(()=>{
        navigate("/")
    })
 }
 let{id} = useParams();
 useEffect(()=>{
    axios.get("http://localhost:3002/data/"+id)
    .then(res=>setValues(res.data))
 },[])

  return (
    <div>
        <h1>Edit your Profile</h1>
        <form action="">
            <input type="text" placeholder='enter username' name='username' onChange={change} value={values.username}/><br />
            <input type="email" placeholder='enter email' name='email' onChange={change}  value={values.email}/><br />
            <button onClick={update}>UpdateUsers</button>
        </form>
    </div>
  )
}

export default UpdateUsers
