const initialState = {
  recruiter: JSON.parse(localStorage.getItem("user")) || {},
  loadingLogin: false,
  loadingRegistration: false,
  loadingChanges: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login/start":
      return {
        ...state,
        loadingLogin: true,
        error: false
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
        error: true,
        loadingLogin: false
      };
    case "auth/registration/start":
      return {
        ...state,
        error: false,
        loadingRegistration: true
      }
    case "auth/registration/success":
      if (action.payload.error !== undefined) {
        return {
          ...state,
          loadingRegistration: false,
          error: true
        }
      }
      if (action.checkbox) {
        localStorage.setItem("user", JSON.stringify(action.payload))
      }
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
    case "recruiters/change/start":
      return {
        ...state,
        loadingChanges: true
      }
    case "recruiters/change/success":
      if (localStorage.getItem('user') !== undefined) {
        localStorage.setItem("user", JSON.stringify(action.payload))
      }
      return {
        ...state,
        loadingChanges: false,
        recruiter: action.payload
      }
    case "recruiters/changePassword/start":
      return {
        ...state,
        error: false,
        loadingChanges: true
      }
    case "recruiters/changePassword/success":
      console.log(action.payload)
      return {
        ...state,
        loadingChanges: false,
        error: action.payload
      }
    default:
      return state;
  }
};
