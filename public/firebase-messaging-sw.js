importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDDp9xkM0-u2Vil4k1_tKMDJX5weWbocEU",
    authDomain: "notificationapp-854cd.firebaseapp.com",
    projectId: "notificationapp-854cd",
    storageBucket: "notificationapp-854cd.appspot.com",
    messagingSenderId: "471169548526",
    appId: "1:471169548526:web:d7578415ce27f811a6f3ff"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();