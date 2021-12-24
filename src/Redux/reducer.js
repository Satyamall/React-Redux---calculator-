

const initState = {
    counter: 0
  };
  
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case "ADD_COUNTER":
        return {
          ...state,
          counter: state.counter + payload
        };
      case "REDUCE_COUNTER":
        return {
          ...state,
          counter: state.counter - payload
        };
      case "ADD_VALUE":
        return {
          ...state,
          counter: state.counter + payload
        };
      case "SUBTRACT_VALUE":
        return {
          ...state,
          counter: state.counter - payload
        };
      case "MULTIPLY_VALUE":
        return {
          ...state,
          counter: state.counter * payload
        };
      case "DIVIDE_VALUE":
        return {
          ...state,
          counter: state.counter / payload
        };
      default:
        return state;
    }
  };
  
  export { reducer };
  