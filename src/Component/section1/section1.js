import React from "react";
import image1 from "./image1.svg";

const Section1 = () => {
  return (
    <section className="section">
      <div className="card">
        <h2 class="ttu tracked">For beautifull life</h2>
        <p class="f6 gray mv1">In publishing and graphic design</p>
        <a class="borderLeftRight no-underline" href="#0">
          Join Us
        </a>
      </div>
      <div className="photo1">
        <img src={image1} alt="1" />
      </div>
    </section>
  );
};

export default Section1;
