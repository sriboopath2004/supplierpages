import React from 'react'

function Supportpage() {
  return (
    <div style={{ fontFamily: "poppins" }} >
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         <h2 style={{ display: "flex",justifyContent: "center",alignItems: "center" ,width: "10%", marginTop: "2%",color: "red" }} >Supplier</h2>
         <h1 style={{ display: "flex",justifyContent: "center",alignItems: "center"  ,width: "15%", marginTop: "-1.5%" }} >Support</h1>
    </div>
 <div style={{ height: "300px" ,width: "65%", backgroundColor: "#2F2E4D", padding: "20px",paddingTop: "5%" ,borderRadius: "10px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", color: "white", margin: "auto" }}>
  <form>
  <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "-6%" }} >
  <div style={{ marginBottom: "15px", marginLeft: "-6%" }}>
      <label style={{ display: "flex", fontSize: "22px", marginBottom: "5px" }}>Your Name :</label>
      <input type="text" placeholder="Enter Your Name" style={{ width: "120%", padding: "10px", borderRadius: "5px", border: "none", fontSize: "20px" }} />
  </div>

    <div style={{ marginBottom: "15px", marginLeft: "-20%" }}>
      <label style={{ display: "flex", fontSize: "22px", marginBottom: "5px" }}>Your Mail id :</label>
      <input type="email" id="email" placeholder="Enter Your Mail Id" style={{ width: "130%", padding: "10px", borderRadius: "5px", border: "none", fontSize: "20px" }} />
    </div>
  </div>
    <div style={{ marginBottom: "10px", marginLeft: "6%", marginTop: "2%" }}>
      <label  style={{ display: "block", fontSize: "22px", marginBottom: "5px" }}>Description :</label>
      <textarea  placeholder="Enter Your Description ..." style={{ width: "90%", height: "100px", padding: "10px", borderRadius: "5px", border: "none", fontSize: "20px", resize: "none" }} />
    </div>
  </form>
 </div>
 <div style={{ borderRadius: "5px",marginTop: "7%" ,width: "70%", backgroundColor: "red", color: "white", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px", margin: "auto" }}>
  <span>© 2025 All Rights Reserved</span>
  <a style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
</div>


    </div>
  )
}

export default Supportpage