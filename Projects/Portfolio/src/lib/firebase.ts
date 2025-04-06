import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyDV3h_obrtKRJcaUvNS_1k0zmilLoPbeJg",
  authDomain: "portfolio-dax.firebaseapp.com",
  databaseURL: "https://portfolio-dax-default-rtdb.firebaseio.com",
  projectId: "portfolio-dax",
  storageBucket: "portfolio-dax.firebasestorage.app",
  messagingSenderId: "960104839410",
  appId: "1:960104839410:web:8e0bef2a2c5708985e386b  "
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);