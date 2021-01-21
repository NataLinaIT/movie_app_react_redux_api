import React, { Component } from 'react'
import Login from "./Login/Login"
import UserMenu from "./UserMenu"
import "./Header.css"

export default class Header extends Component {
  render() {
    const {user} = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="nav-link">Movies DB</div>
            </li>
          </ul>
          {user? <UserMenu/> : <Login/>}
          
        </div>
      </nav>
    )
  }
}
