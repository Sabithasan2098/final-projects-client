// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.envVITE_apiKey,
//   authDomain: import.meta.envVITE_authDomain,
//   projectId: import.meta.envVITE_projectId,
//   storageBucket: import.meta.envVITE_storageBucket,
//   messagingSenderId: import.meta.envVITE_messagingSenderId,
//   appId: import.meta.envVITE_appId,
// };

// Initialize Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC69fFT8saAOphFUqC0xR-sm-ZlHVxlK78",
  authDomain: "bistro-boss-23dab.firebaseapp.com",
  projectId: "bistro-boss-23dab",
  storageBucket: "bistro-boss-23dab.appspot.com",
  messagingSenderId: "833222625867",
  appId: "1:833222625867:web:772a3170ac2afd90e61bce",
};

// Initialize Firebase
// // const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
