import React from 'react'
import "./stylesheets/Home.css"
const Home = ({users,setUsers}) => {
   
  return (
    <div className='Table'>
        <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>Mobile</th>
        </tr>
        {
            users.map((emp)=>{
         return ( 
                <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.mobile}</td>
                </tr>)

            })
         

        

        }
       
       
    </table>
    </div>
  )
}

export default Home