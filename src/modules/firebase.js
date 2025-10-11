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
import { showSpinner, giveFeedBack } from "./dom-stuff";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVEAyXVAiM5NPL2bdbegZdIUYROZQJ-YE",
  authDomain: "case-be-heard-website.firebaseapp.com",
  projectId: "case-be-heard-website",
  storageBucket: "case-be-heard-website.firebasestorage.app",
  messagingSenderId: "765706349267",
  appId: "1:765706349267:web:5d5d15965005748f160226",
  measurementId: "G-7G9PN4QGWY",
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
    console.log("Successfully added to waitlist!");
    giveFeedBack(true);
  } catch (error) {
    console.error("Error adding to waitlist: ", error);
    giveFeedBack(false);
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
    console.log("Live waitlist count:", count);
  });
}
