import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWaQzHZd8wSXyUx9nrNJE6jD8klvPX4P8",
  authDomain: "restaurantapp-92532.firebaseapp.com",
  databaseURL: "https://restaurantapp-92532-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-92532",
  storageBucket: "restaurantapp-92532.appspot.com",
  messagingSenderId: "304138535044",
  appId: "1:304138535044:web:66a698aa9d05a4f288c2d1"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
