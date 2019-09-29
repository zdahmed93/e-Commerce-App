import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { async } from 'q';

const config = {
    apiKey: "AIzaSyAg6CWs85VilWELwSYFuWHWRRsx0Q7x6Ys",
    authDomain: "e-com-app-8eb8d.firebaseapp.com",
    databaseURL: "https://e-com-app-8eb8d.firebaseio.com",
    projectId: "e-com-app-8eb8d",
    storageBucket: "",
    messagingSenderId: "908864091538",
    appId: "1:908864091538:web:ae5f11481ed2b3cb"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error in creating user', error.message)
    }
  }
  return userRef;
}

export default firebase;

