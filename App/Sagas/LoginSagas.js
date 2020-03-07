import { call, put, take } from "redux-saga/effects";
import { path } from "ramda";
import { LoginActions, LoginTypes } from "../Redux/Login";
import * as firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import { eventChannel, channel } from "redux-saga";
import RNFetchBlob from 'rn-fetch-blob';



 /*export function* login(action) {
   console.log("MERGE")
  const { auth } = action.login;
  try {
    const authentication = firebase.auth();
    const result = yield call(
      [authentication, authentication.signInWithEmailAndPassword],
      auth.email,
      auth.password
    );
    const newUser = {
      email: auth.email,
      password: auth.password,
      loginFailed: false
    };
    yield put(LoginActions.loginToState(newUser));
  } catch (error) {
    const newFailedUserLogin = {
      email: "",
      password: "",
      loginFailed: true
    };
    yield put(LoginActions.loginToState(newFailedUserLogin));
    alert(error);
  }
}

*/
export function* saveEmail(action) {
  try {
    const { auth } = action.saveEmail;
    const newAuth = {
      email: auth.email
    };
    yield put(LoginActions.saveEmailToState(newAuth));
  } catch (error) {
    console.log(error);
  }
}

export function* savePassword(action) {
  try {
    const { auth } = action.savePassword;
    const newAuth = {
      email: auth.email
    };
    yield put(LoginActions.savePasswordToState(newAuth));
  } catch (error) {
    console.log(error);
  }
}

export function* emailChanged(action) {
  try {
    const { auth } = action.emailChanged;
    const newAuth = {
      email: auth.email
    };
    yield put(LoginActions.emailChangedToState(newAuth));
  } catch (error) {
    console.log(error);
  }
}

export function* passwordChanged(action) {
  try {
    console.log("intra in functiouneee");
    const { auth } = action.passwordChanged;
    const newAuth = {
      password: auth.password
    };
    yield put(LoginActions.passwordChangedToState(newAuth));
  } catch (error) {
    console.log(error);
  }
}
export function* login(action) {
  try {
  const { auth } = action.login;
  console.log("something");
 
    yield call(loginToFirebase, auth.email, auth.password);
  } catch (error) {
    /*const newFailedUserLogin = {
      email: "",
      password: "",
      loginFailed: true
    };
    yield put(LoginActions.loginToState(newFailedUserLogin));*/
    alert(error);
  }
}

export function* loginToFirebase(email, password) {
  console.log(email, password, "entered logintofirebase");
  /*return new Promise(resolve => {
    const authentication = firebase.auth();
    authentication
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve(true);
      })
      .catch(error => {
        resolve(error);
      });
  });
*/
  const customChannel = channel();

  const authentication = firebase.auth();

  const newUser = {
    email: email,
    password: password,
    loginFailed: false
  };

  const newFailedUserLogin = {
    email: "",
    password: "",
    loginFailed: true
  };
  //try {
  authentication
    .signInWithEmailAndPassword(email, password)
    .then(()=>{
      customChannel.put(LoginActions.loginToState(newUser))
    })
    .catch(error => {
      console.log(error);
      customChannel.put(LoginActions.loginToState(newFailedUserLogin));
    });
  //    console.log("here");
  //  } catch (error) {
  //   alert(error);
  //   customChannel.put(LoginActions.loginToState(newFailedUserLogin));
  //  }
  console.log("kasfkasjfaks");
  while (true) {
    const action = yield take(customChannel);
    yield put(action);
    console.log(action, "action");
  }
}


export function* changePassword(action) {
  try {
    const authentication = firebase.auth();
    const { auth } = action.changePassword;
    const newAuth = {
      email: auth.email,
      passwordChanged: true
    };
    const result = yield call(
      [authentication, authentication.sendPasswordResetEmail],
      auth.email
    );
    yield put(LoginActions.loginToState(newAuth));
  } catch (e) {
    alert(e);
  }
}

