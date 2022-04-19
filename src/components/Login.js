import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";

const Login = () => {
  const navigate = useNavigate();
  const getNoteData = useContext(NoteContext);
  const { loginUser, alertBox } = getNoteData;
  const [login, setLogin] = useState({ email: "", password: "" });

  const loginForm = async (e) => {
    e.preventDefault();
    // console.log(login)
    const response = await loginUser(login.email, login.password);
  
    if (response.status === "false") {
      alertBox("please enter correct credentials", "danger");
      return false;
    }
    sessionStorage.setItem("token", response.jwtToken);
    alertBox("you are login successfully", "success");
    navigate("/");
  };
  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form method="post" action="/action_page.php" onSubmit={loginForm}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            onChange={handleInput}
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            onChange={handleInput}
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
