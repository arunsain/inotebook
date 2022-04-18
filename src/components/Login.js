import React,{useState,useContext} from 'react';
import  NoteContext from  "../context/notes/noteContext"

 const Login = () => {
  const getNoteData =  useContext(NoteContext);
  const {loginUser} =  getNoteData;
  const [login,setLogin] = useState({email:"",password:""})

  const loginForm = (e) =>{
    e.preventDefault();
   // console.log(login)
    loginUser(login.email,login.password);
   // alert('asdj');
  }
  const handleInput = (e) => {
    setLogin({...login,[e.target.name]:e.target.value});
  }

  return (
    <div className="container">
        <form method="post" action="/action_page.php" onSubmit={loginForm}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" onChange={ handleInput} className="form-control" id="email" placeholder="Enter email" name="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password"  onChange={ handleInput} className="form-control" id="pwd" placeholder="Enter password" name="password" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login;