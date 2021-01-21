import React from "react";
import Header from "./Header/Header";
import MoviesPage from "./Movies/MoviesPage";
import MoviePage from "./Movies/Pages/MoviePage/MoviePage";
import {BrowserRouter, Route} from "react-router-dom"

import Cookies from "universal-cookie";
import { API_URL, API_KEY_3, fetchApi } from "../api/api";

const cookies = new Cookies();
export const AppContext = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      session_id: null,
    };
  }

  updateUser = (user) => {
    this.setState({
      user,
    });
  };

  updateSessionId = (session_id) => {
    if (session_id) {
      cookies.set("session_id", session_id, {
        path: "/",
        maxAge: 2592000,
      });
    }
    this.setState({
      session_id,
    });
  };

  onLogout = () => {
    cookies.remove("session_id");
    this.setState({
      session_id: null,
      user: null,
    });
  };

  componentDidMount = () => {
    const session_id = cookies.get("session_id");
    if (session_id) {
      fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then((user) => {
        this.updateUser(user);
        this.updateSessionId(session_id);
      });
    }
  };

  render() {
    const { user, session_id } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user,
            session_id,
            updateUser: this.updateUser,
            updateSessionId: this.updateSessionId,
            onLogout: this.onLogout,
          }}
        >
          <div>
            <Header user={user} />
            <Route exact path="/" component={MoviesPage}/>
            <Route path="/movie/:id" component={MoviePage}/>
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
