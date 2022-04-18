import React,{useState,useContext} from 'react';
import  NoteContext from  "../context/notes/noteContext"

export const Register = () => {

  const getNoteData =  useContext(NoteContext);
  const {newRegisterUser} =  getNoteData;
  const [register,setRegister] = useState({name:"",email:"",password:""})

  const registerForm = (e) =>{
    e.preventDefault();
   // console.log(login)
    newRegisterUser(register.name,register.email,register.password);
   //alert('asdj');
  }
  const handleInput = (e) => {
    setRegister({...register,[e.target.name]:e.target.value});
  }

  return (
    <div className="container">
      <form onSubmit={registerForm} action="/action_page.php">

      <div className="mb-3 mt-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input type="text" onChange={ handleInput} className="form-control" id="name" placeholder="Enter name" name="name" />
  </div>

  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" onChange={ handleInput} className="form-control" id="email" placeholder="Enter email" name="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" onChange={ handleInput} className="form-control" id="pwd" placeholder="Enter password" name="password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Register;