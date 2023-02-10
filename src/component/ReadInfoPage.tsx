import exp from "constants";
import React,{useState,useEffect} from "react";
import { doc, getDoc ,deleteDoc} from "firebase/firestore";
import { db1 } from "../lib/firebase";
import { useParams,useNavigate } from "react-router-dom";
import './css/ReadInfoPage.css'


function ReadInfoPage() {

    const navigete = useNavigate()
    const startForm = {first:'',last:'',id:'',symptom:'',deepInfo:'',type:''}

    const [info,setInfo] = useState(startForm)
    
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
              setInfo({
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
        if(id){getEachData(id)}
    },[])

    function onClickEdit(){
        navigete(`/edit/${info.id}`)
    }
    function onClickDelete(dataID:string){
        deleteDoc(doc(db1, "test", dataID))
        navigete(`/`)
    }

    return(
        <div className="info-page">
            <div><h2>{info.first} {info.last} Infomation</h2></div>
            <div>
                <div><p>firstname : {info.first}</p></div>
                <div><p>lastname : {info.last}</p></div>
                <div><p>symptom : {info.symptom}</p></div>
                <div><p>deep infomation : {info.deepInfo}</p></div>
                <div><p>Type : {info.type}</p></div>
            </div>
            <div>
                <button onClick={onClickEdit}>Edit</button>
                <button onClick={()=>{onClickDelete(info.id)}}>Delete</button>
            </div>
        </div>
    )
}

export default ReadInfoPage