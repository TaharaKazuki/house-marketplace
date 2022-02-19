import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4Xs4_9Plk_6-3WnUAWn_PygJHHMMpNk8',
  authDomain: 'house-marketplace-app-d7dd4.firebaseapp.com',
  projectId: 'house-marketplace-app-d7dd4',
  storageBucket: 'house-marketplace-app-d7dd4.appspot.com',
  messagingSenderId: '770531056514',
  appId: '1:770531056514:web:d932b7ec9fe980d5c24d9b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
