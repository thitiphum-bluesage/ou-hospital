import React, { useState, useEffect } from 'react';
import { onSnapshot, DocumentData, QuerySnapshot, collection  } from 'firebase/firestore';
import { db1 } from '../lib/firebase';
import { IType } from './type';
import Infomation from './Infomation';
import './css/Read.css'
import './css/Infomation.css'
import Select from 'react-select'

function Read() {
  
    let [allData, setAllData] = useState<IType[]>([]);

    useEffect(() => {
        onSnapshot(collection(db1,'test'), (snapshot: QuerySnapshot<DocumentData>) => {
            setAllData(
              snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              })
            );
          });
    }, []);

    console.log(allData);

    const [type,setType] = useState('')

    
    const options = [
      { value: '', label: '-' },
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'C', label: 'C' }
    ]
    const SelectComponent = () => (
      <Select options={options} onChange={(choice) => {
        if (choice) {
          setType(choice.value);
        }
        else{setType('')}
      }} />
    )
    let useData = allData
    if (type !== '') {
      useData = allData.filter((x) => x.type === type);
      console.log(useData)
    }

  
    
    
    return (
    <div className='container'>
      <h2>read page</h2>
      <label htmlFor="type">select type</label>
      <div className="type"><SelectComponent/></div>
      <div className='info-box'>
                <div className='info-side'>
                <div className='first'><p>First</p></div>
                <div className='last'><p>Last</p></div>
                <div className='symptom'><p>Symptom</p></div>
                <div className='type'><p>type</p></div>
            </div>
            <div className='but-side'>
                <div className='R'>R</div>
                <div className='R'>E</div>
                <div className='R'>D</div>
            </div>
        </div>
      {allData && allData.length ? (
        <div className='container'>
          {useData.map((x)=>(
            <Infomation key={x.id} data={x}/>
            
          ))}
        </div>
      ):(
        <h3>no data</h3>
      )}

    </div>
    );
}

export default Read;
