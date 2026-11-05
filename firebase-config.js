
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGjKZYEAt-D2eB9qFvfgoaqMBP9oQfynU",
  authDomain: "amigos-cleaning.firebaseapp.com",
  projectId: "amigos-cleaning",
  storageBucket: "amigos-cleaning.firebasestorage.app",
  messagingSenderId: "520482975838",
  appId: "1:520482975838:web:ea6e9484ea198e6bb304cf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
