import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";
function App() {
  const [users,setusers]=useState([{id:"",name:"",email:"",mobile:""}])
  const fetchData = async () => {
    try {
      
      const response = await axios.get('http://localhost:8080/emp');
      setusers(response.data);

    } catch (error) {
      // Set error state if request fails
      console.log(error)
    } 
  };

    useEffect(()=>{
         fetchData()
    },[])

    
   
   

  return (
    <div className="App">
       <Navbar/>
       <Home users={users} setUsers={setusers}/>
      </div>
  );
}

export default App;
