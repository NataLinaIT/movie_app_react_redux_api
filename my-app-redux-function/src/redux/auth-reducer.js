import CallApi, { fetchApi, API_URL, API_KEY_3 } from "../api/api";
import { cookies } from "../components/App";

const SHOW_MODAL = "SHOW_MODAL";
const UPDATE_INPUT = "UPDATE_INPUT";
const UPDATE_ERRORS = "UPDATE_ERRORS";
const UPDATE_BASE_ERROR = "UPDATE_BASE_ERROR";
const RESET_LOGIN_FORM = "RESET_LOGIN_FORM";
const UPDATE_SABMITSTATUS = "UPDATE_SABMITSTATUS";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_SESSION_ID = "UPDATE_SESSION_ID";

let initialState = {
  showModal: false,
  errors: {},
  user: null,
  username: "",
  password: "",
  session_id: null,
  submiting: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        showModal: !state.showModal,
      };
    }
    case UPDATE_INPUT: {
      let username = action.values.username;
      let password = action.values.password;
      return {
        ...state,
        username: username ? username : state.username,
        password: password ? password : state.password,
        errors: {
          ...state.errors,
          base: null,
          username: username ? null : state.errors.username,
          password: password ? null : state.errors.password,
        },
      };
    }
    case UPDATE_ERRORS: {
      let username = action.errors.username;
      let password = action.errors.password;
      let userNameError = "This field is required";
      let passwordError = "Required! Must be 5 characters or more";
      return {
        ...state,
        errors: {
          ...state.errors,
          username: username ? null : userNameError,
          password: password ? null : passwordError,
        },
      };
    }
    case UPDATE_BASE_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          base: action.message,
        },
      };
    }
    case RESET_LOGIN_FORM: {
      return {
        ...state,
        username: "",
        password: ""
      };
    }
    case UPDATE_SABMITSTATUS: {
      return {
        ...state,
        submiting: action.payload,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        user: action.userId,
      };
    }
    case UPDATE_SESSION_ID: {
      return {
        ...state,
        sessionId: action.sessionId,
      };
    }
    default:
      return state;
  }
};

export const showModal = () => ({
  type: SHOW_MODAL,
});
export const updateInput = (values) => ({
  type: UPDATE_INPUT,
  values,
});
export const updateErrors = (errors) => ({
  type: UPDATE_ERRORS,
  errors,
});
export const updateBaseError = (message) => ({
  type: UPDATE_BASE_ERROR,
  message,
});
export const resetLoginForm = () => ({
  type: RESET_LOGIN_FORM,
});
export const updateSubmitStatus = (payload) => ({
  type: UPDATE_SABMITSTATUS,
  payload,
});
export const updateUser = (userId) => ({
  type: UPDATE_USER,
  userId,
});
export const updateSessionId = (sessionId) => ({
  type: UPDATE_SESSION_ID,
  sessionId,
});

//thunk
export const toogleModal = () => (dispatch) => {
  dispatch(showModal());
};
export const changeInput = (values) => (dispatch) => {
  dispatch(updateInput(values));
};
export const validateFields = (errors) => (dispatch) => {
  dispatch(updateErrors(errors));
};
export const submitLoginForm = (values) => (dispatch) => {
  CallApi.get("/authentication/token/new")
    .then((data) => {
      return CallApi.post("/authentication/token/validate_with_login", {
        body: {
          username: values.username,
          password: values.password,
          request_token: data.request_token,
        },
      });
    })
    .then((data) => {
      return CallApi.post("/authentication/session/new", {
        body: {
          request_token: data.request_token,
        },
      });
    })
    .then((data) => {
      dispatch(updateSessionId(data.session_id));

      cookies.set("session_id", data.session_id, {
        path: "/",
        maxAge: 2592000,
      });

      return CallApi.get("/account", {
        params: {
          session_id: data.session_id,
        },
      });
    })
    .then((user) => {
      dispatch(updateSubmitStatus(false));
      dispatch(updateUser(user));
      dispatch(resetLoginForm());
      dispatch(showModal());
    })
    .catch((error) => {
      console.log("error", error);
      dispatch(updateBaseError(error.status_message));
      dispatch(updateSubmitStatus(false));
    });
};
export const logout = (session_id) => (dispatch) => {
  fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      session_id: session_id,
    }),
  }).then(() => {
    dispatch(updateUser(null));
    dispatch(updateSessionId(null));
  });
};
export const updateSession = (session_id) => (dispatch) => {
  fetchApi(
    `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
  ).then((user) => {
    dispatch(updateUser(user));
    dispatch(updateSessionId(user));
    dispatch(toogleModal());
  });
};

export default authReducer;
