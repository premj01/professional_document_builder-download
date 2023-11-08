import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


let cardCount = 0;
let cardToLood;
let removedElements = [];



const ResumeForm3 = () => {
  document.body.style = 'background: white;';


  const [cardcnt, setcardcnt] = useState(0)

  useEffect(() => {

  }, [])

  const additem = () => {

    if ((cardCount - removedElements.length) < 2) {
      cardCount += 1;
      setcardcnt(cardCount);


      // setcardToLoad(<>{cardToLoad}
      cardToLood = `
        <div id="p${cardCount}">
        <hr />
            <span id="b${cardCount}" style="display:none">${cardCount}</span>
            <span class="material-symbols-outlined" style="float:right; cursor:pointer;" id="deleteElement${cardCount}" >delete</span>

            <div class="row row-cols-2">
                <div class="col"><label for="schnamep${cardCount}" className="form-label"></label>
                    <input id="schnamep${cardCount}" type="text" class="form-control" placeholder="School/College Name" /></div>

                <div class="col"><label for="schlocp${cardCount}" className="form-label"></label>
                    <input type="text" id="schlocp${cardCount}" class="form-control" placeholder="School/College Location" /></div>

                <div class="col"><label for="edustrdatep${cardCount}" className="form-label"></label>
                    <input type="text" id="edustrdatep${cardCount}" class="form-control" placeholder="Start Date" /></div>

                <div class="col"><label for="eduendatep${cardCount}" className="form-label"></label>
                    <input type="text" id="eduendatep${cardCount}" class="form-control" placeholder="End Date" /></div>

                <div class="col"><label for="degp${cardCount}" className="form-label"></label>
                    <input type="text" id="degp${cardCount}" class="form-control" placeholder="Degree" /></div>

                <div class="col"><label for="fieldp${cardCount}" className="form-label"></label>
                    <input type="text" class="form-control" id="fieldp${cardCount}" placeholder="Field of Study" /></div>

            </div>
        </div>
            
        `

      const ele = document.createElement('div');
      ele.innerHTML = cardToLood;
      document.getElementById("addnew").appendChild(ele);

      document.getElementById(`deleteElement${cardCount}`).addEventListener("click", () => {
        const cardNumber = document.getElementById(`b${cardcnt + 1}`);
        const cardElement = document.getElementById(`p${cardcnt + 1}`);

        removedElements.push(Number.parseInt(cardNumber.textContent))
        cardElement.style.display = "none";



      })
    }
    else {
      alert("More than 3 items are not allowed")
    }



  }

  // const displayEle = () => {
  //   console.log("Elements are ")
  //   removedElements.forEach(element => {
  //     console.log(element, " ", typeof element)
  //   });
  // }

  const loadToLocalStorage = () => {

    const ObjOfElements = []

    for (let i = 0; i <= cardCount; i++) {
      if (!(removedElements.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
        ObjOfElements.push({
          schname: document.getElementById(`schnamep${i}`).value,
          schloc: document.getElementById(`schlocp${i}`).value,
          edustrdate: document.getElementById(`edustrdatep${i}`).value,
          eduendate: document.getElementById(`eduendatep${i}`).value,
          deg: document.getElementById(`degp${i}`).value,
          field: document.getElementById(`fieldp${i}`).value
        })

        console.log(i)
      }
      else {
        console.log("not here " + i)
      }


    }

    localStorage.setItem("Education", JSON.stringify(ObjOfElements))
    console.log(ObjOfElements)
    localStorage.setItem("ResumeFrom3HTML", document.getElementById("addnew").innerHTML)

    //recovery details like session tracking
    localStorage.setItem("PageValuesItemsForm2", JSON.stringify({
      deletedItems: removedElements,
      cardCount: cardCount
    }));
  }


  const populateFormAgain = () => {

    if (localStorage.getItem("Education")) {
      const TotalElementHTMLCode3 = localStorage.getItem("ResumeFrom3HTML");
      const TotalElementHTMLCode3Count = JSON.parse(localStorage.getItem("Education")).length - 1;

      document.getElementById("addnew").innerHTML = TotalElementHTMLCode3;

      cardCount = TotalElementHTMLCode3Count;
      setcardcnt(TotalElementHTMLCode3Count)
      const DataOfElem = JSON.parse(localStorage.getItem("Education"))

      let LoadObj = JSON.parse(localStorage.getItem("PageValuesItemsForm2"));

      //initialization
      cardCount = LoadObj.cardCount;
      removedElements = LoadObj.deletedItems;

      let count = 0;
      for (let j = 0; j <= cardCount; j++) {

        if ((removedElements.includes(Number.parseInt(document.getElementById(`b${j}`).textContent)))) {
        } else {
          // console.log(DataOfElem3[count].PositionTitle)
          document.getElementById(`schnamep${j}`).value = DataOfElem[count].schname
          document.getElementById(`schlocp${j}`).value = DataOfElem[count].schloc
          document.getElementById(`edustrdatep${j}`).value = DataOfElem[count].edustrdate
          document.getElementById(`eduendatep${j}`).value = DataOfElem[count].eduendate
          document.getElementById(`degp${j}`).value = DataOfElem[count].deg
          document.getElementById(`fieldp${j}`).value = DataOfElem[count].field
          count++;
          if (j !== 0) {

            document.getElementById(`deleteElement${j}`).addEventListener("click", () => {
              removedElements.push(Number.parseInt(document.getElementById(`b${j}`).textContent));
              document.getElementById(`p${j}`).style.display = "none";

              // console.log(removedElements)

            })
          }
        }
      }
    }


    // const TotalElementHTMLCode = localStorage.getItem("ResumeFrom3HTML");
    // const TotalElementHTMLCodeCount = JSON.parse(localStorage.getItem("Education")).length - 1;

    // document.getElementById("addnew").innerHTML = TotalElementHTMLCode;

    // cardCount = TotalElementHTMLCodeCount;
    // setcardcnt(TotalElementHTMLCodeCount)
    // const DataOfElem = JSON.parse(localStorage.getItem("Education"))
    // for (let i = 0; i < DataOfElem.length; i++) {
    //   document.getElementById(`schnamep${i}`).value = DataOfElem[i].schname
    //   document.getElementById(`schlocp${i}`).value = DataOfElem[i].schloc
    //   document.getElementById(`edustrdatep${i}`).value = DataOfElem[i].edustrdate
    //   document.getElementById(`eduendatep${i}`).value = DataOfElem[i].eduendate
    //   document.getElementById(`degp${i}`).value = DataOfElem[i].deg
    //   document.getElementById(`fieldp${i}`).value = DataOfElem[i].field


    //   // console.log(DataOfElem[i])
    // }
  }

  useEffect(() => {
    if (localStorage.getItem("Education")) {
      populateFormAgain()
    }
  }, [])

  return (
    <>
      <Navbar theme={"dark"} bgcolor={"#151515"}  />
      <div style={{ fontFamily: "Questrial", textAlign: "center", marginTop: "50px" }}>
        <h2>Educational Details</h2>
      </div>
      <div id='container' className="container text-center " style={{ width: "800px", marginTop: "30px" }}>

        <div id="addnew">
          <div>
            <div id="p0"></div>

              <span id="b0" style={{ display: "none" }}>0</span>
              <div className="row row-cols-2">
                <div className="col"><label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <input id="schnamep0" type="text" className="form-control" placeholder="School/College Name" /></div>

                <div className="col"><label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <input type="text" id="schlocp0" className="form-control" placeholder="School/College Location" /></div>

                <div className="col"><label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <input type="text" id="edustrdatep0" className="form-control" placeholder="Start Date" /></div>

                <div className="col"><label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <input type="text" id="eduendatep0" className="form-control" placeholder="End Date" /></div>

                <div className="col"><label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <input type="text" id="degp0" className="form-control" placeholder="Degree" /></div>

                <div className="col"><label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <input type="text" className="form-control" id="fieldp0" placeholder="Field of Study" /></div>

              </div>
            </div>


          </div>
          <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>

        </div>

        {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" }}>

                <button className="btn btn-success" onClick={displayEle} style={{ marginRight: "50px", width: "180px", fontSize: "18px" }} >Previous</button>
                <button onClick={loadToLocalStorage} className="btn btn-success" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }} >Next</button>
            </div> */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit"  , marginBottom:"10vh"}}>

          <Link to="/resumeform2" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>

          {/* to="/resumeform4" */}
          <Link onClick={loadToLocalStorage} to="/resumeform4" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>

        </div>
        <Footer />
      </>
      )
}

      export default ResumeForm3