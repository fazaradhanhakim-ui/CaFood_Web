// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Ganti dengan konfigurasi dari Firebase Console Anda
const firebaseConfig = {
  apiKey: "AIzaSyC9R1o7m4-seOsdy_MOH9GfwMgFlHHoNvg",
  authDomain: "cafood-f7f8a.firebaseapp.com",
  projectId: "cafood-f7f8a",
  storageBucket: "cafood-f7f8a.firebasestorage.app",
  messagingSenderId: "584252854200",
  appId: "1:584252854200:web:e915f49751a5aa34fb094d",
  measurementId: "G-6H1XRLY0KB"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

console.log('✅ Firebase Connected!');