import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FormResume from "../FormResume";
import Home from "../Home";
import FormResume2 from "../FormResume2";
import FormResume3 from "../FormResume3";
import FormResume4 from "../FormResume4";
import Resume from "../Templates/Resume";
import FormQuestion from "../FormQuestion";
import FormQuestion2 from "../FormQuestion2";
import FormQuestion3 from "../FormQuestion3";
import QuestionPaper from "../Templates/QuestionPaper";

// import forms
//resume
import ResumeForm1 from "../ResumeForms/ResumeForm1"
import ResumeForm2 from "../ResumeForms/ResumeForm2"
import ResumeForm3 from "../ResumeForms/ResumeForm3"
import ResumeForm4 from "../ResumeForms/ResumeForm4"
import ResumeForm5 from "../ResumeForms/ResumeForm5"
import ResumeForm6 from "../ResumeForms/ResumeForm6"
//business
import BusinessForm1 from "../BusinessCardForms/BusinessForm1";

//template
//resume
import Resume01 from "../templatesResume/Resume01";
import Resume02 from "../templatesResume/Resume02";
import Resume03 from "../templatesResume/Resume03";
//business card
import Business01 from "../templateBusinessCard/Business01";
import Business02 from "../templateBusinessCard/Business02";
import Business03 from "../templateBusinessCard/Business03";
import Business04 from "../templateBusinessCard/Business04";


export default function AppRouter() {

  document.body.style = 'background: #151515;';

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/formresume" element={<FormResume />} /> */}
        {/* <Route path="/formresume2" element={<FormResume2 />} /> */}
        {/* <Route path="/formresume3" element={<FormResume3 />} /> */}
        {/* <Route path="/formresume4" element={<FormResume4 />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}

        {/* Resume Forms  */}
        <Route path="/resumeform1" element={<ResumeForm1 />} />
        <Route path="/resumeform2" element={<ResumeForm2 />} />
        <Route path="/resumeform3" element={<ResumeForm3 />} />
        <Route path="/resumeform4" element={<ResumeForm4 />} />
        <Route path="/resumeform5" element={<ResumeForm5 />} />
        <Route path="/resumeform6" element={<ResumeForm6 />} />
        {/* business card forms */}
        <Route path="/business-card-form" element={<BusinessForm1 />} />

        {/* Resume Template */}
        <Route path="/resume01" element={<Resume01 />} />
        <Route path="/resume02" element={<Resume02 />} />
        <Route path="/resume03" element={<Resume03 />} />

        {/* business templates */}
        <Route path="/business-1" element={<Business01 />} />
        <Route path="/business-2" element={<Business02 />} />
        <Route path="/business-3" element={<Business03 />} />
        <Route path="/business-4" element={<Business04 />} />


        <Route path="/formquestion" element={<FormQuestion />} />
        <Route path="/formquestion2" element={<FormQuestion2 />} />
        <Route path="/formquestion3" element={<FormQuestion3 />} />
        <Route path="/questionpaper" element={<QuestionPaper />} />
        {/* <Route path="/business/layout01" element={<Business01 />} /> */}

      </Routes>

    </>
  );
}