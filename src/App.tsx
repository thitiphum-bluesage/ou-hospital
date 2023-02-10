import React from 'react'
import Add from './component/Add'
import Read from './component/Read'
import { Routes,Route} from 'react-router-dom';
import EditPage from './component/EditPage';
import ReadInfoPage from './component/ReadInfoPage';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Read/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit/:id' element={<EditPage/>}/>
            <Route path='/read/:id' element={<ReadInfoPage/>}/>
        </Routes>
    </div>
  )
}

export default App