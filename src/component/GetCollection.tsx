import React,{useEffect, useState} from 'react'
import { doc, getDoc,collection, getDocs,DocumentData } from "firebase/firestore";
import { QuerySnapshot } from '@firebase/firestore-types';
import { db1 } from '../lib/firebase';
import { IType } from './type';


//เอาทั้ง collection

async function gett() {
  const colRef = collection(db1, "test");
  const docSnap= await getDocs(colRef)
  docSnap.forEach(doc => {
    console.log(doc.data());
  })
  return docSnap
 }
 

function GetCollection() {
  const [data, setData] = useState<IType[]>([]);

  useEffect(() => {
    gett()
    
    
  }, []);
  
  return (
    <div>{}</div>
  )
}

export default GetCollection