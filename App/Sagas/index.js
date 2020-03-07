import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";
import FixtureAPI from "../Services/FixtureApi";
import DebugConfig from "../Config/DebugConfig";

/* ------------- Types ------------- */

import { StartupTypes } from "../Redux/StartupRedux";
import { GithubTypes } from "../Redux/GithubRedux";
import { LoginTypes } from "../Redux/Login/LoginRedux";
import { SignUpTypes } from "../Redux/SignUp/SignUpRedux";

/* ------------- Sagas ------------- */

import { startup } from "./StartupSagas";
import { getUserAvatar } from "./GithubSagas";
import { login, saveEmail, savePassword, emailChanged, passwordChanged, changePassword } from "./LoginSagas";
import {
  registerUser,
  firstNameChanged,
  lastNameChanged,
  confirmPasswordChanged,
  emailSignChanged,
  passwordSignChanged,
  uploadImage,
  verifyCode,
  savePhoneNumber,
  convertAndUpload,
  phoneNumberChanged

} from "./SignUpSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    takeLatest(LoginTypes.SAVE_EMAIL, saveEmail),
    takeLatest(LoginTypes.SAVE_PASSWORD, savePassword),
    takeLatest(LoginTypes.LOGIN, login),
    takeLatest(LoginTypes.EMAIL_CHANGED, emailChanged),
    takeLatest(LoginTypes.PASSWORD_CHANGED, passwordChanged),
    takeLatest(LoginTypes.CHANGE_PASSWORD, changePassword),

    takeLatest(SignUpTypes.FIRST_NAME_CHANGED, firstNameChanged),
    takeLatest(SignUpTypes.LAST_NAME_CHANGED, lastNameChanged),
    takeLatest(SignUpTypes.EMAIL_SIGN_CHANGED, emailSignChanged),
    takeLatest(SignUpTypes.PASSWORD_SIGN_CHANGED, passwordSignChanged),
    takeLatest(SignUpTypes.CONFIRM_PASSWORD_CHANGED, confirmPasswordChanged),
    takeLatest(SignUpTypes.REGISTER_USER, registerUser),
    takeLatest(SignUpTypes.UPLOAD_IMAGE, uploadImage),
    takeLatest(SignUpTypes.VERIFY_CODE, verifyCode, api),
    takeLatest(SignUpTypes.SAVE_PHONE_NUMBER, savePhoneNumber, api),
    takeLatest(SignUpTypes.PHONE_NUMBER_CHANGED, phoneNumberChanged), 
    takeLatest(SignUpTypes.CONVERT_AND_UPLOAD, convertAndUpload)   
  ]);
}
