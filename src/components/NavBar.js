
import { Link, } from "react-router-dom";
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../utilities/users-service';
import { useState } from 'react';


const NavBar = ({user},{setUser}) => {


   const handleLogOut = ({setUser})=>{
      // Delegate to the users-service 
      userService.logOut();
       //Update state will also cause a re-render   
       setUser(null);
   }

  return (
    <nav>
      <Link to="/orders">Order History</Link>{" "}
      <Link to="/orders/new">New Order</Link>{" "}
      <span>Welcome, {user.name}</span>
      <Link to = "" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
};
export default NavBar;