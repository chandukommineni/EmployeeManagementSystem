import React, { useEffect, useState } from 'react'
import "./stylesheets/Home.css"
import { Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from "./Navbar";

const Home = () => {
    const [users,setUsers]=useState([])
    async function fetchData() {
        const response = await axios.get("http://localhost:8080/emp");
        setUsers(response.data);
      }

    useEffect( ()=>{
        fetchData()

    },[])
    
   async function deleteEmployee(id){
        await axios.delete(`http://localhost:8080/emp/${id}`)
        fetchData()
    }
   
  return (
    <>  
     <Navbar/>
        <div className="adduser">
            <h2><Link to="/addUser" className='link'>AddUser</Link></h2>
        </div>
        <div className="count">
            <p>No.of Employees : {users.length}</p>
        </div>
        <div className='Table'>
          <table>
              <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>Mobile</th>
                  <th>Actions</th>
              </tr>
              {users.map((emp,index) => {
                  return (
                      <tr key={index}>
                          <td>{emp.name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.mobile}</td>
                          <td><Link to={`/edit/${emp.id}`}><i className="fa-solid fa-pen"></i></Link>
                              <button onClick={()=>deleteEmployee(emp.id)}><i class="fa-solid fa-trash-can"></i></button>
                          </td>
                      </tr>)

              })}


          </table>
      </div></>
  )
}

export default Home