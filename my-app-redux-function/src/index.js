import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

window.store = store;