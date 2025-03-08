import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loginbgimg from "./Assets/Loginbgimg.jpg";

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleNavigate = () => navigate("/Homepage");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !password) {
      setError('Please fill in both name and password');
    } else {
      console.log('Login successfully', name, password);
      setName('');
      setPassword('');
      handleNavigate();
    }
  };

  return (
    <div style={{ backgroundImage: `url(${Loginbgimg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "2rem", borderRadius: "20px", width: "25vw", height: "55vh", display: 'flex', flexDirection: "column", alignItems: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", border: "none" }}>
        <h2 style={{ fontSize: "xx-large" ,color: "#ffffff", textAlign: "center", marginBottom: "1rem", marginTop:"-2%" }}>Welcome</h2>
        {error && <p style={{ color: 'red', textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ width: "100%", marginLeft: "8%", marginTop: "3%" }}>
          <label style={{ color: "white", fontSize: "x-large",fontWeight: "bold" ,display: "flex", textAlign: "left" }}>Supplier Id:</label>
          <input type="text" value={name} style={{ width: "82%",marginTop: "2.5%" ,fontSize: "18px" ,padding: "10px",paddingLeft: "6%" ,margin: "5px 0", borderRadius: "5px", border: "none" }} placeholder='Enter Your Id' onChange={handleNameChange} />
          <label style={{ color: "white", display: "flex", textAlign: "left", fontSize: "x-large",fontWeight: "bold" }}>Password:</label>
          <input type="password" value={password} style={{ width: "82%",marginTop: "2.0%" ,fontSize: "18px", padding: "10px",paddingLeft: "6%" ,margin: "5px 0", borderRadius: "5px", border: "none" }} placeholder='Enter Your Password' onChange={handlePasswordChange} />
          <button type="submit" style={{ width: "40%", padding: "10px",marginLeft: "26%" ,marginTop: "30px", backgroundColor: "red", color: "black", border: "none", borderRadius: "5px", fontWeight: "bold",fontSize: "large", cursor: "pointer" }}>Sign In</button>
        </form>
        <p style={{ fontSize: "large" ,color: "white", textDecoration: "underline", cursor: "pointer", marginTop: "10px" }}>Forgot Password</p>
      </div>
    </div>
  );
}

export default Login;
