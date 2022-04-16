import React,{ useContext,useState} from 'react'

import  NoteContext from  "../context/notes/noteContext"


export const AddNote = () => {

  const contextApi =   useContext(NoteContext);
  //const getNoteData =  useContext(NoteContext);
  const { addNotes} = contextApi;
 
  const [note,setNote ] = useState({title:"",description:"",tags:""})
  const handleInput = (e) => {
    // console.log(e.target.value)
      setNote({...note,[e.target.name]:e.target.value});
    //     alert('handle');
  }
  const submitNote = (e) => {
    e.preventDefault();
     
      addNotes(note.title,note.description,note.tags);
}
 
  return (
    <>
 
     <h1>Add Note</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" onChange={ handleInput} className="form-control" name="title" id="title" />
  
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input  onChange={ handleInput} type="text" name="description" className="form-control" id="description" />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tag</label>
    <input  onChange={ handleInput} type="text" name="tags" className="form-control" id="tags" />
  </div>
 
  <button  disabled={note.title.length < 5 || note.description.length < 5 || note.tags.length < 5  } onClick={submitNote} type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}
