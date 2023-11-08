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

    const coa = useRef();
    const cob = useRef();
    const coc = useRef();
    const q1a = useRef();
    const q1b = useRef();
    const q1c = useRef();

    const handleChange=()=>{
      localStorage.setItem("coa",coa.current.value);
      localStorage.setItem("cob",cob.current.value);
      localStorage.setItem("coc",coc.current.value);
      localStorage.setItem("q1a",q1a.current.value);
      localStorage.setItem("q1b",q1b.current.value);
      localStorage.setItem("q1c",q1c.current.value);
    }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"}/>
    
    <div style={{height:"900px",backgroundColor:"white", border:"2px solid white"}}>

      <div style={{fontFamily:"Questrial", marginTop:"50px"}}>
        <h2>Question 1 Details</h2>
      </div>

      <div class="container text-center " style={{width:"800px",marginTop:"30px"}}>
      
     <br />

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={coa} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q1a} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.1 (a)"/></div>
      
      <br />
       <br />

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={cob} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q1b} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.2 (b)"/></div>

      <br />
      <br />
     
      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={coc} type="text" class="form-control" style={{width:"250px"}} id="exampleFormControlInput1" placeholder="CO No."/></div>

      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
      <input ref={q1c} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Question No.3 (c)"/></div>
     
     <br />

</div>
  <div style={{display:"flex", justifyContent:"center", marginTop:"80px", fontFamily:"kanit"}}> 

   <Link to="/formquestion"  class="btn btn-outline-danger" style={{marginRight:"50px", width:"180px",fontSize:"18px"}}>Back</Link>

   <Link to="/formquestion3" onClick={handleChange} class="btn btn-outline-success" style={{width:"180px",fontSize:"18px"}}>Next</Link>
  </div>
  {/* <button onClick={handleChange} type="button" class="btn btn-primary">Submit</button> */}
</div>

<Footer/>
    </div>
  )
}
