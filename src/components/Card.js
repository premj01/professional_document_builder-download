import React from 'react'
// import resumeimg from "./resume-190916.jpg"
// import cvimg from "./cv.jpg"
import  cv from './CVMain/cv.jpg'
import res from './cardimgs/res30002000.jpg'
import { Link } from 'react-router-dom'
import  card from './cardimgs/card1.jpg'
import  more from './cardimgs/more1.jpg'




export default function Card(props) {

  // cleabing the localstorage data totally 
  const cleanOlLocalData = () =>{
    localStorage.clear();
  }

  return (
    <div style={{margin: "15px", display: "flex", flexDirection:"row", fontFamily: "Kanit"}}>
      
      <div class="row row-cols-1 row-cols-md-4 g-4" style={{marginTop: "10px"}}>
  <div class="col">
    <div class="card" style={{width: "300px", border: "2px solid black"}}>
      <img  src={res} class="card-img-top" alt=""/>
      <div class="card-body"  style={{backgroundColor:"#0F2027", color:"white"}}>
        <h5 class="card-title">Resume</h5>
        <p class="card-text">Create a beautifully visual resume with exciting designs!</p>
        <Link to="/resumeform1" onClick={cleanOlLocalData} class="btn btn-light" >Create Resume</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width: "300px", border: "2px solid black"}}>
      <img src={cv} class="card-img-top" alt=""/>
      <div class="card-body"  style={{backgroundColor:"#0F2027", color:"white"}}>
        <h5 class="card-title">CV</h5>
        <p class="card-text">Build your curriculum vitae with our magical templates.</p>
        <a href="/" class="btn btn-light">Create CV</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width: "300px", border: "2px solid black"}}>
      <img src={card} class="card-img-top" alt=""/>
      <div class="card-body"  style={{backgroundColor:"#0F2027", color:"white"}}>
        <h5 class="card-title">Professional Cards</h5>
        <p class="card-text">New Business? Let's make it popular with our stunning cards!</p>
        <Link to="/business-card-form" onClick={cleanOlLocalData} class="btn btn-light">Create Cards</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width: "300px",border: "2px solid black"}}>
      <img src={more} class="card-img-top" alt=""/>
      <div class="card-body" style={{backgroundColor:"#0F2027", color:"white"}}>
        <h5 class="card-title">More</h5>
        <p class="card-text">Customize services like Question Paper maker, etc.</p>
        <Link to="/formquestion" target="_blank" class="btn btn-light" >Create More</Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
