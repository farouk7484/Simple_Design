import React from "react";
import "./section3.css";

const Section3 = () => {
  return (
    <section className="section3">
      <article>
        <h1>What is Lorem Ipsum?</h1>
        <p className="lh-copy">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <button className="slideUpBtn">Register</button>
      </article>
      <article>
        <h1>Why do we use it?</h1>
        <p className="lh-copy">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <button className="slideUpBtn">Register</button>
      </article>
      <article>
        <h1>Where does it come?</h1>
        <p className="lh-copy">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words,
        </p>
        <button className="slideUpBtn">Register</button>
      </article>
    </section>
  );
};

export default Section3;
