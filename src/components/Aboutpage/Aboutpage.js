import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext' >About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Full Stack Developer from India. I build dynamic Web Apps with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3 style={{color:"#feec00"}}>Skills</h3>
                                <Col lg={7}>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    <li>Bootsrap</li>
                                    <li>Git/Github</li>
                                    <li>NodeJs</li>
                                    <li>ExpressJs</li>
                                    
                                </Col>
                                <Col md={5}>
                                    <li>ReactJs</li>
                                    <li>Redux</li>
                                    <li>Material-ui</li>
                                    <li>Mongo DB</li>
                                    <li>JAVA</li>
                                    <li>Spring Boot</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage