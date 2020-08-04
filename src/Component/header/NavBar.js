import React, { useEffect } from "react";
import "./NavBar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }
  return (
    <header className={x.join(" ")}>
      <div className="logo">
        <img
          src="https://img.icons8.com/wired/64/000000/blockchain-new-logo.png"
          alt="Logo"
          title="Logo"
        />
      </div>

      <nav class="pa3 pa4-ns">
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">
          Home
        </a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">
          About
        </a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">
          Store
        </a>
        <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
