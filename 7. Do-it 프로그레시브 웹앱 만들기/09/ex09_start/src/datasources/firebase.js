import firebase from 'firebase/app'
import 'firebase/firebase-database'

const oDB = firebase.initializeApp({
    databaseURL: "https://pwa-to-do-798c6-default-rtdb.firebaseio.com",
  
}).database()

export const oTodosinDB = oDB.ref('todos')
