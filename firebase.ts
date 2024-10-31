// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmxwGMmNft9u3EibpvL_3HMOMQ6L4YQAo",
  authDomain: "fitathome-bc87b.firebaseapp.com",
  projectId: "fitathome-bc87b",
  storageBucket: "fitathome-bc87b.appspot.com",
  messagingSenderId: "67222463838",
  appId: "1:67222463838:web:60909d06ffc851b7dd5bcf",
  measurementId: "G-FSFT515GJJ",
};

// Initialize Firebase app
const app = getApps()[0] || initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Initialize Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db, analytics };
