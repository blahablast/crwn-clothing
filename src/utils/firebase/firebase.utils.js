import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAV0poIlLyMGiM7-mU711eJqOrzlytrk9A',
  authDomain: 'crwn-clothing-db-d0eb9.firebaseapp.com',
  projectId: 'crwn-clothing-db-d0eb9',
  storageBucket: 'crwn-clothing-db-d0eb9.appspot.com',
  messagingSenderId: '889302510483',
  appId: '1:889302510483:web:b2a760d5557137c7449666'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// Once this is called and we navigate away, the original page unmounts.
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

// Instantiate this singleton into db
export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // this function infers there's a displayName and email. This needs to come from our sign-up-form to actually match.
  if (!userAuth) return
  // doc requires 3 parameters. Give me the document reference from the db, which will be in the 'users' collection, with this user auth uid.
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  // first need to check if user data exists. If it does, return userDocRef.
  // If it does NOT exist, I want to set the document with the data from user auth in my collection (in the db) and set it with usersnapshot.
  if (!userSnapshot.exists()) {
    // this is similar to the setState in sign-up-form
    const { displayName, email } = userAuth
    const createdAt = new Date()

    // try catch means to try something async
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
