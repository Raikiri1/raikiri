import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALZED_SUCCESS = "INITIALZED_SUCCESS";

let initialState = {
  initialzed: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALZED_SUCCESS:
      return {
        ...state,
        initialzed: true
      };

    default:
      return state;
  }
};

export const initialzedSuccess = () => ({
  type: INITIALZED_SUCCESS
});

export const initialzeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
 Promise.all([promise])
 .then(() => {
  dispatch(initialzedSuccess()); 
});

   
};



export default appReducer;
