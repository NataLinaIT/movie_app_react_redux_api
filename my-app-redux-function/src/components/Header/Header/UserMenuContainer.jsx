import React from 'react'
import { connect } from "react-redux";
import UserMenu from './UserMenu'

let UserMenuContainer = (props) => {
    return (
      <UserMenu user={props.user} onLogout={props.onLogout}/>
    )
}

let mapStapeToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStapeToProps, {})(UserMenuContainer)