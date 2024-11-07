import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Cvsu from "../../Assets/Projects/Cvsu.jpg";
import Webit from "../../Assets/Projects/Inventory.jpg";

import Inventory from "../../Assets/Projects/WebIt.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cvsu}
              isBlog={false}
              title="CVSU Website"
              description="The CVSU Website is a dedicated platform designed to provide information and resources for students, faculty, and visitors of Cavite State University (CvSU). Built with HTML for the structure and Java for back-end functionality, this website offers a user-friendly interface and efficient navigation to showcase academic programs, campus news, events, and other essential university services. The project emphasizes responsiveness, accessibility, and an intuitive design to enhance user experience and engagement with CvSU's online presence."
              ghLink="https://github.com/ragezu/Cvsu-Website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inventory}
              isBlog={false}
              title="School Inventory System"
              description="The School Inventory System is a comprehensive platform developed using PHP to manage and track inventory within an educational institution. It streamlines the process of monitoring school assets, from office supplies to classroom equipment, ensuring that resources are efficiently allocated and accounted for. This system features a user-friendly interface with functionalities for adding, updating, and categorizing inventory items, tracking item usage, and generating real-time reports. Designed for efficiency and ease of use, this tool aims to optimize inventory management and reduce resource wastage within the school environment."
              ghLink="https://github.com/ragezu/ITEC_Inventory"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Webit}
              isBlog={false}
              title="WEbIt Website"
              description="Webit is a sleek and professional company website created with HTML to showcase the brand's services, mission, and values. Designed to provide visitors with essential company information, the site includes sections such as About Us, Services, Contact, and Client Testimonials. The layout focuses on simplicity and clarity, ensuring easy navigation and a pleasant user experience. Webit's design highlights the brand's professionalism while maintaining accessibility, making it an effective digital presence for the company."
              ghLink="https://github.com/ragezu/Webit"
                         
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
