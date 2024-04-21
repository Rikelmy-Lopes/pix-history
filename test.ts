// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore/lite';


// const firebaseConfig = {
//   apiKey: 'AIzaSyDP2IWF_sHtIzj_nAjSGcXrXdQ36uzthUc',
//   authDomain: 'pix-history.firebaseapp.com',
//   projectId: 'pix-history',
//   storageBucket: 'pix-history.appspot.com',
//   messagingSenderId: '940715110939',
//   appId: '1:940715110939:web:e7e0b7d5fe765a7f01febe'
// };
  
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// (async () => {
//   const citiesCol = collection(db, 'pixs');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log(cityList[0].pixs);
// })();


// (async () => {
//   const test = doc(db, 'database/pix-document');
//   const ref = await updateDoc(test, {
//     pix_list: arrayUnion(data)
//   });
//   console.log(ref);
// })();
