import React ,{ useContext} from 'react';
import  NoteContext from  "../context/notes/noteContext"


const About = () => {

 const sd =  useContext(NoteContext);
 console.log(sd);
  return (
    <>
    <div>
    About is working wdwddeded {sd.d.name}
    </div>
    </>
  )
}

export default About