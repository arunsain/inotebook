import React ,{useContext,useEffect} from 'react'
import  NoteContext from  "../context/notes/noteContext"
import { NoteItem } from './NoteItem';
export const Notes = () => {

    const getNoteData =  useContext(NoteContext);

    const {notes , setNotes,fetchAllNotes} =  getNoteData;
    useEffect(() => {
      fetchAllNotes();
      // eslint-disable-next-line
  }, [])
   
  return (
    <div className="row my-3">
    <h1>Your Note</h1>
    
    {notes.map((note,index)=>{
        
    return <NoteItem key={index} note={note}/>
     
    })}
    </div>
  )
}
