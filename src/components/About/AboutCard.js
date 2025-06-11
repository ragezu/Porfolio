import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './AboutCard.css'


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
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
          </ul>
          <br />
            
            Attended trainings and Acquired Certifications in:
            <ul className="activity-grid">
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
  <li className="about-activity"><ImPointRight /> N/A</li>
</ul>
<br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "I faced challenges due to gaps in guidance, which led me to self-learn—and in the process, I gained valuable skills and life lessons."{" "}
          </p>
          <footer className="blockquote-footer">James</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
