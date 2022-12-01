import firebase from 'firebase/compat/app';
// import 'firebase/database'
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDevFeT6gxSfcB_XgX7iUToQ7EVBa-DNHs",
    authDomain: "react-contact-2e7ef.firebaseapp.com",
    databaseURL: "https://react-contact-2e7ef-default-rtdb.firebaseio.com",
    projectId: "react-contact-2e7ef",
    storageBucket: "react-contact-2e7ef.appspot.com",
    messagingSenderId: "959575420208",
    appId: "1:959575420208:web:e9d7e9f15fa4b6c9b8acf5"
  };

 const fireDb= firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();