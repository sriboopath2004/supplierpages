import React from 'react'
import OrderImage from "./Assets/OrderImage.jpg"
function Supplierpage() {
  
    return (
     <div style={{ fontFamily: "poppins" }} >
       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         <h4 style={{ width: "6%", marginTop: "2%",color: "red" }} >Supplier</h4>
         <h2 style={{ width: "12%", marginTop: "-1.5%" }} >Order Details</h2>
       </div>
       <div style={{ marginLeft: "14%" ,width: "70%" ,display: "flex", flexDirection: "row", justifyContent: "space-evenly" ,alignItems: "center" }} >
        <div style={{ backgroundColor: "#2b2c40",color: "white",width: "22%", height: "120px" , borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center" }} >
           <h2>Total Orders</h2>
           <h2 style={{ marginTop: "-5%" }} >08</h2> 
        </div> 
        <div style={{ backgroundColor: "#2b2c40",color: "white",width: "22%", height: "120px" , borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center" }} >
           <h2>Completed</h2>
           <h2 style={{ marginTop: "-5%" }} >05</h2> 
        </div> 
        <div style={{ backgroundColor: "#2b2c40",color: "white",width: "22%", height: "120px" , borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center" }} >
           <h2>Rejected</h2>
           <h2 style={{ marginTop: "-5%" }} >03</h2> 
        </div> 
       </div>
       <div style={{ marginTop: "4%" ,display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%', margin: 'auto', gap: '20px' }}>
      
      {/* Left Side Content */}
      <div style={{ width: '50%', textAlign: 'center' }}>
        <p style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '10px' }}>
          "New Order Ready! <br />
          Pickup and Deliver with Care."
        </p>
        <p style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '10px' }}>
          "Your Next Delivery Awaits – Handle with Speed!"
        </p>
        <p style={{ fontSize: "17px", fontWeight: 'bold', marginBottom: '20px' }}>
          "Order Assigned! Get Ready to Serve!"
        </p>
        <button style={{
          padding: '10px 20px', backgroundColor: '#2b2c40', color: 'white', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '13px', cursor: 'pointer' }}>
          View Orders
        </button>
      </div>

      {/* Right Side Image */}
      <div style={{ width: '50%' }}>
        <img src={OrderImage} alt="Order Notification" style={{ width: '92%', borderRadius: '20px' }} />
      </div>

    </div>  
     </div>
    
  )
}

export default Supplierpage