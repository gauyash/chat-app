import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const config = {
    apiKey: "AIzaSyB0i0UwVi0DLWdnJKej9jzBzocwvxjpR88",
    authDomain: "chat-web-app-f2046.firebaseapp.com",
    projectId: "chat-web-app-f2046",
    storageBucket: "chat-web-app-f2046.appspot.com",
    messagingSenderId: "63696965673",
    appId: "1:63696965673:web:dd5984c10b0d692d0f4c38"
  };


const app= initializeApp(config);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const database=getDatabase(app)
export {auth,provider,database}