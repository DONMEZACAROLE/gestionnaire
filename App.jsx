import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './Books'
import CreateBooks from './CreateBooks'
import UpdateBooks from './UpdateBooks'

// {/*import TextUnitaire from './TextUnitaire'*/}

const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/create" element={<CreateBooks />} />
          <Route path="/update/:id" element={<UpdateBooks />} />
           {/*<TextUnitaire />*/} 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
