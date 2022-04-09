import React from 'react'

export const NoteItem = (props) => {
   const { title ,description, tags} = props.note;
  return (
      <div className="col-md-3">
    <div className="card"  >
   
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
  )
}
