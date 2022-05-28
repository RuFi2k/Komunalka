import { firebase } from '@react-native-firebase/database'

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const database = firebase.database()
