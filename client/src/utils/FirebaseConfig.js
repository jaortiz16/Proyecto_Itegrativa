import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAw0oz_2Cxe_-Ij3TxWGeL9MgX_QLlPpbA",
  authDomain: "whatsapp-clone-2ae11.firebaseapp.com",
  projectId: "whatsapp-clone-2ae11",
  storageBucket: "whatsapp-clone-2ae11.appspot.com",
  messagingSenderId: "897172734914",
  appId: "1:897172734914:web:b958a974ccd17474afcc5b",
  measurementId: "G-2EQCDZMF1W"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
