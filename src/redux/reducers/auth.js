const initialState = {
  recruiter: JSON.parse(localStorage.getItem("user")) || {},
  loadingLogin: false,
  loadingRegistration: false,
  error: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login/start":
      return {
        ...state,
        loadingLogin: true,
        error: null
      };
    case "auth/login/success":
      if (action.checkbox) {
        localStorage.setItem("user", JSON.stringify(action.payload))
      }
      return {
        ...state,
        recruiter: action.payload,
        loadingLogin: false,
      };
    case "auth/login/error":
      return {
        ...state,
        error: true
      };
    case "auth/registration/start":
      return {
        ...state,
        loadingRegistration: true
      }
    case "auth/registration/success":
      return {
        ...state,
        loadingRegistration: false,
        recruiter: action.payload
      }
    case "auth/logout":
      localStorage.removeItem('user')
      return {
        ...state,
        recruiter: {}
      }
    default:
      return state;
  }
};
