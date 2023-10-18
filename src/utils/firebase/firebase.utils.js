import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4npraMzeskbNusabDh2RFqCc39NPxYsY",
  authDomain: "crwn-clothing-db-e0213.firebaseapp.com",
  projectId: "crwn-clothing-db-e0213",
  storageBucket: "crwn-clothing-db-e0213.appspot.com",
  messagingSenderId: "945379023816",
  appId: "1:945379023816:web:4f0749982c0593109ebefd",
};

const firebaseApp = initializeApp(firebaseConfig);

//authentication with Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

//sign in user to DB
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user: " + error.message);
    }
  }

  return userDocRef;
};

//authentication with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign in user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  
  return await signInWithEmailAndPassword(auth, email, password)
};