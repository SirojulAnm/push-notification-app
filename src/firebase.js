import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAGoRjjioLuwDxpyTPklvD_0AcnHYQUa9U",
    authDomain: "react-course-69144.firebaseapp.com",
    databaseURL: "https://react-course-69144-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-course-69144",
    storageBucket: "react-course-69144.appspot.com",
    messagingSenderId: "799399398600",
    appId: "1:799399398600:web:3d50ac8fda5686f15d69fd"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };