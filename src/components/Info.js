import React from 'react'
import landimg from './top.jpg'
import bigimg from './bigimg.png'

// #F5F7FA
export default function Info() {
  return (
    <div style={{backgroundColor: "#F8F9FA", border: "2px solid white", height: "880px", marginTop: "100px", color:"black"}}>
      
    
      <img style={{height: "300px", margin: "auto", marginTop: "110px", marginBottom: "20px"}} src={bigimg} alt="" />
      
       <h2 style={{fontFamily: "Questrial", fontSize: "30px", marginBottom: "30px", marginTop: "70px"}}> The Professional Document Builder</h2>  
    
      <p style={{fontFamily: "Questrial", fontSize: "20px", fontStyle: "italic"}}>
      The goal of improving lives is an important reason behind  the birth of document builder. <br />The Professional Document Builder provides the most efficient, free and exotic services to students, business professionals,<br /> educational institutes, industries, etc. Professional Document Builder comes with a rich set of templates to design <br />the documents like Resume, CV, Cards, Educational Docs & more. <br /> Learn more about our magical tools and services! 
      </p>

      {/* <button type="button" class="btn btn-outline-primary" style={{fontFamily: "Questrial", fontSize: "18px",marginTop: "18px"}}>Learn More</button>  */}

      <div class="d-grid gap-2 col-6 mx-auto" style={{fontFamily: "Questrial", fontSize: "18px",marginTop: "45px", width:"320px"}}>
           <button class="btn btn-outline-primary" type="button">Learn More</button>
      </div>

    </div>
  )
}
