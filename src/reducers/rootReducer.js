const initState = {};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return {
        ...state,
        newState: action.value,
      };

    default:
      return state;
  }
};

export default rootReducer;
