import { background } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


let cardCount4 = 0;
let cardToLood4;
let removedElements4 = [];

const ResumeForm4 = () => {

    document.body.style = 'background: white;';


    const [cardcnt, setcardcnt] = useState(0)

    useEffect(() => {

    }, [])

    const additem = () => {

        if ((cardCount4 - removedElements4.length) < 4) {
            cardCount4 += 1;
            setcardcnt(cardCount4);


            // setcardToLoad(<>{cardToLoad}
            cardToLood4 = `
          <div id="p${cardCount4}">
              <span id="b${cardCount4}" style="display:none">${cardCount4}</span>
              
  
              <div style="display: flex;flex-direction: row;justify-content:center;align-items: center;">
                <div class="col">
                    <label for="sk0" class="form-label"></label>
                    <input id="sk${cardCount4}" type="text" class="form-control" placeholder="Skill" />
                </div>
                <div style="margin-top: 28px;cursor:pointer;"> <span class="material-symbols-outlined" id="deleteElement${cardCount4}">delete</span></div>
                 
            </div>
          </div>
              
          `

            const ele = document.createElement('div');
            ele.innerHTML = cardToLood4;
            document.getElementById("addnew4").appendChild(ele);

            document.getElementById(`deleteElement${cardCount4}`).addEventListener("click", () => {
                const cardNumber = document.getElementById(`b${cardcnt + 1}`);
                const cardElement = document.getElementById(`p${cardcnt + 1}`);

                removedElements4.push(Number.parseInt(cardNumber.textContent))
                cardElement.style.display = "none";



            })
        }
        else {
            alert("More than 5 Skills are not allowed in current version")
        }



    }

    // const displayEle = () => {
    //   console.log("Elements are ")
    //   removedElements4.forEach(element => {
    //     console.log(element, " ", typeof element)
    //   });
    // }

    const loadToLocalStorage = () => {

        const ObjOfElements4 = []

        for (let i = 0; i <= cardCount4; i++) {
            if (!(removedElements4.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
                ObjOfElements4.push({
                    skill: document.getElementById(`sk${i}`).value
                })

            }
            else {
                // console.log("not present " + i)
            }


        }

        localStorage.setItem("skills", JSON.stringify(ObjOfElements4))
        console.log(ObjOfElements4)
        localStorage.setItem("ResumeFrom4HTML", document.getElementById("addnew4").innerHTML)
        //for recovery of code 
        localStorage.setItem("PageValuesItemsForm4", JSON.stringify({
            deletedItems: removedElements4,
            cardCount: cardCount4
        }));
    }


    const populateFormAgain4 = () => {

        if (localStorage.getItem("skills")) {
            const TotalElementHTMLCode4 = localStorage.getItem("ResumeFrom4HTML");
            const TotalElementHTMLCode4Count = JSON.parse(localStorage.getItem("skills")).length - 1;

            document.getElementById("addnew4").innerHTML = TotalElementHTMLCode4;

            cardCount4 = TotalElementHTMLCode4Count;
            setcardcnt(TotalElementHTMLCode4Count)
            const DataOfElem4 = JSON.parse(localStorage.getItem("skills"))
             
            let LoadObj = JSON.parse(localStorage.getItem("PageValuesItemsForm4"));

            //initialization
            cardCount4 = LoadObj.cardCount;
            removedElements4 = LoadObj.deletedItems;

            let count = 0;
            for (let j = 0; j <= cardCount4; j++) {

                if ((removedElements4.includes(Number.parseInt(document.getElementById(`b${j}`).textContent)))) {
                } else {
                    document.getElementById(`sk${j}`).value = DataOfElem4[count++].skill
                    if (j !== 0) {

                        document.getElementById(`deleteElement${j}`).addEventListener("click", () => {
                            removedElements4.push(Number.parseInt(document.getElementById(`b${j}`).textContent));
                            document.getElementById(`p${j}`).style.display = "none";

                            console.log(removedElements4)

                        })
                    }
                     
                }
            }

        }

    }

    useEffect(() => {
        if (localStorage.getItem("skills")) {
            populateFormAgain4()
        }
    }, [])

    return (
        <>
            <Navbar  theme={"dark"} bgcolor={"#151515"} />
            <div style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                <h2>Key Skills</h2>
            </div>
            <div id='container' className="container text-center " style={{ width: "800px", marginTop: "30px" , background:"white" }}>

                <div id="addnew4">
                    <div id="p0"></div>
                    <span id="b0" style={{ display: "none" }}>0</span>
                    {/* skills */}
                    <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }}>
                        <div class="col">
                            <input id="sk0" type="text" class="form-control" placeholder="Skill - like C++, Java" />
                        </div>
                        <div style={{ marginTop: "28px", width: "24px" }}> <span class=""></span></div>

                    </div>

                </div>
                <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" , marginBottom:"35vh" }}>

                <Link to="/resumeform3" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>

                
                <Link   onClick={loadToLocalStorage} to="/resumeform5" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>

            </div>
            <Footer />
        </>
    )

}

export default ResumeForm4