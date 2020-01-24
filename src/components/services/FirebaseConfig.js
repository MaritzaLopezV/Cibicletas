import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig={
    apiKey: "AIzaSyDMrdbYo2DMqtPyJUQdZO9Ho_vs4791CnQ",
    authDomain: "cibicletas.firebaseapp.com",
    databaseURL: "https://cibicletas.firebaseio.com",
    projectId: "cibicletas",
    storageBucket: "cibicletas.appspot.com",
    messagingSenderId: "822619317907",
    appId: "1:822619317907:web:f97fcc36140a4e77cccf66",
    measurementId: "G-9KG1691M2N"
}

firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase