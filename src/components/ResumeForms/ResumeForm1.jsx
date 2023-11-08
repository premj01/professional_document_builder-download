import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


const ResumeForm1 = () => {

    document.body.style = 'background: white;';

    const fname = useRef();
    const lname = useRef();
    const phn = useRef();
    const eid = useRef();
    const add = useRef();
    const city = useRef();
    const pcode = useRef();
    const state = useRef();
    const country = useRef();
    const jobtitle = useRef();

    const [profileImg, setprofileImg] = useState(null)

    const handleChange = () => {
        const personalDetails = {
            "firstname": fname.current.value,
            "lastname": lname.current.value,
            "phone": phn.current.value,
            "email": eid.current.value,
            "address": add.current.value,
            "city": city.current.value,
            "postcode": pcode.current.value,
            "state": state.current.value,
            "country": country.current.value,
            "jobtitle": jobtitle.current.value
        }
        localStorage.setItem("personalDetails", JSON.stringify(personalDetails))
    }

    useEffect(() => {
        if (localStorage.getItem("personalDetails")) {
            const personalDetails = JSON.parse(localStorage.getItem("personalDetails"));
            if (personalDetails !== null) {
                fname.current.value = personalDetails.firstname;
                lname.current.value = personalDetails.lastname;
                phn.current.value = personalDetails.phone;
                eid.current.value = personalDetails.email;
                add.current.value = personalDetails.address;
                city.current.value = personalDetails.city;
                pcode.current.value = personalDetails.postcode;
                state.current.value = personalDetails.state;
                country.current.value = personalDetails.country;
                jobtitle.current.value = personalDetails.jobtitle;

                const img = localStorage.getItem("profilePhoto")
                setprofileImg(img);

            } else {
                console.warn("value not present ")

            }
        }
    }, [])



    //image upload
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
            <Navbar theme={"dark"} bgcolor={"#151515"}  />
            <div style={{ height: "900px", backgroundColor: "white", border: "2px solid white" }}>

                <div className='container' style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                    <h2>Personal Details</h2>
                </div>

                <div class="container text-center " style={{ width: "800px", marginTop: "30px" }}>
                    <div class="row row-cols-2">

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={fname} type="text" class="form-control" id="idfirstname" placeholder="First Name" /></div>

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={lname} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" /></div>

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={phn} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone" /></div>

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={eid} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" /></div>
                    </div>


                    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                        <input ref={add} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Street name,no." /></div>

                    <div class="row row-cols-2">

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={city} type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" /></div>

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={pcode} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Postcode" /></div>

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={state} type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" /></div>

                        <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                            <input ref={country} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Country" /></div>
                    </div>

                    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
                        <input ref={jobtitle} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Job Title" /></div>

                    <div class="mb-3" style={{ marginTop: "20px" }}>
                        <label for="formFile" class="form-label" style={{ fontFamily: "Questrail", fontSize: "16px", fontStyle: "italic" }}>Upload your photo <span>  Note :Image size should be 1:1.</span></label>
                        <input class="form-control" type="file" accept='image/*' onChange={handlePhotoUpload} id="formFile" />
                    </div>
                    <div style={{width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center"}} ><img src={profileImg} alt="" height="100" style={{height:"150px"}} /></div>

                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" }}>

                    <Link to="/"  class="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>

                    <Link to="/resumeform2" onClick={handleChange} class="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
                </div>

                {/* <button onClick={handleChange} type="button" class="btn btn-primary">Submit</button> */}

            </div>
            <Footer />
        </>
    )
}

export default ResumeForm1