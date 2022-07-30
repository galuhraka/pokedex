import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD40nTnk7fC6SquzeQUmTexGGDnXsPDXfU",
  authDomain: "final-project-dts-kominfo.firebaseapp.com",
  projectId: "final-project-dts-kominfo",
  storageBucket: "final-project-dts-kominfo.appspot.com",
  messagingSenderId: "362429893858",
  appId: "1:362429893858:web:41f89a660c25f6da25e2bb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
