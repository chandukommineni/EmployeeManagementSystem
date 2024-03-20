import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./stylesheets/AddUser.css"
const AddUser = () => {
    const navigate=useNavigate()
   const [user,setUser]=useState({
    name:"",
    email:"",
    mobile:""
   })
   const {name,email,mobile}=user
   const inputChange=(e)=>{

    setUser({ ...user, [e.target.name]: e.target.value });

   }
   const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8080/emp",user)
    navigate('/')

   }
  return (

    <>
    <div className="formdiv">
      <h2>Add Employee</h2>
    <div className='formcontainer'>
      <div className="inputs">
            <input type="text"  placeholder='Enter Name' value={name} onChange={inputChange} name="name"/>
      </div>
      <div className="inputs">
            <input type="text"  placeholder='Enter Email' value={email} onChange={inputChange} name="email"/>
      </div>
      <div className="inputs">
           <input type="text"  placeholder='Enter Name' value={mobile} onChange={inputChange} name="mobile"/>
      </div>
      <div className="submitbtn">
            <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
        
    </div>

    </div>
 
 </>
    
  )
}

export default AddUser