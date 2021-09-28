import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
    apiKey: "AIzaSyD1A_3HZh8sc5okdUsqYNjLs51c4GvoR7Y",
    authDomain: "test-2daa1.firebaseapp.com",
    projectId: "test-2daa1",
    storageBucket: "test-2daa1.appspot.com",
    messagingSenderId: "712894304417",
    appId: "1:712894304417:web:e924c7c96b8d689b0360e0"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);