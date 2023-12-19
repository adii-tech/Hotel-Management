import { createContext, useState } from 'react'
import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './componants/Login';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import { Protector } from './helper/index';
import Logout from './componants/Logout';


const DataObject=createContext();

function App() {
  const [total, setTotal] = useState({})
  
  return (
    
       <DataObject.Provider value={{total,setTotal}}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Protector Component={Dashboard} />} />
         <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
       </DataObject.Provider>
    
  )
}

export default App
export {DataObject};