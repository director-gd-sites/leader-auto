import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDmGFDaXfkUS-U3MQQbRYVXcqNqlhwsWNQ",
    authDomain: "leader-auto.firebaseapp.com",
    databaseURL: "https://leader-auto.firebaseio.com",
    projectId: "leader-auto",
    storageBucket: "leader-auto.appspot.com",
    messagingSenderId: "166071608290",
    appId: "1:166071608290:web:d9b9e2be1092dbd2860fbb",
    measurementId: "G-64RJKT4W5J"
};
export const fire = firebase.initializeApp(config);
