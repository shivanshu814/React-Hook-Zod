// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import cred from './creds.json'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: cred.api_key,
  authDomain: cred.auth_domain,
  projectId: cred.project_id,
  storageBucket: cred.storage_bucket,
  messagingSenderId: cred.messagingsender_id,
  appId: cred.app_id,
  measurementId:cred.app_measurement_id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);