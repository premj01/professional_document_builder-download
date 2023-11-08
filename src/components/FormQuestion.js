import React, { useRef } from 'react'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';

// 151515

export default function FormResume() {
  document.body.style = 'background: white;';

// const data = useRef();

// const handleChange=()=>{
//   localStorage.setItem("firstName",data.current.value)
//   let last = document.getElementById("lastname")
//   last.value= localStorage.getItem("firstName")
// }

    const testno = useRef();
    const crs = useRef();
    const mrks = useRef();
    const date = useRef();
    const time = useRef();
    const dur = useRef();
    const term = useRef();
    const prog = useRef();
    const code = useRef();

    const handleChange=()=>{
      localStorage.setItem("testno",testno.current.value);
      localStorage.setItem("course",crs.current.value);
      localStorage.setItem("marks",mrks.current.value);
      localStorage.setItem("datepaper",date.current.value);
      localStorage.setItem("timepaper",time.current.value);
      localStorage.setItem("durationpaper",dur.current.value);
      localStorage.setItem("term",term.current.value);
      localStorage.setItem("prog",prog.current.value);
      localStorage.setItem("code",code.current.value);
    }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"}/>
    
    <div style={{height:"900px",backgroundColor:"white", border:"2px solid white"}}>

      <div style={{fontFamily:"Questrial", marginTop:"50px"}}>
        <h2>General Details</h2>
      </div>

      <div class="container text-center " style={{width:"800px",marginTop:"30px"}}>
      
  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={testno} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Periodic Test No.1/2"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={prog} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Programme"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={crs} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Course"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={code} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Course Code"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={mrks} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Marks"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={term} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Term"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={date} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Date"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={time} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Time"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={dur} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Duration"/></div>
  

</div>
  <div style={{display:"flex", justifyContent:"center", marginTop:"80px", fontFamily:"kanit"}}> 

   <Link to="/"  class="btn btn-outline-danger" style={{marginRight:"50px", width:"180px",fontSize:"18px"}}>Back</Link>

   <Link to="/formquestion2" onClick={handleChange} class="btn btn-outline-success" style={{width:"180px",fontSize:"18px"}}>Next</Link>
  </div>

  {/* <button onClick={handleChange} type="button" class="btn btn-primary">Submit</button> */}

</div>

<Footer/>
    </div>
  )
}
