import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxQzTw9p3x1KPIP3VyotA6DLrrLO-8gxE",
    authDomain: "shop-crown-db.firebaseapp.com",
    databaseURL: "https://shop-crown-db.firebaseio.com",
    projectId: "shop-crown-db",
    storageBucket: "shop-crown-db.appspot.com",
    messagingSenderId: "783707644580",
    appId: "1:783707644580:web:9315ddd62bdc8acdcc7c31"
  }; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 


