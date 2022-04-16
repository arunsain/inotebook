import React ,{useContext,useEffect,useRef,useState} from 'react'
import  NoteContext from  "../context/notes/noteContext"
import { NoteItem } from './NoteItem';
export const Notes = () => {

    const getNoteData =  useContext(NoteContext);

    const {notes , setNotes,fetchAllNotes,editNotes} =  getNoteData;
    useEffect(() => {
      fetchAllNotes();
      // eslint-disable-next-line
  }, [])

  const [ editNoteData,setEditNoteData ]  = useState({id:"",title:"",description:"",tags:""});
  const updateNoteData = (noteDataForUpdate) =>{
  
      ref.current.click();
       setEditNoteData({id:noteDataForUpdate._id,title:noteDataForUpdate.title,description:noteDataForUpdate.description,tags:noteDataForUpdate.tags});
       
  }
  const ref = useRef(null);
  const refClose = useRef(null);
  const handleInput = (e) => {
  
    setEditNoteData({...editNoteData,[e.target.name]:e.target.value});
    
  }
  const submitNoteEdit = (e) => {
    e.preventDefault();
    setEditNoteData({id:editNoteData.id,title:editNoteData.title,description:editNoteData.description,tags:editNoteData.tags});
  
    editNotes(editNoteData);
  
    refClose.current.click();
}




  return (

    <>
    
<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <h1>Edit Note</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={editNoteData.title} onChange={ handleInput} className="form-control" name="title" id="title" />
  
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input value={editNoteData.description}  onChange={ handleInput} type="text" name="description" className="form-control" id="description" />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tag</label>
    <input value={editNoteData.tags}   onChange={ handleInput} type="text" name="tags" className="form-control" id="tags" />
  </div>
 
  {/* <button  type="submit" className="btn btn-primary">Submit</button> */}
</form>
    
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={editNoteData.title.length < 5 || editNoteData.description.length < 5 || editNoteData.tags.length < 5  } onClick={submitNoteEdit} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div className="row my-3">
    <h1>Your Note</h1>
    <div className="container">
    { notes.length === 0 && "no notes found" }
    </div>
    {notes.map((note,index)=>{
        
    return <NoteItem key={index} note={note} updateNoteData={updateNoteData}/>
     
    })}
    </div>
    </>
  )
}
