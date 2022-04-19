import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  Navbar from  "./components/Navbar"
import  Home from  "./components/Home"
import  About from  "./components/About"
import  Register from  "./components/Register"
import  Dashboard from  "./components/Dashboard"
import  Login from  "./components/Login"
import  NoteContext from  "./context/notes/noteContext"
import { Alert } from './components/Alert';







function App() {
  
const host = "http://localhost:5000";
const initialNotes =   [
    {
      "_id": "620a894e01e38e7ad0e1509b",
      "user": "620939067a851dba323a62e5",
      "title": "testing",
      "description": "testing",
      "tags": "testing",
      "date": "2022-02-14T16:54:38.618Z",
      "__v": 0
    }
  ];
const [notes,setNote] = useState(initialNotes);
const [alertdata,setAlertdata] = useState(null);



  const  fetchAllNotes = async () =>{

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'get-token': sessionStorage.getItem("token")
       
      }
    });
    const json = await response.json();
    console.log(json)
     setNote(json)
  };


const addNotes = async (title,description,tags) =>{

  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'get-token': sessionStorage.getItem("token")
     
    },
    body: JSON.stringify({title,description,tags })
  });
  const json = await response.json();
  
  setNote(notes.concat(json.note));

 
}


const newRegisterUser = async (name,email,password) =>{

  const response = await fetch(`${host}/api/auth/createuser`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name,email,password})
  });
  const json = await response.json();
  return json;
 // setNote(notes.concat(json.note));

 
}

const loginUser = async (email,password) =>{

  const response = await fetch(`${host}/api/auth/login`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email,password })
  });
  const json = await response.json();
  return json;
 

 
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
      'get-token': sessionStorage.getItem("token")
     
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
      'get-token': sessionStorage.getItem("token")
     
    }
  });
  const json = await response.json();

const  newNotes =  notes.filter((note)=>{
    return note._id !== id;

  });
  setNote(newNotes);

 
}

const alertBox = (message,type)=>{
  setAlertdata({message:message,type:type});

  setInterval(() => {
   
    setAlertdata(null);
  }, 3000);
}

  return (
   

<>
    <BrowserRouter>
     <Navbar/>
     <Alert alertdata={alertdata}/>
     <NoteContext.Provider  value={ {notes,setNote,addNotes,editNotes,deleteNotes,fetchAllNotes,loginUser,newRegisterUser,alertBox} }>
    <Routes>
     
      <Route exact path="/"  element={<Home/>}>
        </Route>
        <Route exact path="/about"  element={<About/>}>
      </Route>
      <Route exact path="/login"  element={<Login/>}>
      </Route>
      <Route exact path="/register"  element={<Register/>}>
      </Route>
      <Route exact path="/dashboard"  element={<Dashboard/>}>
      </Route>
    </Routes>
    </NoteContext.Provider>
  </BrowserRouter>

  </>

        
  
  )

}

export default App;
