import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfQjJnKJaMTRWhs1356q8pB2-SOyf_2-4",
    authDomain: "slack-clone-e66dc.firebaseapp.com",
    projectId: "slack-clone-e66dc",
    storageBucket: "slack-clone-e66dc.appspot.com",
    messagingSenderId: "676643031345",
    appId: "1:676643031345:web:60622681479972e9d10810",
    measurementId: "G-GY81TRYLCP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };