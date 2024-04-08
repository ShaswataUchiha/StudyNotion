import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  const [isLogedIn, setisLogedIn] = useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">

      <Navbar isLogedIn={isLogedIn} setisLogedIn={setisLogedIn}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLogggedIn={setisLogedIn}/>} />
        <Route path="/signup" element={<Signup setIsLogggedIn={setisLogedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLogedIn={isLogedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />
      </Routes>

    </div>
  );
}

export default App;
