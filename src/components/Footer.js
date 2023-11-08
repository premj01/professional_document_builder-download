import React from 'react'
import img from './logotemp.svg'
import wlogo from './Logos/whiteLogo.png'
import free from './Logos/flaticon/copy.png'
// #00439C
// #A437FF
// #40AEFD
export default function Footer() {
  return (
    <div style={{ height: "600px", backgroundColor: "#151515",color: "white", fontFamily:"Kanit",border:"2px solid #212529"}}>
      <div style={{display:"flex"}}>
      <h2 style={{textAlign:"left", marginTop:"35px", marginLeft:"20px",fontSize:"25px"}}>The Professional Document Builder</h2>

      </div>
      <hr></hr>
       <div style={{textAlign:"right", marginRight:"20px",marginTop:"20px"}}>

       <span>&copy; 2023 The Professional Document Builder</span>
       </div>

      <div style={{justifyContent:"center", margin:"auto", alignItems:"center", width: "500px"}}>
           <img style={{height:"250px", marginTop:"100px",filter: "invert(100%)",marginLeft:"125px"}}src={free} alt="" />
    </div>
</div>
  )
}
// filter: "invert(100%)"