import React from "react";

export default function ContactMe() {
  return (
    <div className="my-5">
      <div className="col container">
        <h2>
          Contact Me <i class="bi bi-person-rolodex"></i>
        </h2>
        <p>
          As a soon-to-be-graduate of Thinkful's Software Engineering Immersion
          program, I'd love to speak with you about any opportunities you may
          have.
        </p>
        <div className="row row-cols-auto">
          <div className="col">
            <a
              href="mailto:joeyestradamusic@gmail.com"
              className="btn btn-info"
            >
              Email <i class="bi bi-envelope"></i>
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.linkedin.com/in/joseph-estrada/"
              className="btn btn-info"
            >
              LinkedIn <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
