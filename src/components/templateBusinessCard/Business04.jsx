import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
//no need of qr code 
// import QRCode from 'react-qr-code';
import '../styleBusiness/business04.css'


// import img from '../Images/logo.jpeg'
import img from "../bigimg.png"


const Business04 = () => {


    localStorage.setItem('cardwhatsapp', '7620349964')
    localStorage.setItem('cardfirstname', 'Prem')
    localStorage.setItem('cardlastname', 'Jadhav')
    localStorage.setItem('cardphone', '9112926020')
    localStorage.setItem('cardemail', 'premjadhav@gmail.com')
    localStorage.setItem('cardaddress', '0th floor,Boys Hostel,Gov.Poly.,Nashik')
    localStorage.setItem('cardjobtitle', 'Software Developer')
    localStorage.setItem('cardtagline', 'Unlocking the potential of data')
    localStorage.setItem('cardcompname', 'ViswaTech')
    localStorage.setItem('cardwebsite', 'www.vishwatech.in')

    const pdfRef = useRef();


    const downloadImage = () => {

        document.getElementById('front03').style.marginBottom = "0px"
        document.getElementById('front03').style.marginTop = "0px"

        const table = document.getElementById('cardforntBack03');

        html2canvas(table).then(function (canvas) {
            const link = document.createElement('a');
            link.download = 'business.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });

        document.getElementById('front03').style.marginBottom = "20px"
        document.getElementById('front03').style.marginTop = "40px"


    }

    const downloadPDF = () => {

        document.getElementById('front03').style.marginBottom = "0px"
        document.getElementById('front03').style.marginTop = "0px"



        const mybtn = document.getElementById("mybtn");
        mybtn.style.display = 'none';
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a3', false);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 5;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('business.pdf')
            mybtn.style.display = 'block';
        });

        document.getElementById('front03').style.marginBottom = "10px"
        document.getElementById('front03').style.marginTop = "40px"



    }

    document.body.style = 'background: white;';


    return (
        <div className='container04'>
            <div id="cardforntBack04" ref={pdfRef}>
                <div className="front04" id='front03'>
                    
                </div>
                <div className="middle04"></div>
                <div className="back04">

                </div>
            </div>
        </div>
    )
}

export default Business04