import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  //Update Display UI as Register
  const [loginUser, setLogin] = useState({
    username: "",
    password: "",
  });

  //Update Error
  const [error, setError] = useState(null);

  // ទាញយក login fun ពី AuthContext
  const { login } = useContext(AuthContext);

  //Navigate
  const navigate = useNavigate();

  function HandleChange(event) {
    const { value, name } = event.target;
    setLogin((preValue) => ({ ...preValue, [name]: value }));
  }

  async function submitLogin(event) {
    event.preventDefault();

    // POST to Backend
    try {
      await login(loginUser);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={HandleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={HandleChange}
        />
        {error && <p>{error}</p>}
        <button onClick={submitLogin}>login</button>
        <span>
          Don't you Have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
