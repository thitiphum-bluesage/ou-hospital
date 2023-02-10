import React, { useState } from "react";
import { IType } from './type';
import { db2,db1 } from "../lib/firebase";
import { collection,addDoc } from "firebase/firestore";
import { doc, setDoc,  } from "firebase/firestore"; 
import { getDatabase, ref, set } from "firebase/database";
import { async } from "@firebase/util";
import './css/Add.css'
import { useNavigate } from "react-router-dom";


function Add() {
    const title0 = {first:'',last:'',id:'',symptom:'',deepInfo:''}
    const [title,setTitle]=useState<IType>(title0);

    const navigete = useNavigate()

    //add แบบ random id
    async function addData(x:IType){
        
        const newData = await addDoc(collection(db1,'test'),{...x})
    }

    //add แบบ กำหนดid
    async function addData2(x:IType){
        let UID = "";
        if (title.first && title.last) {
            UID = title.first + title.last[0];
            
        }
        
        const newData2 = await setDoc(doc(db1,'test',UID),{...x,id:UID})
    }
    

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle({ ...title, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        addData2(title)
        setTitle(title0)
        navigete('/') //ส่งกลับไปหหน้าหลัก
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className='add-form'>
                <input type="text" placeholder="First" name="first" value={title.first} onChange={handleOnChange}/>
                <input type="text" placeholder="Last" name="last" value={title.last} onChange={handleOnChange}/>
                <input type="text" placeholder="Symptom" name="symptom" value={title.symptom} onChange={handleOnChange}/>
                <input type="text" placeholder="Type" name="type" value={title.type} onChange={handleOnChange}/>
                <textarea name="deepInfo" placeholder="DEEP-INFO" rows={4} cols={40} onChange={handleOnChange}></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Add
