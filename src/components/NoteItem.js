import React,{ useContext,useState} from 'react'

import  NoteContext from  "../context/notes/noteContext"

export const NoteItem = (props) => {
   const { _id, title ,description, tags} = props.note;
  // console.log(_id)
   const contextApi =   useContext(NoteContext);
  //const getNoteData =  useContext(NoteContext);
  const { deleteNotes} = contextApi;
  
   
  return (
      <div className="col-md-3">
    <div className="card"  >
   
    <div className="card-body">
    <div className="d-flex align-items-center" >
        <h5 className="card-title">{title}</h5>
        <i className="fa-solid fa-trash-can mx-2" onClick={() => {
            deleteNotes(_id);
        }}></i>
      <i className="fa-solid fa-pen-to-square mx-2"></i>
    </div>
      <p className="card-text">{description}</p>
    

     
    </div>
  </div>
  </div>
  )
}
