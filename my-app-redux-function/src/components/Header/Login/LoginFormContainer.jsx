import React from "react";
import { connect } from "react-redux";
import classNames from "classnames"
import {
  changeInput,
  validateFields,
  submitLoginForm,
} from "../../../redux/auth-reducer";
import LoginForm from "./LoginForm";


class LoginFormContainer extends React.Component {
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const values = {};
    if (name === "password"){
      values.password = value;
    } else{
      values.password = "";
    }
    if (name === "username"){
      values.username = value;
    } else{
      values.username = "";
    }
    this.props.changeInput(values)
  };

  handleBlur = () => {
    const errors = this.validateFields();
    this.props.validateFields(errors)
  };

  validateFields = () => {
    const errors = {};
    if (this.props.username === "") {
      errors.username = false;
    } else{
      errors.username = true;
    }
    if (this.props.password.length < 5) {
      errors.password = false;
    } else{
      errors.password = true;
    }
    return errors;
  };

  onSubmit = () => {
    this.props.submitLoginForm({
      username:this.props.username, 
      password:this.props.password,
    })
  };

  onLogin = (e) => {
    e.preventDefault();
    const errors = this.validateFields();
    if (!errors.username || !errors.password) {
      this.props.validateFields(errors)
    } else {
      this.onSubmit();
    }
  };

  getClassForInput = key => 
  classNames("form-control", {
    invalid: this.props.errors[key]
  })

  render() {
    const {
      errors,
      changeInput,
      username,
      password,
    } = this.props;
    return (
      <LoginForm
        errors={errors}
        changeInput={changeInput}
        username={username}
        password={password}
        onChange={this.onChange}
        handleBlur={this.handleBlur}
        onLogin={this.onLogin}
        getClassForInput={this.getClassForInput}
      />
    );
  }
}

let mapStapeToProps = (state) => {
  return {
    errors: state.auth.errors,
    username: state.auth.username,
    password: state.auth.password,
  };
};

export default connect(mapStapeToProps, {
  changeInput,
  validateFields,
  submitLoginForm,
})(LoginFormContainer);
