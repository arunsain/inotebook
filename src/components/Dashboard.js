import React,{useContext,useEffect} from 'react'
import  NoteContext from  "../context/notes/noteContext"
import { AddNote } from './AddNote';
import { NoteItem } from './NoteItem';
import { Notes } from './Notes';
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(sessionStorage.getItem("token") === null){
      navigate("/login");
    }
    // eslint-disable-next-line
}, [])

  
    const getNoteData =  useContext(NoteContext);

    const {notes , setNotes} =  getNoteData;
  
  return (
    <div className="container">
    <AddNote/>
    <Notes/>
    </div>
  )
}
export default Dashboard