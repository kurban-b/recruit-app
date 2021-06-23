const initialState = {
  stages: [],
  loading: false,
};

export const stagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "stages/load/start":
      return {
        ...state,
        loading: true,
      };
    case "stages/load/success":
      return {
        ...state,
        loading: false,
        stages: action.payload,
      };
    default:
      return state;
  }
};
