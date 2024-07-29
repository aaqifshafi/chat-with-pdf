import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCDkuGZRXAA_w473GZTpQJIxUX2z5Q3zDg",
  authDomain: "chat-with-pdf-5a726.firebaseapp.com",
  projectId: "chat-with-pdf-5a726",
  storageBucket: "chat-with-pdf-5a726.appspot.com",
  messagingSenderId: "360845192202",
  appId: "1:360845192202:web:73565426f93a24a9cc03f3",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
