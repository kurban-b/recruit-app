const initialState = {
  companies: [],
  loading: false,
};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "companies/load/start":
      return {
        ...state,
        loading: true,
      };
    case "companies/load/success":
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };
    case "companies/add/start":
      return {
        ...state,
        loading: true,
      };
    case "companies/add/success":
      return {
        ...state,
        loading: false,
        companies: [...state.companies, action.payload],
      };
    case "companies/delete/start":
      return {
        ...state,
        loading: true,
      };
    case "companies/delete/success":
      return {
        ...state,
        loading: false,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
