import React from "react";
import image1 from "./image1.svg";

const Section1 = () => {
  return (
    <section className="section">
      <div className="card">
        <h2 class="ttu tracked" >For beautifull life</h2>
        <p class="f6 gray mv1">In publishing and graphic design</p>
        <a class="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#">Submit</a>
      </div>
      <div className="photo1">
        <img src={image1} alt="1" />
      </div>
    </section>
  );
};

export default Section1;
