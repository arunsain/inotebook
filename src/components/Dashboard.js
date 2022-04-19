import React,{useContext} from 'react'
import  NoteContext from  "../context/notes/noteContext"
import { AddNote } from './AddNote';
import { NoteItem } from './NoteItem';
import { Notes } from './Notes';

export const Dashboard = () => {
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