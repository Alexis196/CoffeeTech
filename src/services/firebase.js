import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCm34HES83EF_erwOfvu9gg6U1ByoDAaSU",
    authDomain: "coffee-tech-69ea5.firebaseapp.com",
    projectId: "coffee-tech-69ea5",
    storageBucket: "coffee-tech-69ea5.appspot.com",
    messagingSenderId: "61562489524",
    appId: "1:61562489524:web:21e31ad75c4a723262e5e1"
};


const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function asyncdata() {
    const productsRef = collection(db, "productos");
    const documentsSnapshot = await getDocs(productsRef);
    const documents = documentsSnapshot.docs
    const producto = documents.map(item => ({ ...item.data(), id: item.id }));
    return (producto);
}

async function getProductData(id) {
    const docRef = doc(db, "productos", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
        throw new Error("No encontramos ese producto.");
    }
}

export { asyncdata, getProductData }