import React,{ useContext,useState} from 'react'

import  NoteContext from  "../context/notes/noteContext"

export const NoteItem = (props) => {
   const {note,updateNoteData } = props;
  
  // console.log(_id)
   const contextApi =   useContext(NoteContext);
  //const getNoteData =  useContext(NoteContext);
  const { deleteNotes} = contextApi;
  
   
  return (
      <div className="col-md-3">
    <div className="card"  >
   
    <div className="card-body">
    <div className="d-flex align-items-center" >
        <h5 className="card-title">{note.title}</h5>
        <i className="fa-solid fa-trash-can mx-2" onClick={() => {
            deleteNotes(note._id);
        }}></i>
      <i className="fa-solid fa-pen-to-square mx-2" onClick={ () =>{updateNoteData(props.note) }}></i>
    </div>
      <p className="card-text">{note.description}</p>
    

     
    </div>
  </div>
  </div>
  )
}
