import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB24FjMMwx3Zd7RPuvKW6sFPr1wJ9OtbgE",
    authDomain: "relojessafiro.firebaseapp.com",
    projectId: "relojessafiro",
    storageBucket: "relojessafiro.appspot.com",
    messagingSenderId: "394437634381",
    appId: "1:394437634381:web:ee54389a26aa8f3b426f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);