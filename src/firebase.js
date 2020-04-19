import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCpR2-liPIVqvgOjmpadRhh0U6BxdUar_g",
    authDomain: "pizza-planet-220e7.firebaseapp.com",
    databaseURL: "https://pizza-planet-220e7.firebaseio.com",
    projectId: "pizza-planet-220e7",
    storageBucket: "pizza-planet-220e7.appspot.com",
    messagingSenderId: "470663694575",
    appId: "1:470663694575:web:d8701264a5e3dd79e6331a",
    measurementId: "G-79K3S5RPLW"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export const dbMenuRef = db.collection('menu');
