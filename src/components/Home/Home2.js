import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import './Home2.css'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mwpkbqdw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully!");
          setFormData({ email: "", message: "" });
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch((error) => {
        alert("An error occurred. Please try again.");
      });
  };

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
                <b className="purple">Web Technologies and Products </b> especially in{" "}
                <b className="purple">Blockchain</b> and <b className="purple">decentralized tech.</b>
              </i>
              <br />
              <br />
              Alongside my coding skills, I’m dedicated to learning and applying modern tools like <b className="purple">Node.js, React.js,</b> and
              <i>
                <b className="purple"> Next.js </b> to create dynamic applications. Someday, I aim to merge these skills into creating immersive, innovative games and experiences.
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
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ragezu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/JamessyAndrei/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineFacebook />
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
            <p>Feel free to <span className="purple">connect </span>with me</p>
            <h2>Contact Me</h2>
            <div className="contact-form-container">
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="@"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder=""
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
