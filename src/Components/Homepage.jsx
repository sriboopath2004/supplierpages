import React from 'react';
import Logo from "./Assets/Logo.png";
import Homebgimg from "./Assets/Homebgimg.jpg";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell , faUser } from "@fortawesome/free-solid-svg-icons";

function Homepage() {

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/Supplierpage");
  const goToAbout = () => {
    navigate('/SupplierInfo');
  };

  return (
   <div style={{  }} >
        <div style={{ fontFamily: "poppins", backgroundColor:"red" ,display: "flex",justifyContent: "space-evenly",alignItems: "center" ,height: "40px",width: "100%" }} >
           <h4 style={{ color: "black",fontSize: "medium" }} >Savor the Flavor . Fast & Fresh</h4>
           <h3 style={{ marginRight: "-34%", color: 'white' }}>Logout</h3>
        </div>
        <div style={{ fontFamily: "poppins", display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "90px" }} >
            <img style={{ marginLeft: "-5%" }} src={Logo} alt="logo" width={"8%"} />
           <div style={{ width: "40%", display: "flex", justifyContent: "space-evenly" }} >
              <h3 style={{ color: "red"}} >Home</h3>
              <h3 onClick={handleNavigate} >Supplier</h3>
              <h3 onClick={goToAbout} >Info</h3>
              <h3>Support</h3>
            </div>
            <div style={{ width: "13%", display: "flex", justifyContent: "space-between", marginRight: "-10%" }} >
            <FontAwesomeIcon icon={faBell} size="3x" />  {/* Notification Bell icon */}
            <FontAwesomeIcon icon={faUser} size="3x" /> {/* Profile icon */}
            </div>
        </div>
        <div style={{ width: "99.9%",height: "503px", backgroundImage: `url(${Homebgimg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <button style={{ marginLeft: "22%",marginTop: "29%", backgroundColor: "#2b2c40",color: "white" ,width: "9%", height: "40px", borderRadius: "7px",fontSize: "25px" }} >View</button>
        </div>
    </div>
  )
}

export default Homepage