import firebase from "firebase"; 
import ReduxSagaFirebase from 'redux-saga-firebase'; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFp2JnKZfdFv4UGOcwGH0tZ31UiFtm5oc",
    authDomain: "deliveryrally-2f149.firebaseapp.com",
    databaseURL: "https://deliveryrally-2f149.firebaseio.com",
    projectId: "deliveryrally-2f149",
    storageBucket: "deliveryrally-2f149.appspot.com",
    messagingSenderId: "133297062848"
  });

  const rsf = new ReduxSagaFirebase(firebaseApp); 

  export default rsf; 