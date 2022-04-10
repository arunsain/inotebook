import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  Navbar from  "./components/Navbar"
import  Home from  "./components/Home"
import  About from  "./components/About"
import  NoteContext from  "./context/notes/noteContext"
import { Alert } from './components/Alert';







function App() {
  

const initialNotes =   [
    {
      "_id": "620a894e01e38e7ad0e1509b",
      "user": "620939067a851dba323a62e5",
      "title": "swfww",
      "description": "wwfwf",
      "tags": "dwwedw",
      "date": "2022-02-14T16:54:38.618Z",
      "__v": 0
    },
    {
      "_id": "620a897bdf5c4df7b9c07cf0",
      "user": "620939067a851dba323a62e5",
      "title": "swfww",
      "description": "wwfwf",
      "tags": "dwwedw",
      "date": "2022-02-14T16:55:23.042Z",
      "__v": 0
    }
  ];
const [notes,setNote] = useState(initialNotes);

const addNotes = (title,description,tags) =>{

  const note = {
    "_id": "620a897bdf5c4df7b9c07cf0",
    "user": "620939067a851dba323a62e5",
    "title": title,
    "description": description,
    "tags": tags,
    "date": "2022-02-14T16:55:23.042Z",
    "__v": 0
  }
  setNote(notes.concat(note));

  alert('addNotes');
}
const editNotes = () =>{

  alert('editNotes');
}
const deleteNotes = () =>{

  alert('deleteNotes');
}

  return (
   

<>
    <BrowserRouter>
     <Navbar/>
     <Alert message="this is alert message"/>
     <NoteContext.Provider  value={ {notes,setNote,addNotes,editNotes,deleteNotes} }>
    <Routes>
     
      <Route exact path="/"  element={<Home/>}>
        </Route>
        <Route exact path="/about"  element={<About/>}>
      </Route>
    </Routes>
    </NoteContext.Provider>
  </BrowserRouter>

  </>

        
  
  )

}

export default App;
