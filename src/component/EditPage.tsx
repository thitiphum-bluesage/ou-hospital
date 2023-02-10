import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc ,setDoc,updateDoc} from "firebase/firestore";
import { db1 } from '../lib/firebase';
import { async } from '@firebase/util';
import { IType } from './type';
import { useNavigate } from 'react-router-dom';
import './css/EditPage.css'

function EditPage() {
    
    const navigete = useNavigate()
    const startForm = {first:'',last:'',id:'',symptom:'',deepInfo:'',type:''}

    const [form,setForm] = useState<IType>(startForm)
    const [editD,setEditD] = useState<IType>({symptom:'',deepInfo:'',type:''})
    let {id} = useParams()

    
    
    async function getEachData(x:string){
        const docRef = doc(db1, "test", x);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const newData = {
                id: docSnap.id,
                ...docSnap.data(),
              }
            setForm(newData)
                                       
            return({
                first: docSnap.data().first,
                last: docSnap.data().last,
                id: docSnap.data().id,
                symptom: docSnap.data().symptom,
                deepInfo: docSnap.data().deepInfo,
                type: docSnap.data().type
              }           
              )  
              
                 
          } else {
            console.log("No such document!");
          }
          
    }

    useEffect(()=>{
        if (id) {
            getEachData(id)
            }}
    ,[])

    useEffect(() => {
      setEditD({symptom: form.symptom, deepInfo: form.deepInfo,type: form.type});
    }, [form]) //ต้องรอให้ setForm ก่อนค่อยเอามา set ID ได้
  
    
    async function editDoc(x:string,newEdit:object) {
      await updateDoc(doc(db1, "test", x), newEdit);
    }

    function handleOnChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
      setEditD({...editD,[e.target.name]:e.target.value})
    }
    async function handleOnSubmit(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      
      if(id){
        await editDoc(id,editD)
        }
      navigete('/')
    }
   

  return (
    <div className='edit-form'>
       <div>
        <h3>Editpage of {form.first} {form.last}</h3>
       </div>
       <form onSubmit={handleOnSubmit}>
        <label htmlFor="symptom">Edit Symptom</label>
        <input type="text" name='symptom' value={editD.symptom} onChange={handleOnChange}/>
        <label htmlFor="type">Type</label>
        <input type="text" name='type' value={editD.type} onChange={handleOnChange}/>
        <label htmlFor="deepInfo">Edit Deep-Info</label>
        <textarea name="deepInfo" cols={30} rows={10} value={editD.deepInfo} onChange={handleOnChange}></textarea>
        <button type="submit">Confirm Edit</button>
       </form>
    </div>
  )
}

export default EditPage