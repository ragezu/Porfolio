import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James Andrei V. Orcullo </span>
            from <span className="purple"> Cavite,Philippines</span>
            <br />
            I am currently a <span className="purple">Computer Science Student</span> at <span className="purple">CVSU Bacoor</span>
            <br />
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Overthinking
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What ever happens, happens"{" "}
          </p>
          <footer className="blockquote-footer">James</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
