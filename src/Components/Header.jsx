import React, { useState, useEffect } from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Header = () => {
  const fullText = "Data Analyst and ML Enthusiastic";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setAtTop(scrollPos <= 10);
      setAtBottom(scrollPos + windowHeight >= docHeight - 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
  const sections = Array.from(document.querySelectorAll("header[id], section[id]"));
  const scrollPos = window.scrollY + window.innerHeight / 4; // look a bit below current view

  // find the very next section whose top is greater than current scroll
  const nextSection = sections.find(sec => sec.offsetTop > scrollPos);

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToPrevSection = () => {
  const sections = Array.from(
    document.querySelectorAll("header[id], section[id]")
  );
  const scrollPos = window.scrollY - 10; // little buffer

  const prevSections = sections.filter(sec => sec.offsetTop < scrollPos);
  if (prevSections.length > 0) {
    const lastVisible = prevSections[prevSections.length - 1];
    lastVisible.scrollIntoView({ behavior: "smooth" });
  }
};


  useEffect(() => {
    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && index === fullText.length) speed = 1500;
    if (isDeleting && index === 0) speed = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) setIsDeleting(true);
      } else {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <header id="home">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center header_container">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h3>Hello I'm</h3>
            <h1 className="name">Ishan Majumder</h1>
            <h5 className="text-light">
              {displayText}
              <span className="cursor">|</span>
            </h5>
            <CTA />
          </div>
        </div>

        <HeaderSocials />

        <a
          className={`scroll_up ${atTop ? "disabled" : ""}`}
          onClick={!atTop ? scrollToPrevSection : null}
        >
          <FaAngleDoubleUp />
        </a>
        <a
          className={`scroll_down ${atBottom ? "disabled" : ""}`}
          onClick={!atBottom ? scrollToNextSection : null}
        >
          <FaAngleDoubleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
