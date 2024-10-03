
import React,{useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate , Link} from 'react-router-dom';
import "./app.css";
const GetUsers = () => {
    let[state, setState] = useState([]);
    let[thead, setThead] = useState([]);
    let navigate = useNavigate();
    let deletes = (id)=>{
        axios.delete(`http://localhost:3002/data/${id}`)
    }
    useEffect(()=>{
        axios.get("http://localhost:3002/data").
        then(result=>{
            setState(result.data);
            setThead(Object.keys(result.data[0]).slice(2,4))
        })
        .catch(err=>console.log(err))
        console.log(state);
        console.log(thead);
    },[state])
  return (
    <div style={{display:"flex" , justifyContent:"center", marginTop:"100px"}}>
   <table border={1} cellPadding={"10px"} style={{borderCollapse:"collapse"}}>
    <caption>CRUD OPERATIONS
    <button onClick={()=>navigate("/add")}>Add+</button>
    </caption>
    <thead>
        <tr>
            {thead.map((x,ind)=><th key={ind}>{x}</th>)}
            <th>Operations</th>
        </tr>
    </thead>
    <tbody>
        {state.map((x,ind)=>(
            <tr key={ind}>
                <td>{x.username}</td>
                <td>{x.email}</td>
                <td>
                   <Link to={`/update/${x.id}`}><button>Edit</button>&nbsp;&nbsp;&nbsp;</Link> 
                    <button onClick={()=>{
                        deletes(x.id)
                    }}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
   </table>
   </div>
  )
}
export default GetUsers
