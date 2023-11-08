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

    const co2a = useRef();
    const co2b = useRef();
    const co2c = useRef();
    const co2d = useRef();
    const co2e = useRef();
    const q2a = useRef();
    const q2b = useRef();
    const q2c = useRef();
    const q2d = useRef();
    const q2e = useRef();
    

    const handleChange=()=>{
      localStorage.setItem("co2a",co2a.current.value);
      localStorage.setItem("co2b",co2b.current.value);
      localStorage.setItem("co2c",co2c.current.value);
      localStorage.setItem("co2d",co2d.current.value);
      localStorage.setItem("co2e",co2e.current.value);
      localStorage.setItem("q2a",q2a.current.value);
      localStorage.setItem("q2b",q2b.current.value);
      localStorage.setItem("q2c",q2c.current.value);
      localStorage.setItem("q2d",q2d.current.value);
      localStorage.setItem("q2e",q2e.current.value);
    }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"}/>
    
    <div style={{height:"1300px",backgroundColor:"white", border:"2px solid white"}}>

      <div style={{fontFamily:"Questrial", marginTop:"50px"}}>
        <h2>Question 2 Details</h2>
      </div>

      <div class="container text-center " style={{width:"800px",marginTop:"30px"}}>
      
     <br />

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={co2a} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q2a} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.1 (a)"/></div>
      
      <br />
       <br />

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={co2b} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q2b} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.2 (b)"/></div>

      <br />
      <br />
     
      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={co2c} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q2c} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.3 (c)"/></div>
     
     <br />
     <br />

     <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={co2d} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q2d} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.4 (d)"/></div>

      <br />
      <br />

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={co2e} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q2e} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.5 (e)"/></div>

      <br />
      <br />

</div>
  <div style={{display:"flex", justifyContent:"center", marginTop:"80px", fontFamily:"kanit"}}> 

   <Link to="/formquestion2"  class="btn btn-outline-danger" style={{marginRight:"50px", width:"180px",fontSize:"18px"}}>Back</Link>

   <Link to="/questionpaper" onClick={handleChange} class="btn btn-outline-success" style={{width:"180px",fontSize:"18px"}}>Next</Link>
  </div>

  {/* <button onClick={handleChange} type="button" class="btn btn-primary">Submit</button> */}

</div>

<Footer/>
    </div>
  )
}
