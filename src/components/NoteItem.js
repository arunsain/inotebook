import React from 'react'

export const NoteItem = (props) => {
   const { title ,description, tags} = props.note;
  return (
      <div className="col-md-3">
    <div className="card"  >
   
    <div className="card-body">
    <div className="d-flex align-items-center" >
        <h5 className="card-title">{title}</h5>
        <i className="fa-solid fa-trash-can mx-2"></i>
      <i className="fa-solid fa-pen-to-square mx-2"></i>
    </div>
      <p className="card-text">{description}</p>
    

     
    </div>
  </div>
  </div>
  )
}
