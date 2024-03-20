import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./stylesheets/AddUser.css"

const EditUser = () => {
  const navigate=useNavigate()
  const url=useParams()
  const id=url.id

  const [user,setUser]=useState({
    name:"",
    email:"",
    mobile:""
  })
  async function fetching(){
    const response=await axios.get(`http://localhost:8080/emp/${id}`)
    setUser(response.data)
  }
  useEffect(()=>{
     fetching()
  },[]);
  
  const inputChange=(e)=>{

   setUser({ ...user, [e.target.name]: e.target.value });

  }
  const handleSubmit=async(e)=>{
   e.preventDefault()
   await axios.put(`http://localhost:8080/emp/${id}`,user)
   navigate('/')

  }
  return (
    <>
    <div className="formdiv">
      <h2>Edit Employee</h2>
    <div className='formcontainer'>
      <div className="inputs">
            <input type="text"  placeholder='Enter Name' value={user["name"]} onChange={inputChange} name="name"/>
      </div>
      <div className="inputs">
            <input type="text"  placeholder='Enter Email' value={user["email"]} onChange={inputChange} name="email"/>
      </div>
      <div className="inputs">
           <input type="text"  placeholder='Enter Name' value={user["mobile"]} onChange={inputChange} name="mobile"/>
      </div>
      <div className="submitbtn">
            <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
        
    </div>

    </div>
 
 </>
  )
}

export default EditUser