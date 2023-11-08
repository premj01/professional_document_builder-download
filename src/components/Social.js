import React from 'react'
import x from './Logos/tw.webp'
import fb from './Logos/face.webp'
import insta from './Logos/ins.webp'

export default function Social() {
  return (
    <div style={{border:"2px solid white", height: "500px",backgroundColor:"#F8F9FA"}}>

       <h2 style={{marginTop: "70px", fontFamily: "Kanit", fontSize: "32px"}}>Follow us on social media</h2>

     <div style={{display: "flex", justifyContent:"center", margin: "auto",marginTop:"90px"}}>
       
     {/* <a class="navbar-brand" href="#" style={{fontFamily: "Kanit",}}><img style={{height:"40px"}} src={logo} alt=""/></a> */}

      <a href=""><img style={{height:"140px",marginRight:"40px"}} src={x} alt=""/></a>
      <a href="#"><img style={{height:"140px"}} src={fb} alt="" /></a>
      <a href="#"><img style={{height:"140px", marginLeft:"40px"}} src={insta} alt="" /></a>
      {/* <img style={{height:"140px"}} src={fb} alt="" />
      <img style={{height:"140px", marginLeft:"40px"}} src={insta} alt="" /> */}
        
    </div> 
    </div>
  )
}
