import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0j8qiw7t2Z_ZCdvHX3_JbCdQvmxQLj5s",
  authDomain: "caribou-bikes.firebaseapp.com",
  projectId: "caribou-bikes",
  storageBucket: "caribou-bikes.appspot.com",
  messagingSenderId: "473730628816",
  appId: "1:473730628816:web:141ad0e11cb48661cbf2d5",
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;
