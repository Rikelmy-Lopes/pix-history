import { IPix } from '@/@types/pix';
import { db } from '@/db/firebase';
import { arrayUnion, getDoc, updateDoc, doc, } from 'firebase/firestore/lite';

export async function getAllPixs() {
  const docRef = doc(db, 'database/pix-document');
  const docSnap = await getDoc(docRef);
  return (docSnap.exists() ? docSnap.data().pix_list : []) as IPix[];
}

export async function updatePix(data: IPix) {
  const pixDoc = doc(db, 'database/pix-document');
  await updateDoc(pixDoc, {
    pix_list: arrayUnion(data)
  });
}

(async () => {
  await updatePix({ title: 'oola', 'message': 'tudo', createdAt: 125});
})();