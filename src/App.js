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
  
const host = "http://localhost:5000";
const initialNotes =   [
    {
      "_id": "620a894e01e38e7ad0e1509b",
      "user": "620939067a851dba323a62e5",
      "title": "swfww",
      "description": "wwfwf",
      "tags": "dwwedw",
      "date": "2022-02-14T16:54:38.618Z",
      "__v": 0
    }
  ];
const [notes,setNote] = useState(initialNotes);




  const  fetchAllNotes = async () =>{

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'get-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTM5MDY3YTg1MWRiYTMyM2E2MmU1In0sImlhdCI6MTY0OTc4MjQyNX0.js9t1L0rawbozT20mww7vv2cvWduyxW4im8-GhyubQE'
       
      }
    });
    const json = await response.json();
    
     setNote(json)
  };


const addNotes = async (title,description,tags) =>{

  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'get-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTM5MDY3YTg1MWRiYTMyM2E2MmU1In0sImlhdCI6MTY0OTc4MjQyNX0.js9t1L0rawbozT20mww7vv2cvWduyxW4im8-GhyubQE'
     
    },
    body: JSON.stringify({title,description,tags })
  });
  const json = await response.json();
  
  setNote(notes.concat(json.note));

 
}
const editNotes = async (editNoteData) =>{
console.log(editNoteData)
const { id, title,description,tags } = editNoteData;


  for(let index=0; index < notes.length; index++){
    if(editNoteData.id === notes[index]._id){
      notes[index].title = editNoteData.title;
      notes[index].description = editNoteData.description
      notes[index].tags = editNoteData.tags
      break;
    }

  }
  const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      'get-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTM5MDY3YTg1MWRiYTMyM2E2MmU1In0sImlhdCI6MTY0OTc4MjQyNX0.js9t1L0rawbozT20mww7vv2cvWduyxW4im8-GhyubQE'
     
    },
    body: JSON.stringify({title,description,tags })
  });
  //alert('editNotes');
}
const deleteNotes = async (id) =>{
  // console.log(id);

  const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'get-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOTM5MDY3YTg1MWRiYTMyM2E2MmU1In0sImlhdCI6MTY0OTc4MjQyNX0.js9t1L0rawbozT20mww7vv2cvWduyxW4im8-GhyubQE'
     
    }
  });
  const json = await response.json();

const  newNotes =  notes.filter((note)=>{
    return note._id !== id;

  });
  setNote(newNotes);

 
}

  return (
   

<>
    <BrowserRouter>
     <Navbar/>
     <Alert message="this is alert message"/>
     <NoteContext.Provider  value={ {notes,setNote,addNotes,editNotes,deleteNotes,fetchAllNotes} }>
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
