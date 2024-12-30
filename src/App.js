import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AppointmentsTable from "./screen/AllAppoinments"; // Import the table component
import UpdateAppointmentForm from "./screen/UpdateAppoinment"; // Import the update form component

import Home from "./screen/Home";

function App() {
  return (

   
    <Routes>

    
       <Route path="/" element={<Home />} />  
     
      <Route path="/appointments" element={<AppointmentsTable/>} />
      <Route path="/update/:id" element={<UpdateAppointmentForm />} />
    </Routes>

  
  );
}

export default App;
/*
 <Routes>
          
         // <Route path="/" element={<AppointmentsTable />} /> {/* Default appointments list */
          //<Route path="/update" element={<UpdateAppointmentForm />} /> {/* Update form */}
        //</Routes>
        // <Route path="/" element={<AppointmentsTable />} />