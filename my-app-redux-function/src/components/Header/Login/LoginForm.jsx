import React from "react";

let LoginForm = (props) => {
  const {
    errors,
    username,
    password,
    submiting,
    onChange,
    handleBlur,
    onLogin,
    getClassForInput,
  } = props;

  return (
    <div className="form-login-container">
      <form className="form-login">
        <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
        <div className="form-group">
          <label htmlFor="username">User</label>
          <input
            type="text"
            className={getClassForInput("username")}
            id="username"
            placeholder="Your name"
            name="username"
            value={username}
            onChange={onChange}
            onBlur={handleBlur}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">User</label>
          <input
            type="password"
            className={getClassForInput("password")}
            id="password"
            placeholder="Your password"
            name="password"
            value={password}
            onChange={onChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={onLogin}
          disabled={submiting}
        >
          Login
        </button>
        {errors.base && <div className="invalid-feedback">{errors.base}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
