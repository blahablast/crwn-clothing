import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBzkfb0SL2xIn6UFgZqA2uDwBGgPwq82DM',
  authDomain: 'crwn-clothing-db-54ae2.firebaseapp.com',
  projectId: 'crwn-clothing-db-54ae2',
  storageBucket: 'crwn-clothing-db-54ae2.appspot.com',
  messagingSenderId: '629137449327',
  appId: '1:629137449327:web:25fea1c43f080fac38c89a'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
