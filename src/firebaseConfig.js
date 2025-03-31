import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1Sch9mmqVYoIwsv93zv3hTDJZer8RK1Q",
  authDomain: "ecommerce-react-9ffa3.firebaseapp.com",
  projectId: "ecommerce-react-9ffa3",
  storageBucket: "ecommerce-react-9ffa3.appspot.com",
  messagingSenderId: "259169747211",
  appId: "1:259169747211:web:4b0a802a0580ba84bb220e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
