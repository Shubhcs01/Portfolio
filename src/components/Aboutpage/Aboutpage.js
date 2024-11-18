import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
    return (
        <div className="aboutpage-background">
            <Container>
                <Row className="text-background">
                    {/* About Me Section */}
                    <Col md={7}>
                        <h3 className="about-me-text">
                            About <span className="highlight-text">Me</span>
                        </h3>
                        <p className="about-details">
                        I'm a self-taught Full Stack Developer and Computer Science graduate with 1 year of professional experience at Autodesk and Uolo EdTech. Skilled in Java, Spring Boot, and the MERN stack, I specialize in building dynamic, responsive web applications with a focus on accessibility and seamless user experiences. I've solved 500+ DSA problems on LeetCode and GFG, contributed to open-source projects with Meshery and Layer5, and developed several impactful projects. Passionate about problem-solving and clean, maintainable code, I’m always eager to learn and create scalable solutions.
                        </p>
                        {/* Skills Section */}
                        <div className="skills-section">
                            <h3 className="skills-heading" style={{ color: "#feec00" }}>Skills</h3>
                            <Row>
                                <Col lg={6}>
                                    <ul className="skill-list">
                                        <li>HTML/CSS/MUI</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                        <li>Git/GitHub</li>
                                        <li>Node.js/Express.js</li>
                                        <li>Microservices</li>
                                    </ul>
                                </Col>
                                <Col lg={6}>
                                    <ul className="skill-list">
                                        <li>React.js</li>
                                        <li>Redux</li>
                                        <li>Amazon S3</li>
                                        <li>MongoDB</li>
                                        <li>Java</li>
                                        <li>Spring Boot</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    {/* Web Image Section */}
                    <Col md={5}>
                        <div className="web-image"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutPage;
