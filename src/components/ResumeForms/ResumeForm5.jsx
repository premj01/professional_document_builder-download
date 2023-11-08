import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


let cardCount5 = 0;
let cardToLood5;
let removedElements5 = [];

const ResumeForm5 = () => {

  document.body.style = 'background: white;';

  const [cardcnt, setcardcnt] = useState(0)

   

  const additem = () => {

    if ((cardCount5 - removedElements5.length) < 1) {
      cardCount5 += 1;
      setcardcnt(cardCount5);


      // setcardToLoad(<>{cardToLoad}
      cardToLood5 = `
          <div id="p${cardCount5}">
              <span id="b${cardCount5}" style="display:none">${cardCount5}</span>
              <hr>
              <span class="material-symbols-outlined" style="float:right ; cursor: pointer;" id="deleteElement${cardCount5}" >delete</span>
              <br><br>
              <div class="container">
              <div class="row">
                  <div class="col">
                  <input id="projectTitle${cardCount5}" type="text" class="form-control" placeholder="Project Title">
                  </div>
              </div>
              <div class="row mt-3">
                  <div class="col mb-3">
                  <textarea id="projectDesc${cardCount5}" rows="4" id="worksum0" class="form-control" placeholder="Description..."></textarea>
                  </div>
              </div>
              <div class="row">
                  <div class="col" style="margin-top: 28px; width: 24px;"><span class=""></span></div>
              </div>
          </div>
          
              
          </div>
              
          `

      const ele = document.createElement('div');
      ele.innerHTML = cardToLood5;
      document.getElementById("addnew5").appendChild(ele);

      document.getElementById(`deleteElement${cardCount5}`).addEventListener("click", () => {
        const cardNumber = document.getElementById(`b${cardcnt + 1}`);
        const cardElement = document.getElementById(`p${cardcnt + 1}`);

        removedElements5.push(Number.parseInt(cardNumber.textContent))
        cardElement.style.display = "none";



      })
    }
    else {
      alert("More than 2 projects are not allowed in current version")
    }



  }

  

  const loadToLocalStorage = () => {

    const ObjOfElements5 = []

    for (let i = 0; i <= cardCount5; i++) {
      if (!(removedElements5.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
        ObjOfElements5.push({
          projectTitle: document.getElementById(`projectTitle${i}`).value,
          projectDesc: document.getElementById(`projectDesc${i}`).value
        })

      }
      else {
        // console.log("not present " + i)
      }
    }

    localStorage.setItem("projectInfo", JSON.stringify(ObjOfElements5))
    console.log(ObjOfElements5)
    
     
  }
  return (
    <>
    <Navbar theme={"dark"} bgcolor={"#151515"}  />
      <div style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
        <h2>Project Information</h2>
      </div>
      <div id='container' className="container text-center " style={{ width: "800px", marginTop: "30px" }}>

        <div id="addnew5">
          <div id="p0"></div>
          <span id="b0" style={{ display: "none" }}>0</span>
          {/* projectInfo */}
          <div  >
            <div className="col">
              <input id="projectTitle0" type="text" class="form-control" placeholder="Project Title" />
            </div>
            <div className="mb-3" style={{ marginTop: "30px" }}>
              <textarea rows="4" id="projectDesc0" className="form-control" placeholder='Description...'  ></textarea>
            </div>
            <div style={{ marginTop: "28px", width: "24px" }}> <span class=""></span>
            </div>
          </div>
        </div>
        <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" , marginBottom:"15vh"}}>

        <Link to="/resumeform4" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>


        <Link  to='/resumeform6' onClick={loadToLocalStorage} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
        

      </div>
      <Footer />
    </>
  )
}
export default ResumeForm5