import React, { useEffect, useState, useRef } from "react";
// import logo from '../Images/logo.jpeg'
import "../styleBusiness/business01.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//temp code
import logo from "../bigimg.png";
// let cardWhatsApp1 = "";
const Business01 = () => {
  //temp values
  // localStorage.setItem('cardwhatsapp', '7620349964')
  // localStorage.setItem('cardfirstname', 'Prem')
  // localStorage.setItem('cardlastname', 'Jadhav')
  // localStorage.setItem('cardphone', '9112926020')
  // localStorage.setItem('cardemail', 'premjadhav@gmail.com')
  // localStorage.setItem('cardaddress', '0th floor,Boys Hostel,Gov.Poly.,Nashik')
  // localStorage.setItem('cardjobtitle', 'Software Developer')
  // localStorage.setItem('cardtagline', 'Unlocking the potential of data')
  // localStorage.setItem('cardcompname', 'ViswaTech')
  // localStorage.setItem('cardwebsite', 'www.vishwatech.in')

  const pdfRef = useRef();

  const [cardWhatsApp, setcardWhatsApp] = useState();
  const [cardaddress, setcardaddress] = useState();
  const [cardcity, setcardcity] = useState();
  const [cardcompname, setcardcompname] = useState();
  const [cardcountry, setcardcountry] = useState();
  const [cardemail, setcardemail] = useState();
  const [cardfirstname, setcardfirstname] = useState();
  const [cardjobtitle, setcardjobtitle] = useState();
  const [cardlastname, setcardlastname] = useState();
  const [cardphone, setcardphone] = useState();
  const [cardpostcode, setcardpostcode] = useState();
  const [cardstate, setcardstate] = useState();
  const [cardtagline, setcardtagline] = useState();
  const [cardwebsite, setcardwebsite] = useState();
  const [Image, setImage] = useState();

  //QR code
  const [QRcode, setQRcode] = useState();

  useEffect(() => {
    const businessCardObj = JSON.parse(localStorage.getItem("businessCardObj"));
    setcardWhatsApp(businessCardObj.cardWhatsApp);
    setcardaddress(businessCardObj.cardaddress);
    setcardcity(businessCardObj.cardcity);
    setcardcompname(businessCardObj.cardcompname);
    setcardcountry(businessCardObj.cardcountry);
    setcardemail(businessCardObj.cardemail);
    setcardfirstname(businessCardObj.cardfirstname);
    setcardjobtitle(businessCardObj.cardjobtitle);
    setcardlastname(businessCardObj.cardlastname);
    setcardphone(businessCardObj.cardphone);
    setcardpostcode(businessCardObj.cardpostcode);
    setcardstate(businessCardObj.cardstate);
    setcardtagline(businessCardObj.cardtagline);
    setcardwebsite(businessCardObj.cardwebsite);

    setImage(localStorage.getItem("profilePhoto"));
    // cardWhatsApp1 = cardWhatsApp;

    //QR code
    setQRcode(loadQRCode());
  }, []);

  const loadQRCode = () => {
    return (
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"https://wa.me/+91" + cardWhatsApp}
        bgColor="#141414"
        fgColor="#ff9100"
        viewBox={`0 0 256 256`}
      />
    );
  };

  const downloadImage = () => {
    document.getElementById("front").style.marginBottom = "0px";

    const table = document.getElementById("cardforntBack");

    html2canvas(table).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "business.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });

    document.getElementById("front").style.marginBottom = "20px";
  };

  const downloadPDF = () => {
    document.getElementById("front").style.marginBottom = "0px";

    const mybtn = document.getElementById("mybtn");
    mybtn.style.display = "none";
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a3", false);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 5;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("business.pdf");
      mybtn.style.display = "block";
    });

    document.getElementById("front").style.marginBottom = "10px";
  };

  document.body.style = "background: white;";


  //  rect ti print code
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const PrintPDFComponent = () => {
    handlePrint()
  }

  return (
    <div>
      <div className="container01">
        <div ref={componentRef} id="cardforntBack">
          <div  className="front" id="front">
            <div className="hexagon hex1">
              <div className="front-contain">
                <div className="image01">
                  <img src={Image} alt="" className="front-img" />
                </div>
                <div className="compandtag">
                  <h2 className="title01">{cardcompname}</h2>
                  <p className="desc01">{cardtagline}</p>
                </div>
              </div>
            </div>
            <div className="cardowner">
              <h5>
                {cardfirstname} &nbsp; {cardlastname}
              </h5>
              <p>{cardjobtitle}</p>
            </div>
          </div>
          <div className="back">
            <div className="hexagon hex2">
              <div className="qrcode">
                {/* <ion-icon name="qr-code-outline" style={{ height: '80px', width: '80px' }}></ion-icon> */}
                {/* <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={"https://wa.me/" + cardWhatsApp1}
                  bgColor="#141414"
                  fgColor="#ff9100"
                  viewBox={`0 0 256 256`}
                /> */}
                {QRcode}
              </div>
            </div>
            <div className="back-container">
              <div className="back-details">
                {/* <ion-icon
                  className="back-icon"
                  name="phone-portrait-outline"
                ></ion-icon> */}
               <i class="fa-light fa-mobile"></i>
                <p className="back-detail01">{cardphone}</p>
              </div>
              <div className="back-details">
                {/* <ion-icon className="back-icon" name="mail-outline"></ion-icon> */}
                <i className="fa-regular fa-envelope fa-lg" style={{color: "#b0b0b0"}}></i>
                <p className="back-detail01">{cardemail}</p>
              </div>
              <div className="back-details">
                {/* <ion-icon className="back-icon" name="globe-outline"></ion-icon> */}
                <p className="back-detail01">{cardwebsite}</p>
              </div>
              <div className="back-details">
                {/* <ion-icon className="back-icon" name="location-outline"></ion-icon> */}
                <p className="back-details01">{cardaddress},{cardcity}, {cardstate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="business01-btn-container">
          <button
            id="mybtn"
            onClick={PrintPDFComponent}
            type="button"
            className="btn btn-outline-success business01-btn"
          >
            Download PDF
          </button>
          <button
            onClick={downloadImage}
            type="button"
            className="btn btn-outline-success business01-btn"
          >
            Download Image
          </button>
        </div>
        {/* navigate buttons */}
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "kanit",
              marginBottom: "20px"
            }}
          >
            <Link
              to="/business-card-form"
              class="btn btn-outline-danger"
              style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}
            >
              Back
            </Link>

            <Link
              to="/business-2"
              class="btn btn-outline-success"
              style={{ width: "180px", fontSize: "18px" }}
            >
              Next
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default Business01;
