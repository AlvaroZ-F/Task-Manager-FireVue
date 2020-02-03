import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBgTwekqIF85nOZ1Szx36BQQSUd8MH2y-M",
    authDomain: "task-manager-firevue.firebaseapp.com",
    databaseURL: "https://task-manager-firevue.firebaseio.com",
    projectId: "task-manager-firevue",
    storageBucket: "task-manager-firevue.appspot.com",
    messagingSenderId: "757996794725",
    appId: "1:757996794725:web:e3a4d0c9b636222ff6a78c",
    measurementId: "G-N955SRF5DL"
};

// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })