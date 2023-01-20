const initState = { data: [] };
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
