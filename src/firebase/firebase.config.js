// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyATLpyH-NaiVhgRgF4KJBt4nOpnNPq3090",
  authDomain: "oto-deals-resale.firebaseapp.com",
  projectId: "oto-deals-resale",
  storageBucket: "oto-deals-resale.appspot.com",
  messagingSenderId: "328348584174",
  appId: "1:328348584174:web:bd959de295aeb08af6cbff"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
