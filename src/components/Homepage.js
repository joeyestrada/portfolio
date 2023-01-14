import React from "react";
import AOS from "aos";

export default function HomePage() {
  AOS.init({
    duration: "1000",
    anchorPlacement: "top-bottom",
    easing: "ease-in-out"
  });

  return (
    <div className="container my-5 text-center" id="home">
      <div className="col">
        <h6 className="mx-auto" data-aos="fade-down">
          Hi there! My name is
        </h6>
        <h1 className="mx-auto" data-aos="fade-right">
          Joey Estrada. <i className="bi bi-cassette-fill"></i>
        </h1>
        <p data-aos="fade-up">
          I am a career-switcher from pro-audio and instrument sales to software
          development, based in Central Florida. I am a graduate of Thinkful's
          Software Engineering Immersion program.
        </p>
      </div>
    </div>
  );
}
