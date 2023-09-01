import React from "react";
import dynamic from 'next/dynamic';
if(typeof window !="undefined"){
window.jQuery = require("jquery");
    
}
// const RichTextEditor = dynamic(()=>import("../components/Business_Owner/summernote"), {
//     ssr: false
//   });

function Summernote() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Summernote</h1>
      {/* <RichTextEditor /> */}
    </div>
  );
}
export default Summernote

