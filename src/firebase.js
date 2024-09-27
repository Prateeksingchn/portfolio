import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUhZVLYNcGuDFWHf_iky1xX-Nf-kYGA1s",
    authDomain: "portfolio-d9078.firebaseapp.com",
    projectId: "portfolio-d9078",
    storageBucket: "portfolio-d9078.appspot.com",
    messagingSenderId: "361968741013",
    appId: "1:361968741013:web:f644a2277670127af4899c",
    measurementId: "G-RWZZT6ZHNH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };