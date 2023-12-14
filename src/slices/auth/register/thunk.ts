//Include Both Helper File with needed methods

// action
import {

  resetRegisterFlagChange,
  // apiErrorChange
} from "./reducer";

// initialize relavant method of both Auth

// Is user register successfull then direct plot user in redux.

export const resetRegisterFlag = () => {
  try {
    const response = resetRegisterFlagChange();
    return response;
  } catch (error) {
    return error;
  }
};

// export const apiError = () => async (dispatch : any) => {
//   try {
//     const response = dispatch(apiErrorChange(false));
//     return response;
//   } catch (error) {
//     return error;
//   }
// };