import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class UserMenu extends Component {
  state = {
    dropdownOpen: false
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    const { user, onLogout } = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
        <DropdownToggle
          tag="div"
          onClick={this.toggleDropdown}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <img
            width="40"
            className="rounded-circle"
            src={`https://secure.gravatar.com/avatar/${
              user.avatar.gravatar.hash
            }.jpg?s=64"`}
            alt="user_image"
            onClick={this.toggleDropdown}
          />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={onLogout}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default UserMenu;