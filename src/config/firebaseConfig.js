import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB24FjMMwx3Zd7RPuvKW6sFPr1wJ9OtbgE",
    authDomain: "relojessafiro.firebaseapp.com",
    projectId: "relojessafiro",
    storageBucket: "relojessafiro.appspot.com",
    messagingSenderId: "394437634381",
    appId: "1:394437634381:web:ee54389a26aa8f3b426f04"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsCollection = collection(db, 'products');

export const getProducts = async() => {
    const querySnapshot = await getDocs(productsCollection);
    return querySnapshot.docs.map(doc => doc.data());
};
