import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC300Zfp_66dYwoJRSpGWoDfK1_eNBx4VY",
  authDomain: "assignment3-5e0d1.firebaseapp.com",
  databaseURL: "https://assignment3-5e0d1.firebaseio.com",
  projectId: "assignment3-5e0d1",
  storageBucket: "assignment3-5e0d1.appspot.com",
  messagingSenderId: "31548772446",
  appId: "1:31548772446:web:20d2dd149bef5a075664cf",
  measurementId: "G-B9ZZKHHS6E",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
