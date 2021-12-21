import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/navbar.css";
const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData)

  const dispatch =useDispatch();


  const logout = (response) => {
      dispatch(setSignedIn(false))
      dispatch(setUserData(null))
  }
  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(setInput(inputValue));
  }
   

  return (
    <div className="navbar">
      <h1 className="navbar__header">BlogMania </h1>
      {isSignedIn && (
        <div className="blog__search">
          <input
            className="search"
            placeholder="search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}
      {isSignedIn ?( <div className="navbar__user__data">
          <Avatar className="user" src={userData?.imageUrl} alt={userData?.name}/> 
          <h1 classname="signedIn"> {userData?.givenName}</h1>
          <GoogleLogout  clientId="531027365098-vt4l8r13eor1d85bqooonebjkmuvj8rc.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="logout__button"
            >Logout</button>)}
            
            onLogoutSuccess ={logout}
            />
      </div>):(<h4>user not available</h4>)}
    </div>
  );
};

export default Navbar;
