import React from 'react'
import img1 from './sliderimages/james.jpg'
import img2 from './cv1.jpg'
import img3 from './sliderimages/paper-7045209_1280 (1).jpg'
import play from './play.webp'

// #BABFC9
// #bdc3c7
export default function Slider() {
  return (
    <div style={{color: "white", backgroundColor:"#0F2027", height: "1000px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <div style={{border: "2px solid #0F2027"}}>
      <h2 style={{marginTop:"115px",fontFamily: "Questrial", fontSize: "35px", marginBottom: "20px"}}>Discover The Document Builder</h2>
       <span style={{fontSize: "18px" ,fontFamily: "Questrial",fontStyle:"italic"}}>Discover the building aspects which makes our templates magical and explore the creative world of Professional Document Builder!</span>   
      </div>

    <div style={{ width: "1000px", justifyContent: "center", alignItems: "center", margin:"auto", paddingTop:"0px"}}>
      <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-dark slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{borderRadius: "10px"}} src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{borderRadius: "10px"}}src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{borderRadius: "10px"}}src={img1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button style={{fontFamily: "Questrial", fontSize:"18px", width:"360px", justifyContent:"center", margin:"auto",marginTop:"80px"}} class="btn btn-outline-warning" type="button">Discover More</button>
</div>
</div>
    </div>
  )
}

// <!-- HTML !-->
// <button class="button-64" role="button"><span class="text">Button 64</span></button>

// /* CSS */
// .button-64 {
//   align-items: center;
//   background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
//   border: 0;
//   border-radius: 8px;
//   box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   display: flex;
//   font-family: Phantomsans, sans-serif;
//   font-size: 20px;
//   justify-content: center;
//   line-height: 1em;
//   max-width: 100%;
//   min-width: 140px;
//   padding: 3px;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   cursor: pointer;
// }

// .button-64:active,
// .button-64:hover {
//   outline: 0;
// }

// .button-64 span {
//   background-color: rgb(5, 6, 45);
//   padding: 16px 24px;
//   border-radius: 6px;
//   width: 100%;
//   height: 100%;
//   transition: 300ms;
// }

// .button-64:hover span {
//   background: none;
// }

// @media (min-width: 768px) {
//   .button-64 {
//     font-size: 24px;
//     min-width: 196px;
//   }
// }