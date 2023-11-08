import React, { useRef , useState , useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import '../styleResume/Resume02.css'

// import img from '../Images/logo.jpeg'
// import img from "../bigimg.png";

const Business02 = () => {
  // localStorage.setItem("cardwhatsapp", "7620349964");
  // localStorage.setItem("cardfirstname", "Prem");
  // localStorage.setItem("cardlastname", "Jadhav");
  // localStorage.setItem("cardphone", "9112926020");
  // localStorage.setItem("cardemail", "premjadhav@gmail.com");
  // localStorage.setItem("cardaddress", "0th floor,Boys Hostel,Gov.Poly.,Nashik");
  // localStorage.setItem("cardjobtitle", "Software Developer");
  // localStorage.setItem("cardtagline", "Unlocking the potential of data");
  // localStorage.setItem("cardcompname", "ViswaTech");
  // localStorage.setItem("cardwebsite", "www.vishwatech.in");

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
        value={
          "https://wa.me/+91" + cardWhatsApp
        }
        fgColor="#3d3d3d"
        viewBox={`0 0 256 256`}
      />
    );
  };

  const downloadImage = () => {
    document.getElementById("front02").style.marginBottom = "0px";
    document.getElementById("front02").style.marginTop = "0px";

    const table = document.getElementById("cardforntBack");

    html2canvas(table).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "business.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });

    document.getElementById("front02").style.marginBottom = "20px";
    document.getElementById("front02").style.marginTop = "40px";
  };

  const downloadPDF = () => {
    document.getElementById("front02").style.marginBottom = "0px";
    document.getElementById("front02").style.marginTop = "0px";

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

    document.getElementById("front02").style.marginBottom = "10px";
    document.getElementById("front02").style.marginTop = "40px";
  };

  document.body.style = "background: white;";

  return (
    <div className="container02">
      <div id="cardforntBack" ref={pdfRef}>
        <div className="front02" id="front02">
          <div className="front02-logo">
            <div>
              <img src={Image} alt="" />
            </div>
          </div>
          <div className="smallline02"></div>
          <div className="front02-title">
            <div className="title02">
              {cardcompname}
            </div>
            <div className="tagline02">
              {cardtagline}
            </div>
          </div>
          <div className="bigline02"></div>

          <div className="front02-details">
            <div className="cardowner02">
              <h5>
                {cardfirstname} &nbsp;
                {cardlastname}
              </h5>
              <p>{cardjobtitle}</p>
            </div>
            <div className="back02-container">
              <div className="back02-details">
                <ion-icon
                  className="back02-icon"
                  name="phone-portrait-outline"
                ></ion-icon>
                <p className="back02-detail02">
                  {cardphone}
                </p>
              </div>
              <div className="back02-details">
                <ion-icon
                  className="back02-icon"
                  name="mail-outline"
                ></ion-icon>
                <p className="back02-detail02">
                  {cardemail}
                </p>
              </div>
              <div className="back02-details">
                <ion-icon
                  className="back02-icon"
                  name="globe-outline"
                ></ion-icon>
                <p className="back02-detail02">
                  {cardwebsite}
                </p>
              </div>
              <div className="back02-details">
                <ion-icon
                  className="back02-icon"
                  name="location-outline"
                ></ion-icon>
                <p className="back02-details02">
                {cardaddress},{cardcity}, {cardstate}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="back02">
          <div className="back02-cnt">
            <div className="back02-qr">
              {/* <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={
                  "https://wa.me/+91" + localStorage.getItem("cardwhatsapp")
                }
                fgColor="#3d3d3d"
                viewBox={`0 0 256 256`}
              /> */}
              {QRcode}
            </div>
            <div className="back-smallline02"></div>
            <div className="back02-titletag">
              <div className="back02-title">
                {cardcompname}
              </div>
              <div className="back02-tagline">
                {cardtagline}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="business01-btn-container">
        <button
          id="mybtn"
          onClick={downloadPDF}
          type="button"
          className="btn btn-outline-success business02-btn"
        >
          Download PDF
        </button>
        <button
          onClick={downloadImage}
          type="button"
          className="btn btn-outline-success business02-btn"
        >
          Download Image
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "kanit",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/business-1"
          class="btn btn-outline-success"
          style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}
        >
          Back
        </Link>

        <Link
          to="/business-3"
          class="btn btn-outline-success"
          style={{ width: "180px", fontSize: "18px" }}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Business02;
