import React from "react";
import {Link, useNavigate} from "react-router-dom"
import './NavigationBar.css'
import { auth } from "./firebase"; 
import { signOut } from "firebase/auth";

function NavigationBar({ user }) {
  const navigate= useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully.");
      localStorage.removeItem("userid");
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error.message);
      // Handle specific errors, e.g., authentication errors, network errors
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-top">DEV@Deakin</div>
      <input 
        type="text"
        className="navbar-input"
        placeholder="Search"
      />
      <div className="link">
        <button className="button">About</button>
        {!user ? (
          <Link to="/login">
          <button className="button">Log in</button>
        </Link>
        ) : (
          <button className="button" onClick={handleSignOut}>Sign Out</button> 
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;



