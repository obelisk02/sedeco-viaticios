import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCoQ7GygkFJWl4uOHTQOYmcWQwFrwopMuo",
    authDomain: "viaticos-4cc2c.firebaseapp.com",
    projectId: "viaticos-4cc2c",
    storageBucket: "viaticos-4cc2c.appspot.com",
    messagingSenderId: "287524196206",
    appId: "1:287524196206:web:fb4eac753e073f72babb7f"
  };


  initializeApp(firebaseConfig);

  const db = getFirestore();



  const colRef = collection(db, "autos");

  getDocs(colRef)
    .then((snapshot)=>{
        console.log(snapshot)
        let autosArr = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id})
        });
        console.log(autosArr)
    })
    .catch(err => {
        console.log(err.message)
    })