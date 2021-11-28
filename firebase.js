import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyBhMR8HqhCS1wedsiD7dEPWr_TwvLcUItY',
  authDomain: 'wmojejszafie-blog.firebaseapp.com',
  projectId: 'wmojejszafie-blog',
  storageBucket: 'wmojejszafie-blog.appspot.com',
  messagingSenderId: '104090285887',
  appId: '1:104090285887:web:eb91dc0c4ddc3990f5c58a',
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase
