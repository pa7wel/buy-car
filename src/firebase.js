import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARXvWEhSeKeQtHyIel3TxnTANlteiCYhI",
  authDomain: "buy-car-95025.firebaseapp.com",
  databaseURL: "https://buy-car-95025.firebaseio.com",
  projectId: "buy-car-95025",
  storageBucket: "buy-car-95025.appspot.com",
  messagingSenderId: "539108124201",
  appId: "1:539108124201:web:fc4076dccf460e78ab1e38"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

window.firebase = firebase;

export default firebase;