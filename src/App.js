import React from "react";
import "./styles.css";
import NavBar from "./Component/header/NavBar.js";
import Section1 from "./Component/section1/section1.js";
import Section2 from "./Component/section2/section2.js";
import Section3 from "./Component/section3/section3.js";
import Email from "./Component/email/email.js";
import Footer from "./Component/Footer/footer.js";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Email />
      <Footer />
    </div>
  );
}
