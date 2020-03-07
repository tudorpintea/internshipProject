import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import { Actions } from "react-native-router-flux";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  registerUser: ["registerUser"],
  registerUserToState: ["registerUserToState"],
  emailSignChanged: ["emailSignChanged"],
  emailSignChangedToState: ["emailSignChangedToState"],
  firstNameChanged: ["firstNameChanged"],
  firstNameChangedToState: ["firstNameChangedToState"],
  lastNameChanged: ["lastNameChanged"],
  lastNameChangedToState: ["lastNameChangedToState"],
  passwordSignChanged: ["passwordChanged"],
  passwordSignChangedToState: ["passwordChangedToState"],
  confirmPasswordChanged: ["confirmPasswordChanged"],
  confirmPasswordChangedToState: ["confirmPasswordChangedToState"],
  uploadImage: ['uploadImage'],
  uploadImageToState: ['uploadImageToState'],
  savePhoneNumber: ["savePhoneNumber"],
  savePhoneNumberToState: ["savePhoneNumberToState"],
  responseToState: ["responseToState"],
  verifyCode: ["verifyCode"],
  verifyCodeToState: ['verifyCodeToState'],
  convertAndUpload: ['convertAndUpload'],
  convertAndUploadToState: ['convertAndUploadToState'],
  saveCodeToState: ["saveCodeToState"],
  phoneNumberChanged: ['phoneNumberChanged'],
  phoneNumberChangedToState: ["phoneNumberChangedToState"]

});
export const SignUpTypes = Types
export const SignUpActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  regi: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',    
  },
  imageAdress: '',
  phoneNumber: "",
  response: "",
  code: ""
});

/* ------------- Reducers ------------- */

export const registerUserToState = (state = INITIAL_STATE, action) => {
  console.log(action.registerUserToState, "action in SAVETOSTATE");
  return {
    ...state,
    regi: action.registerUser
  };
};

export const uploadImageToState = (state = INITIAL_STATE, action) => {
  console.log(action.uploadImageToState, 'action in takePictureToState');
  return {
    ...state,
    imageAdress: action.uploadImage
  };
};

export const firstNameChangedToState = (state = INITIAL_STATE, action) => {
  console.log(
    action.firstNameChangedToState,
    "actions in firstNameChangedToState"
  );
  return {
    ...state,
    firstName: action.firstNameChangedToState
  };
};
export const phoneNumberChangedToState = (state = INITIAL_STATE, action) => {
  console.log(
    action.phoneNumberChangedToState,
    "actions in firstNameChangedToState"
  );
  return {
    ...state,
    phoneNumber: action.phoneNumberChangedToState
  };
};

export const lastNameChangedToState = (state = INITIAL_STATE, action) => {
  console.log(
    action.lastNameChangedToState,
    "actions in lastNameChangedToState"
  );
  return {
    ...state,
    lastName: action.lastNameChangedToState
  };
};
export const savePhoneNumberToState = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    phoneNumber: action.savePhoneNumberToState
  };
};
export const responseToState = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    response: action.responseToState
  };
};
export const saveCodeToState = (state = INITIAL_STATE, action) => { 
  console.log(action.saveCodeToState, "code in redux");
  return { 
    ...state, 
    code: action.saveCodeToState
  }
}

export const passwordSignChangedToState = (state = INITIAL_STATE, action) => {
  console.log(
    action.passwordSignChangedToState,
    "actions in passwordChangedToState"
  );
  return {
    ...state,
    password: action.passwordSignChangedToState
  };
};
export const confirmPasswordChangedToState = (
  state = INITIAL_STATE,
  action
) => {
  console.log(
    action.confirmPasswordChangedToState,
    "actions in confirmPasswordChangedToState"
  );
  return {
    ...state,
    confirmPassword: action.confirmPasswordChangedToState
  };
};

export const emailSignChangedToState = (state = INITIAL_STATE, action) => {
  console.log(action.emailSignChangedToState, " actions in emailChangedToState");
  return {
    ...state,
    email: action.emailSignChangedToState
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_USER_TO_STATE]: registerUserToState,
  [Types.FIRST_NAME_CHANGED_TO_STATE]: firstNameChangedToState,
  [Types.LAST_NAME_CHANGED_TO_STATE]: lastNameChangedToState,
  [Types.PASSWORD_SIGN_CHANGED_TO_STATE]: passwordSignChangedToState,
  [Types.CONFIRM_PASSWORD_CHANGED_TO_STATE]: confirmPasswordChangedToState,
  [Types.EMAIL_SIGN_CHANGED_TO_STATE]: emailSignChangedToState,
  [Types.UPLOAD_IMAGE_TO_STATE]: uploadImageToState,
  [Types.SAVE_CODE_TO_STATE]: saveCodeToState,
  [Types.RESPONSE_TO_STATE]: responseToState,
  [Types.SAVE_PHONE_NUMBER_TO_STATE]: savePhoneNumberToState,
  [Types.PHONE_NUMBER_CHANGED_TO_STATE]: phoneNumberChangedToState





});
