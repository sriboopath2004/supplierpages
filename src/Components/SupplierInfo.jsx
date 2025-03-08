import React from 'react'
import SupplierImage from "./Assets/SupplierImage.jpg";

function SupplierInfo() {
  return (
    <div>
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         <h2 style={{ display: "flex",justifyContent: "center",alignItems: "center" ,width: "10%", marginTop: "2%",color: "red" }} >Supplier</h2>
         <h1 style={{ display: "flex",justifyContent: "center",alignItems: "center"  ,width: "15%", marginTop: "-1.5%" }} >Supplier Info</h1>
    </div>
    <div style={{ marginTop: "2%" ,display: 'flex',justifyContent: "space-around" ,alignItems: 'center', width: '80%',height: "420px"  ,margin: 'auto', gap: '5px' }}>
  
  {/* Left Side Image */}
  <div style={{ width: '40%' }}>
    <img src={SupplierImage} alt="Supplier" style={{ width: '110%',height: "400px" ,borderRadius: '20px' }} />
  </div>

  {/* Right Side Content */}
  <div style={{ width: '43%', height: "80%" }}>
    <h2 style={{ fontSize: '35px', fontWeight: 'bold', color: '#2C2C56', marginTop: "-1%" }}>Priya Sharma !</h2>
    <p style={{ fontSize: '24px', color: '#555' }}>
      Priya Sharma is a skilled senior supplier with over 3 years of experience in the restaurant industry. 
      She is known for her punctuality, efficiency, and ability to manage high-priority orders. 
      Priya also plays an important role in training new staff and ensuring smooth, timely deliveries.
    </p>
  </div>

</div>


    </div>
  )
}

export default SupplierInfo