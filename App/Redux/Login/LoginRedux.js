import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { Alert, AsyncStorage } from "react-native";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['login'],
  loginToState: ['loginToState'],
  saveEmail: ['saveEmail'],
  saveEmailToState: ['saveEmailToState'],
  savePassword: ['savePassword'],
  savePasswordToState: ['savePasswordToState'],
  emailChanged: ['emailChanged'],
  emailChangedToState: ['emailChangedToState'],
  passwordChanged: ['passwordChanged'],
  passwordChangedToState: ['passwordChangedToState'],
  changePassword: ['changePassword'],
  changePasswordToState: ['changePasswordToState']
})

export const LoginTypes = Types
export const LoginActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  auth: {
    email: '',
    password: '',
    loginFailed: false,
    changePassword: false
  }
})

/* ------------- Reducers ------------- */ 
export const loginToState = (state = INITIAL_STATE, action) => {
  console.log(action.loginToState, "login te rog io");
  return {
    ...state,
    auth: action.loginToState
  }
}
export const saveEmailToState = (state = INITIAL_STATE, action) => {
  console.log(action.saveEmailToState, "action in saveToState");
  return {
    ...state,
    email: action.saveEmailToState
  };
};
export const savePasswordToState = (state = INITIAL_STATE, action) => {
  console.log(action.savePasswordToState, "action in savePass");
  return {
    ...state,
    password: action.savePasswordToState
  }
}
export const emailChangedToState = (state = INITIAL_STATE, action) => {
  console.log(action.emailChangedToState, "action in emaiChangedToState");
  return {
    ...state,
    email: action.emailChangedToState
  };
};
export const passwordChangedToState = (state = INITIAL_STATE, action) => {
  console.log(action.passwordChangedToState, "action in passChangedToState");
  return {
    ...state,
    password: action.passwordChangedToState
  }
}

export const changePasswordToState = (state = INITIAL_STATE, action) => {
  console.log(action.passwordChangedToState, "action in passChangedToState");
  return {
    ...state,
    password: action.changePasswordToState
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_TO_STATE]: loginToState,
  [Types.SAVE_EMAIL_TO_STATE]: saveEmailToState,
  [Types.SAVE_PASSWORD_TO_STATE]: savePasswordToState,
  [Types.EMAIL_CHANGED_TO_STATE]: emailChangedToState,
  [Types.PASSWORD_CHANGED_TO_STATE]: passwordChangedToState,
  [Types.CHANGE_PASSWORD_TO_STATE]: changePasswordToState
})
