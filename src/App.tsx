import "./App.css";
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserList from "./components/UserList/UserList";
import EditUser from "./components/EditUser/EditUser";
import { useAppDispatch } from "./custom/reduxHooks";
import { apiGetUser } from "./api/apiGetUser";

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("Project App.js Running");
    apiGetUser(dispatch)
  },[]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
