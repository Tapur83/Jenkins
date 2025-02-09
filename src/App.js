import React, { useEffect, useState } from 'react';
import Login from './Login'
import SignUp from './Signup';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {auth } from './firebase';
import "./App.css";
import Home from './Home';


function App() {
 

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);


  return (
    <Router>
      <div className='container'>
        <NavigationBar  user={user}/>
        <div className='app'>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={ user ?<Home/> : <Login/>} />


            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />+
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;