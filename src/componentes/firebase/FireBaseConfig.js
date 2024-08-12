import {initializeApp} from "firebase/app";
import {getAuth, GithubAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBNDENXKaMjUp-_ZLRq9_z8R3Jy21jJb24",
    authDomain: "perfumeriaxime.firebaseapp.com",
    projectId: "perfumeriaxime",
    storageBucket: "perfumeriaxime.appspot.com",
    messagingSenderId: "257982393392",
    appId: "1:257982393392:web:3e5253c29468c2ac1591f5",
    measurementId: "G-Q4X5WBW2W7"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GithubAuthProvider();

export {auth, provider}