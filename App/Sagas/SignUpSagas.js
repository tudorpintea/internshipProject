import { call, put, take } from "redux-saga/effects";
//import { path } from "ramda";
import { SignUpActions, SignUpTypes } from "../Redux/SignUp";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as firebase from "firebase";
import ImagePicker  from "react-native-image-picker";
import { reject } from "assert";
//import { resolve } from "path";
import RNFetchBlob from 'rn-fetch-blob';
export function* emailSignChanged(action) {
  try {
    const { regi } = action.emailSignChanged;
    const newRegister = {
      email: regi.email
    };
    yield put(SignUpActions.emailSignChangedToState(newRegister));
  } catch (error) {
    console.log(error);
  }
}

export function* uploadImage(action) {
  const { photo } = action.uploadImage;
  try {
    const result = yield call(
      convertAndUpload,
      photo.uri,
      "application/octet-stream"
    );

    yield put(SignUpActions.uploadImageToState(photo));
  } catch (e) {
    alert(e); 
  }
}
export function* savePhoneNumber(api, action) {
  try {
    const { phoneNumber } = action.savePhoneNumber;
    const response = yield call(api.sendSMS, phoneNumber);
    yield put(SignUpActions.savePhoneNumberToState(phoneNumber));
    yield put(SignUpActions.responseToState(response.data));
  } catch (e) {
    alert(e);
  }
}
export function* verifyCode(api, action) {
  try {
    const { code } = action.verifyCode;
    const response = yield call(api.verifyCode, code);
    yield put(SignUpActions.saveCodeToState(code));
    yield put(SignUpActions.responseToState(response.data));
  } catch (e) {
    alert(e);
  }
}


export function* convertAndUpload(uri, mime) {
  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = RNFetchBlob.fs;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;

  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === "ios" ? uri.replace("file://", "") : uri;
    let uploadBlob = null;

    const imageRef = firebase
      .storage()
      .ref("images")
      .child("image_profile_picture");

    fs.readFile(uploadUri, "base64")
      .then(data => {
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then(blob => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then(url => {
        resolve(url);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function* firstNameChanged(action) {
  try {
    const { regi } = action.firstNameChanged;
    const newRegister = {
      firstName: regi.firstName
    };
    yield put(SignUpActions.firstNameChangedToState(newRegister));
  } catch (error) {
    console.log(error);
  }
}
export function* phoneNumberChanged(action) {
  try {
    const { regi } = action.phoneNumberChanged;
    const newRegister = {
      phoneNumber: regi.phoneNumber
    };
    yield put(SignUpActions.phoneNumberChangedToState(newRegister));
  } catch (error) {
    console.log(error);
  }
}

export function* lastNameChanged(action) {
  try {
    const { regi } = action.lastNameChanged;
    const newRegister = {
      lastName: regi.lastName
    };
    yield put(SignUpActions.lastNameChangedToState(newRegister));
  } catch (error) {
    console.log(error);
  }
}

export function* passwordSignChanged(action) {
  try {
    const { regi } = action.passwordSignChanged;
    const newRegister = {
      password: regi.password
    };
    yield put(SignUpActions.passwordSignChangedToState(newRegister));
  } catch (error) {
    console.log(error);
  }
}

export function* confirmPasswordChanged(action) {
  try {
    const { regi } = action.confirmPasswordChanged;
    const newRegister = {
      confirmPassword: regi.confirmPassword
    };
    yield put(SignUpActions.confirmPasswordChangedToState(newRegister));
  } catch (error) {
    console.log(error);
  }
}

export function* registerUser(action) {
  const { regi } = action.registerUser;
  try {
    const authentication = firebase.auth();
    const result = yield call(
      [authentication, authentication.createUserWithEmailAndPassword],
      regi.email,
      regi.password
    );
    const newUser = {
      email: regi.email,
      password: regi.password,
      firstName: regi.firstName,
      lastName: regi.lastName,
      confirmPassword: regi.confirmPassword
    };
    yield put(SignUpActions.registerUserToState(newUser));
  } catch (error) {
    const newFailedUserLogin = {
      email: "",
      password: "",
      firstName: '',
      lastName: '',
      confirmPassword: ''
      
    };
    yield put(SignUpActions.registerUserToState(newFailedUserLogin));
    alert(error);
  }
}
