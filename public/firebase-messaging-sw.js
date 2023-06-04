importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAGoRjjioLuwDxpyTPklvD_0AcnHYQUa9U",
    authDomain: "react-course-69144.firebaseapp.com",
    databaseURL: "https://react-course-69144-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-course-69144",
    storageBucket: "react-course-69144.appspot.com",
    messagingSenderId: "799399398600",
    appId: "1:799399398600:web:3d50ac8fda5686f15d69fd"
});

const messaging = firebase.messaging();

// Optional: Customize notification behavior
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  // const { title, body } = payload.notification;

  // self.registration.showNotification(title, {
  //   body
  // });
});
