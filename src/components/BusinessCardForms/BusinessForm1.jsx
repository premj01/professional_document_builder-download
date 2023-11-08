import React, { useRef, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
const BusinessForm1 = () => {
    document.body.style = 'background: white;';



    const cardfname = useRef();
    const cardlname = useRef();
    const cardphn = useRef();
    const cardeid = useRef();
    const cardadd = useRef();
    const cardcity = useRef();
    const cardpcode = useRef();
    const cardstate = useRef();
    const cardcountry = useRef();
    const cardjobtitle = useRef();
    const cardwebsite = useRef();
    const cardcompname = useRef();
    const cardtagline = useRef();
    const cardwan = useRef();

    const [profileImg, setprofileImg] = useState(null)


    const handleChange = () => {
        // handlePhotoUpload()
        localStorage.setItem("businessCardObj", JSON.stringify({
            cardfirstname: cardfname.current.value,
            cardlastname: cardlname.current.value,
            cardphone: cardphn.current.value,
            cardemail: cardeid.current.value,
            cardaddress: cardadd.current.value,
            cardcity: cardcity.current.value,
            cardpostcode: cardpcode.current.value,
            cardstate: cardstate.current.value,
            cardcountry: cardcountry.current.value,
            cardjobtitle: cardjobtitle.current.value,
            cardwebsite: cardwebsite.current.value,
            cardcompname: cardcompname.current.value,
            cardtagline: cardtagline.current.value,
            cardWhatsApp: cardwan.current.value
        }))
    }

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageDataUrl = e.target.result;
                localStorage.setItem('profilePhoto', imageDataUrl);
                const img = localStorage.getItem("profilePhoto")
                setprofileImg(img);
            }

            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Navbar theme={"dark"} bgcolor={"#151515"} />
            <div style={{ backgroundColor: "white", border: "2px solid white" }}>

                <div style={{ fontFamily: "Questrial", marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h2>Card Details</h2>
                </div>

                <div className="container text-center " style={{ width: "800px", marginTop: "30px" }}>
                    <div className="row row-cols-2">

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardfname} type="text" className="form-control" id="idfirstname" placeholder="First Name" /></div>

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardlname} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" /></div>

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardphn} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone" /></div>

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardwan} type="number" className="form-control" id="exampleFormControlInput1" placeholder="WhatsApp number (to generate QR code)" /></div>
                    </div>


                    <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                        <input ref={cardeid} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" /></div>

                    <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                        <input ref={cardcompname} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Company Name" /></div>

                    <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                        <input ref={cardtagline} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Tagline" /></div>

                    <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                        <input ref={cardwebsite} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Website" /></div>

                    <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                        <input ref={cardadd} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" /></div>

                    <div className="row row-cols-2">

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardcity} type="text" className="form-control" id="exampleFormControlInput1" placeholder="City" /></div>

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardpcode} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Postcode" /></div>

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardstate} type="text" className="form-control" id="exampleFormControlInput1" placeholder="State" /></div>

                        <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                            <input ref={cardcountry} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Country" /></div>
                    </div>

                    <div className="col"><label for="exampleFormControlInput1" className="form-label"></label>
                        <input ref={cardjobtitle} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Job Title" /></div>



                    {/* Img */}
                    <div class="mb-3" style={{ marginTop: "20px" }}>
                        <label for="formFile" class="form-label" style={{ fontFamily: "Questrail", fontSize: "16px", fontStyle: "italic" }}>Upload your logo <span>  Note :Image size should be 1:1.</span></label>
                        <input class="form-control" type="file" accept='image/*' onChange={handlePhotoUpload} id="formFile" />
                    </div>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} ><img src={profileImg} alt="" height="100" style={{ height: "150px" }} /></div>

                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "115px", fontFamily: "kanit", marginBottom: "20vh" }}>

                    <Link to="/" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>

                    <Link to='/business-1' onClick={handleChange} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
                </div>

                {/* <button onClick={handleChange} type="button" className="btn btn-primary">Submit</button> */}

            </div>
            <Footer />

        </>
    )
}

export default BusinessForm1