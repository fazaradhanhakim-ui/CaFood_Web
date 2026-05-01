// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    query, 
    where,
    orderBy,
    limit,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 🔥 KONFIGURASI FIREBASE ANDA (dari Firebase Console) 🔥
const firebaseConfig = {
    apiKey: "AIzaSyC9R1o7m4-seOsdy_MOH9GfwMgFlHHoNvg",
    authDomain: "cafood-f7f8a.firebaseapp.com",
    projectId: "cafood-f7f8a",
    storageBucket: "cafood-f7f8a.firebasestorage.app",
    messagingSenderId: "584252854200",
    appId: "1:584252854200:web:e915f49751a5aa34fb094d",
    measurementId: "G-6H1XRLY0KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// EXPORT SEMUA FUNGSI YANG DIBUTUHKAN
export { 
    db, 
    auth,
    // Firestore functions
    collection, 
    doc, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    query, 
    where,
    orderBy,
    limit,
    setDoc,
    // Auth functions
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
};