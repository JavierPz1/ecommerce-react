import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCr1DCiDKVZDOi41ASD6W9QNZmHDYsM-8A",
    authDomain: "ecommerce-react-jp.firebaseapp.com",
    projectId: "ecommerce-react-jp",
    storageBucket: "ecommerce-react-jp.firebasestorage.app",
    messagingSenderId: "985223378059",
    appId: "1:985223378059:web:cb9b4bb7cee3e79fe2108e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);