import React from 'react'
import { connect } from "react-redux";
import LoginButton from "../Login/LoginButton"
import UserMenuContainer from "./UserMenuContainer"
import "./Header.css"

let Header = (props) => {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="nav-link">Movies DB</div>
            </li>
          </ul>
          {props.user? <UserMenuContainer onLogout={props.onLogout}/> : <LoginButton/>}
        </div>
      </nav>
    )
  }

let mapStapeToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStapeToProps, {})(Header);