import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  //Update Display UI as Register
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
  });

  //Update Error
  const [error, setError] = useState(null);

  //Navigate
  const navigate = useNavigate();

  function HandleChange(event) {
    const { value, name } = event.target;
    // Meaning of ...
    // {[name] : value} = {username:"Ebon"} OR {email:"Ebon@gmail.com"}
    setRegister((preValue) => ({ ...preValue, [name]: value }));
  }

  async function submitRegister(event) {
    event.preventDefault();

    // POST to Backend
    try {
      const res = await Axios.post("https://web-source-api.vercel.app/api/auth/register", register);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  }

  //console.log(register);

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={HandleChange}
          value={register.username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={HandleChange}
          value={register.password}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={HandleChange}
          value={register.email}
          required
        />
        {error && <p>{error}</p>}
        <button onClick={submitRegister}>Register</button>
        <span>
          Do you Have an Account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
