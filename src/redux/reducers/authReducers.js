const initialState = {
  loader: false,
};
export const authreducers = (state = initialState, action) => {
    console.log("my cuurent action is", action);
  switch (action.type) {
      case "addloader": {
        console.log("openloader is actions");
      return {
        ...state,
        loader: true,
      };
    }
    case "removeloader": {
      return {
        ...state,
        loader: false,
      };
    }
    default: {
      return state;
    }
  }
};
