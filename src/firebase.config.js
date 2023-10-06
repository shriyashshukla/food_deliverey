import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFArv13KYIbRDCbDS56ISYKQtMipOIW9s",
  authDomain: "restaurantapp-20687.firebaseapp.com",
  databaseURL: "https://restaurantapp-20687-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-20687",
  storageBucket: "restaurantapp-20687.appspot.com",
  messagingSenderId: "1073942223793",
  appId: "1:1073942223793:web:2bdd9ecba0f24c8d91fb90"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
