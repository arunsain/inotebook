
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const d = {

        "name": "arun sain",
        "class": "php",
    }
  
    return (
        <NoteContext.Provider  value={d}>
       {props.childrean}
        </NoteContext.Provider>
        

    )
}

export default NoteState;