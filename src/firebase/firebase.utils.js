import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAjlT-l0uC64mb0d4JHcoHOcD0ZNh3dz2I",
  authDomain: "crwn-db-ef8c7.firebaseapp.com",
  projectId: "crwn-db-ef8c7",
  storageBucket: "crwn-db-ef8c7.appspot.com",
  messagingSenderId: "56083384669",
  appId: "1:56083384669:web:3cf1b787ddaaf35b9580b4",
  measurementId: "G-0RMZF7LY39"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if ( !userAuth ) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if ( !snapShot.exists ) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch ( e ) {
      console.error(`error creating user ${e.message}`);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
