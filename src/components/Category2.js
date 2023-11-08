import React from 'react'
// import CategoryItem from './CategoryItem'
import Card from './Card';
// import CardChakra from './CardChakra';
// import bgImg from './backimg.jpg'




export default function Category2(props) {

  let pageUrl = "/src/components/FormResume.js";

  return (
    <div >
      <div className="container" style={{
        marginTop: "30px", height: "450px", display: "flex", flexDirection: "row", borderRadius: "8px", width: "100%",
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
      }}>
        <Card pageUrl={pageUrl} />




      </div>
    </div>
  )
}

// Default
// backgroundColor: "#FFE53B",
//       backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)"