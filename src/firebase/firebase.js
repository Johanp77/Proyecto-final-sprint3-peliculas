import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApe5-lKeUE6VDqp7YDLgOuT4l2bXzjbXY",
    authDomain: "sprint3-a6400.firebaseapp.com",
    projectId: "sprint3-a6400",
    storageBucket: "sprint3-a6400.appspot.com",
    messagingSenderId: "259537991741",
    appId: "1:259537991741:web:eddf94b6dc8e86ce94d254",
    measurementId: "G-4B8JB1970X"
  };

  const app = initializeApp(firebaseConfig);
  const google = new GoogleAuthProvider();
const DB = getFirestore();
const analytics = getAnalytics(app);

export {
    app,
    google,
    DB
}