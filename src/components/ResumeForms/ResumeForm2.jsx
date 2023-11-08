import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

let cardCount2 = 0;
let cardToLood2;
let removedElements2 = [];

const ResumeForm2 = () => {

    // const [text, setText] = useState('');
    // const maxCharacters = 100;
    // const chaercterLimitProfessionalDetails = (event) => {
    //     const inputValue = event.target.value;
    //     if (inputValue.length <= maxCharacters) {
    //         setText(inputValue);
    //     }
    // };
  document.body.style = 'background: white;';



    const [cardcnt2, setcardcnt2] = useState(0)

    const additem = () => {

        if ((cardCount2 - removedElements2.length) < 2) {
            cardCount2 += 1;
            setcardcnt2(cardCount2);


            // setcardToLoad(<>{cardToLoad}
            cardToLood2 = `
        <div id="p${cardCount2}">
         
            <span id="b${cardCount2}" style="display:none">${cardCount2}</span>
            <div class="container" style="width: 800px">
            <hr>
            <span class="material-symbols-outlined" style="float:right ; cursor: pointer;" id="deleteElement${cardCount2}" >delete</span>
            </div>
             <p style="height:2px"></p>
            <div class="container text-center" style="width: 800px ;  margin-top: 30px">
                <div class="row row-cols-2">

                    <div class="col"><label for="postitle${cardCount2}" class="form-label"></label>
                        <input id='postitle${cardCount2}' type="text" class="form-control" placeholder="Position Title" /></div>

                    <div class="col"><label for="compname${cardCount2}" class="form-label"></label>
                        <input id='compname${cardCount2}' type="text" class="form-control" placeholder="Company Name" /></div>

                    <div class="col"><label for="strdate${cardCount2}" class="form-label"></label>
                        <input id='strdate${cardCount2}' type="text" class="form-control" placeholder="Start Date" /></div>

                    <div class="col"><label for="endate${cardCount2}" class="form-label"></label>
                        <input id='endate${cardCount2}' type="text" class="form-control" placeholder="End Date" /></div>
                </div>


                <div class="mb-3" style="margin-top: 30px">

                    <textarea rows="5" id="worksum${cardCount2}" class="form-control" placeholder='Work Summary...'  ></textarea>
                </div>
            </div>

        </div>

    
            
        `

            const ele = document.createElement('div');
            ele.innerHTML = cardToLood2;
            document.getElementById("addnew2").appendChild(ele);

            document.getElementById(`deleteElement${cardCount2}`).addEventListener("click", () => {
                const cardNumber = document.getElementById(`b${cardcnt2 + 1}`);
                const cardElement = document.getElementById(`p${cardcnt2 + 1}`);

                removedElements2.push(Number.parseInt(cardNumber.textContent))
                cardElement.style.display = "none";



            })
        }
        else {
            alert("More than 3 elements are not allowed")
        }



    }

    const loadToLocalStorage2 = () => {

        const ObjOfElements2 = []

        for (let i = 0; i <= cardCount2; i++) {
            if (!(removedElements2.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
                ObjOfElements2.push({



                    PositionTitle: document.getElementById(`postitle${i}`).value,
                    ComponyName: document.getElementById(`compname${i}`).value,
                    StartDate: document.getElementById(`strdate${i}`).value,
                    EndDate: document.getElementById(`endate${i}`).value,
                    WorkSummary: document.getElementById(`worksum${i}`).value
                })

                console.log(i)
            }
            else {
                console.log("not here " + i)
            }


        }

        localStorage.setItem("ProfessionalExperience", JSON.stringify(ObjOfElements2))
        console.log(ObjOfElements2)
        localStorage.setItem("Form2Cards", document.getElementById("addnew2").innerHTML);

        //recovery details like session tracking
        localStorage.setItem("PageValuesItemsForm2", JSON.stringify({
            deletedItems: removedElements2,
            cardCount: cardCount2
        }));
        // ObjOfElements2.push({
        //     ""
        // })
        // console.log(ObjOfElements2)
    }


    const populateUsingLocalStorage = () => {

        if (localStorage.getItem("ProfessionalExperience")) {
            const TotalElementHTMLCode2 = localStorage.getItem("Form2Cards");
            const TotalElementHTMLCode2Count = JSON.parse(localStorage.getItem("ProfessionalExperience")).length - 1;

            document.getElementById("addnew2").innerHTML = TotalElementHTMLCode2;

            cardCount2 = TotalElementHTMLCode2Count;
            setcardcnt2(TotalElementHTMLCode2Count)
            const DataOfElem2 = JSON.parse(localStorage.getItem("ProfessionalExperience"))

            let LoadObj = JSON.parse(localStorage.getItem("PageValuesItemsForm2"));

            //initialization
            cardCount2 = LoadObj.cardCount;
            removedElements2 = LoadObj.deletedItems;

            let count = 0;
            for (let j = 0; j <= cardCount2; j++) {

                if ((removedElements2.includes(Number.parseInt(document.getElementById(`b${j}`).textContent)))) {
                } else {
                    // console.log(DataOfElem2[count].PositionTitle)
                    // document.getElementById(`${j}`).value = DataOfElem2[count++].skill
                    document.getElementById(`postitle${j}`).value = DataOfElem2[count].PositionTitle
                    document.getElementById(`compname${j}`).value = DataOfElem2[count].ComponyName
                    document.getElementById(`strdate${j}`).value = DataOfElem2[count].StartDate
                    document.getElementById(`endate${j}`).value = DataOfElem2[count].EndDate
                    document.getElementById(`worksum${j}`).value = DataOfElem2[count].WorkSummary
                    count++;
                    if (j !== 0) {

                        document.getElementById(`deleteElement${j}`).addEventListener("click", () => {
                            removedElements2.push(Number.parseInt(document.getElementById(`b${j}`).textContent));
                            document.getElementById(`p${j}`).style.display = "none";

                            // console.log(removedElements2)

                        })
                    }
                }
            }
        }
        
    }

    useEffect(() => {
        populateUsingLocalStorage();
    }, [])

    return (

        <>
            <Navbar  theme={"dark"} bgcolor={"#151515"} />
            <div style={{ fontFamily: "Questrial", textAlign: "center", marginTop: "50px" }}>
                <h2>Professional Experience</h2>
            </div>
            {/* <div className="container" style={{ width: "800px" }}> */}
            <div id='addnew2'>

                <span id="b0" style={{ display: "none" }}>0</span>
                <div className="container text-center " style={{ width: "800px", marginTop: "30px" }}>
                    <div className="row row-cols-2">

                        <div className="col"><label for="postitle0" className="form-label"></label>
                            <input id='postitle0' type="text" class="form-control" placeholder="Position Title" /></div>

                        <div className="col"><label for="compname0" className="form-label"></label>
                            <input id='compname0' type="text" className="form-control" placeholder="Company Name" /></div>

                        <div class="col"><label for="strdate0" className="form-label"></label>
                            <input id='strdate0' type="text" className="form-control" placeholder="Start Date" /></div>

                        <div className="col"><label for="endate0" class="form-label"></label>
                            <input id='endate0' type="text" className="form-control" placeholder="End Date" /></div>
                    </div>


                    <div className="mb-3" style={{ marginTop: "30px" }}>

                        <textarea rows="5" id="worksum0" className="form-control" placeholder='Work Summary...'  ></textarea>
                    </div>





                </div>
            </div>
            {/* </div> */}

            <div className="container" style={{ width: "800px" }}>

                <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>


            </div>


            <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" , marginBottom:"10vh" }}>

                <Link to="/resumeform1" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>

                <Link onClick={loadToLocalStorage2} to="/resumeform3"  className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>


            </div>

            <Footer />

        </>
    )
}

export default ResumeForm2