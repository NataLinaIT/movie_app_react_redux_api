import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Header from "./Header/Header/Header";
import MoviesPage from "./Movies/MoviesPage";
import MoviePageContainer from "./Pages/MoviePage/MoviePageContainer";
import Footer from "./Footer/Footer";

import { logout, updateSession } from "../redux/auth-reducer";

export const cookies = new Cookies();

class App extends React.Component {
  updateSessionId = (session_id) => {
    if (session_id) {
      cookies.set("session_id", session_id, {
        path: "/",
        maxAge: 2592000,
      });
    }
  };

  onLogout = () => {
    cookies.remove("session_id");
    this.props.logout(this.props.session_id);
  };

  componentDidMount = () => {
    const session_id = cookies.get("session_id");
    if (session_id) {
      this.props.updateSession(session_id);
      this.updateSessionId(this.props.session_id);
    } 
  };

  render() {
    return (
      <div>
        <Header onLogout={this.onLogout} />
        <Route exact path="/" component={MoviesPage} />
        <Route path="/movie/:id" component={MoviePageContainer} />
        <Footer/>
      </div>
    );
  }
}

let mapStapeToProps = (state) => {
  return {
    user: state.auth.user,
    session_id: state.auth.session_id,
  };
};

export default connect(mapStapeToProps, {
  logout,
  updateSession,
})(App);
