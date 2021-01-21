import React, { Component } from "react";
import CallApi from "../../../api/api";
import classNames from "classnames"
import AppContextHOC from "../../HOC/AppContextHOC";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
    submiting: false
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        base: null,
        [name]: null,
      },
    }));
  };

  handleBlur = (event) => {
    const {name} = event.target
    const errors = this.validateFields();
    const error = errors[name]

    if (error) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [name]: error,
        },
      }));
    }
  };

  validateFields = () => {
    const errors = {};
    if (this.state.username === "") {
      errors.username = "This field is required";
    }
    if (this.state.password.length < 5) {
      errors.password = "Required! Must be 5 characters or more";
    }
    return errors;
  };

  onSubmit = () => {
    this.setState({
      submiting: true
    })
    CallApi.get("/authentication/token/new")
      .then((data) => {
        return CallApi.post("/authentication/token/validate_with_login", {
          body:{
            username: this.state.username,
            password: this.state.password,
            request_token: data.request_token,
          }
        });
      })
      .then((data) => {
        return CallApi.post("/authentication/session/new", {
          body: {
            request_token: data.request_token,
          }
        })
      })
      .then((data) => {
        this.props.updateSessionId(data.session_id);
        return CallApi.get("/account", {
          params:{
            session_id: data.session_id
          }
        })
      })
      .then(user => {
        this.setState({
          submiting: false
        }, () => {
          this.props.updateUser(user)
        });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({
          errors: {
            base: error.status_message,
          },
          submiting: false
        });
      });
  };

  onLogin = (e) => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          ...errors,
        },
      }));
    } else {
      this.onSubmit();
    }
  };

  getClassForInput = key => 
    classNames("form-control", {
      invalid: this.state.errors[key]
    })
  

  render() {
    const { username, password, errors , submiting} = this.state;

    return (
      <div className="form-login-container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
          <div className="form-group">
            <label htmlFor="username">User</label>
            <input
              type="text"
              className={this.getClassForInput("username")}
              id="username"
              placeholder="Your name"
              name="username"
              value={username}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">User</label>
            <input
              type="password"
              className={this.getClassForInput("password")}
              id="password"
              placeholder="Your password"
              name="password"
              value={password}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.onLogin}
            disabled={submiting}
          >
            Login
          </button>
          {errors.base && <div className="invalid-feedback">{errors.base}</div>}
        </form>
      </div>
    );
  }
}

export default AppContextHOC(LoginForm);
  
