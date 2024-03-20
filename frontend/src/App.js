
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
function App() {

  return (
    <div className="App">
      <Router>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>

      </Router>
    
      
        

      </div>
        );
}


export default App;
