import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a programming enthusiast and a student at CvSU Bacoor with a growing passion for game development. 
              <br />
              <br />I’m fluent in classic languages like
              <i>
                <b className="purple"> C++, JavaScript, and Python </b>
              </i>
              <br />
              <br />
              I love building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>  especially in{" "}
                <b className="purple">
                  Blockchain.
                  </b>
                  and
                  <b className="purple"> decentralized tech. </b> 
                

              </i>
              <br />
              <br />
              Alongside my coding skills, I’m dedicated to learning and applying modern tools like <b className="purple"> Node.js, React.js,</b> and
              <i>
                <b className="purple">
                  {" "}
                  Next.js 
                </b> to create dynamic applications. Someday, I aim to merge these skills into creating immersive, innovative games and experiences.
                 
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ragezu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/JamessyAndrei/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook/>
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ragezuu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
