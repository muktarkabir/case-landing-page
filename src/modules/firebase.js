import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { showSpinner } from "./dom-stuff";

// Your web app's Firebase configuration for reaaaal
const firebaseConfig = {
  apiKey: "AIzaSyCAOAVtJhkB2srABaRg42x20hVngH9HGeI",
  authDomain: "case-landing-page-45db9.firebaseapp.com",
  projectId: "case-landing-page-45db9",
  storageBucket: "case-landing-page-45db9.firebasestorage.app",
  messagingSenderId: "846517098023",
  appId: "1:846517098023:web:74286111622b732cd46002",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const waitlistRef = collection(db, "waitlist");

export async function joinWaitlist(email) {
  showSpinner(true);
  try {
    await addDoc(waitlistRef, {
      email: email,
      timestamp: serverTimestamp(),
    });
    console.log("✅ Successfully added to waitlist!");
  } catch (error) {
    console.error("❌ Error adding to waitlist: ", error);
  } finally {
    showSpinner(false);
  }
}

export async function getWaitlist() {
  const q = query(waitlistRef, orderBy("timestamp", "asc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Real-time waitlist counter
export function listenForWaitlistCount() {
  const q = query(waitlistRef); // simple query to listen to entire collection
  onSnapshot(q, (snapshot) => {
    const count = snapshot.size; // total documents in waitlist
    document.getElementById("waitlistCount").innerText = count;
    console.log("🔥 Live waitlist count:", count);
  });
}
