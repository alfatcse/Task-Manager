import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddNew from "./components/AddNew/AddNew";
import EditTask from "./components/EditTask/EditTask";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/addnew" element={<AddNew></AddNew>}></Route>
        <Route path="/editTask/:id" element={<EditTask></EditTask>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
