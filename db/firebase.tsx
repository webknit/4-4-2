import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

var firebaseConfig = {
    apiKey: 'AIzaSyAW2aDsriFkPnV55B2KeKM-mTDD73umElU',
    authDomain: 'optimum-column-271315.firebaseapp.com',
    databaseURL: 'https://optimum-column-271315-default-rtdb.firebaseio.com',
    projectId: 'optimum-column-271315',
    storageBucket: 'optimum-column-271315.appspot.com',
    messagingSenderId: '584053509558',
    appId: '1:584053509558:web:dcec97afac7f047ce44517'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
