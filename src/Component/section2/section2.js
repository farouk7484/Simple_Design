import React from "react";
import "./section2.css";
import image2 from "./image2.svg";

const Section2 = () => {
  return (
    <section className="section2">
    <div className="photo2">
        <img src={image2} alt="2" />
      </div>

      <div className="card2">
        <h2 class="ttu tracked white" >For making a change</h2>
        <p class="f6 white mv1">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
       </div>
     </section>
     
  );
};

export default Section2;