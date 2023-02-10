import React from 'react'
import { IType } from './type'
import './css/Infomation.css'
import { doc, deleteDoc } from "firebase/firestore"
import { db1 } from '../lib/firebase'
import { useNavigate } from "react-router-dom";

function Infomation({data}:{data:IType}) {

    const navigate = useNavigate()

    function handleDelete(dataID:string) {
        deleteDoc(doc(db1, "test", dataID))
    }

    function onClickEdit(dataID:string){
                navigate(`/edit/${dataID}`)
    }

    function onClickRead(dataID:string){
                navigate(`/read/${dataID}`)
    }

  return (
    
    
        <div className='info-box'>
                <div className='info-side'>
                <div className='first'><p>{data.first}</p></div>
                <div className='first'><p>{data.last}</p></div>
                <div className='symptom'><p>{data.symptom}</p></div>
                <div className='type'><p>{data.type}</p></div>
            </div>
            <div className='but-side'>
                <div className='R'><button onClick={()=>{onClickRead(data.id as string)}}>R</button></div>
                <div className='R'><button onClick={()=>{onClickEdit(data.id as string)}}>E</button></div>
                <div className='R'><button onClick={()=>{handleDelete(data.id as string)}}>D</button></div>
            </div>
        </div>
    
  )
}

export default Infomation

       