import React,{ useContext,useState} from 'react'

import  NoteContext from  "../context/notes/noteContext"

export const NoteItem = (props) => {
 
   const {updateNoteData } = props;
  
  // console.log(_id)
   const contextApi =   useContext(NoteContext);
  //const getNoteData =  useContext(NoteContext);
  const { deleteNotes,alertBox} = contextApi;
  
   
  return (
      <div className="col-md-3 my-2">
    <div className="card"  >
   
    <div className="card-body">
    <div className="d-flex align-items-center" >
        <h5 className="card-title">{props.note.title}</h5>
        <i className="fa-solid fa-trash-can mx-2" onClick={() => {
            deleteNotes(props.note._id);
            alertBox('Note Delete Successfully','success');
        }}></i>
      <i className="fa-solid fa-pen-to-square mx-2" onClick={ () =>{updateNoteData(props.note) }}></i>
    </div>
      <p className="card-text">{props.note.description}</p>
    

     
    </div>
  </div>
  </div>
  )
}
