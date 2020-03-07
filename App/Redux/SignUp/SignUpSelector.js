import { createSelector } from 'reselect';

const getSignUpState = state => state.registerUser
const getPhotoState = state => state.uploadImage

export const regi = createSelector(
    getSignUpState,
    state => state.regi
)
export const photo = createSelector(
    getPhotoState,
    state => state.photo
)
export const code = createSelector(
    getSignUpState,
    state=>state.code
)
export const response = createSelector(
    getSignUpState,
    state => state.response
);
export const phoneNumber = createSelector(
    getSignUpState,
    state => state.phoneNumber
  );