import firebase from 'firebase';
import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);

const firebaseConfig = {
    apiKey: "AIzaSyDDp9xkM0-u2Vil4k1_tKMDJX5weWbocEU",
    authDomain: "notificationapp-854cd.firebaseapp.com",
    projectId: "notificationapp-854cd",
    storageBucket: "notificationapp-854cd.appspot.com",
    messagingSenderId: "471169548526",
    appId: "1:471169548526:web:d7578415ce27f811a6f3ff"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging=firebase.messaging();



export function initNotification(){
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  // Send the token to your server and update the UI if necessary
                  console.log("TOKEN =>",currentToken);
                } else {
                  // Show permission request UI
                  console.log('No registration token available. Request permission to generate one.');
                  
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                
              });
        }
    })
}