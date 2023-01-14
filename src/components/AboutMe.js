import React from "react";
import profilePic from "../images/joey.jpg";

export default function AboutMe() {
  return (
    <div className="my-5" id="aboutme">
      <div className="container">
        <div className="row">
          <div className="row col-md-8">
            <h3 className="mt-3" data-aos="fade-left">
              About Me <i className="bi bi-book"></i>
            </h3>
            <p data-aos="fade-right" data-aos-delay="500" data-aos-once="true">
              If you knew me personally, you'd know that I love the art that is
              creation. Whether it’s creating music or software, my heart is
              only truly happy when my brain is hard at work making something
              ‘fun’ctional. My interest in software began way back when I was a
              child, trying to hack some of my favorite computer games for an
              unrealistic high score to show off to my friends at school.
            </p>
            <p data-aos="fade-right" data-aos-delay="1000" data-aos-once="true">
              Today, I am a career-swticher, from music-related sales in
              pro-audio and band instruments, to now a full-stack developer.
              Working at a mom-and-pop shop in Central Florida, I was tasked
              with using a website builder to create a brand new website for the
              company. While I was enjoying my time with the website builder, I
              came to find the platform a bit restrictive, thus my interest in
              web development started to unfold.
            </p>
            <p data-aos="fade-right" data-aos-delay="1500" data-aos-once="true">
              Not too long after that, I decided to transition into becoming a
              full-stack developer by enrolling in Thinkful’s Software
              Engineering Immersion program, a five-month intense coding
              bootcamp centered around mastering the following technologies:
            </p>
            <ul>
              <div className="container">
                <div className="d-flex">
                  <div className="row">
                    <div className="col" style={{ width: "144px" }}>
                      <li>JavaScript</li>
                      <li>Node.js</li>
                      <li>React</li>
                      <li>Express.js</li>
                      <li>Postgres</li>
                      <li>Git</li>
                      <li>Jest</li>
                      <li>CSS / Bootstrap</li>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="col">
            <img
              alt="joey"
              src={profilePic}
              className="my-5 border border-2 border-info rounded"
              style={{ width: "100%" }}
              data-aos="fade-left"
              data-aos-once="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
