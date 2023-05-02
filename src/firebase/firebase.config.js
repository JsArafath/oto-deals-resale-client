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
  apiKey: "AIzaSyDrINIFuE6Wryvviv3Z1BQwp7xHJAeBtjk",
  authDomain: "oto-deals-resale-bc291.firebaseapp.com",
  projectId: "oto-deals-resale-bc291",
  storageBucket: "oto-deals-resale-bc291.appspot.com",
  messagingSenderId: "520874942031",
  appId: "1:520874942031:web:954e7e893e77836ed4543a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
