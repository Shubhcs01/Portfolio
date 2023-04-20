import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import moviego from '../../Assets/moviego.png'
import reelify from '../../Assets/reelify-2.png'
import nameit from '../../Assets/nameit.png'
import msexcel from '../../Assets/msexcel.png'
import eduhack from '../../Assets/eduhub-1.png'
import eduConf from '../../Assets/eduhub-2.png'
import eduWin from '../../Assets/eduhub-3.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={moviego}
                isBlog={false}
                title="MovieGo"
                description="Movie Recommendation Web App built using ReactJS and TMDB API. It recommends trending movies
                fetching from The Movie Database (TMDB) which is a popular, community-built database for movies and TV shows. The App has features like Pagination, Add to Favorite,
                filter, and local storage."
                ghLink="https://github.com/Shubhcs01/MovieGo"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nameit}
                isBlog={false}
                title="Name It"
                description="Name-It is a name suggestion Web application built using React JS. It generates
                awesome names for your startup or project based on the keyword provided and tells the user whether the domain name is available
                or not. If the domain name is available it re-directs you to namecheap.com"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={reelify}
                isBlog={false}
                title="Reelify"
                description="Reelify is a Social media web application where users
                can share their posts with other users, watch reels and connect with
                others. It Includes features like Real-time posts, likes, comments, shares, reels,
                loginand signUp. It was built with ReactJS, NodeJS, and Firebase."
                ghLink="https://github.com/Shubhcs01/Reelify"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={msexcel}
                isBlog={false}
                title="MS-Excel UI Clone"
                description="Clone of Microsoft Excel built to enhance my HTML, CSS and JavaScript knowledge."
                ghLink="https://github.com/Shubhcs01/MsExcelClone"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eduWin}
                isBlog={false}
                title="EduHub Winter Camp Website"
                description="A Responsive Website built for 21 days winter camp organized by EduHub Community and registered by 5000+ participants. Technology used are HTML/CSS and JavaScript."
                ghLink="https://github.com/Eduhub-Community/eduhub-winter-cohort1.0
                "
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eduhack}
                isBlog={false}
                title="EduHack"
                description="A responsive Website built for EduHub Community's Hackathon in a short duration of 2 hours. Technology used are HTML/CSS and JavaScript."
                ghLink="https://github.com/Eduhub-Community/eduhub-hackathon"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eduConf}
                isBlog={false}
                title="Bug Fixed"
                description="Fixed bug of the main event website of EduHub Community. Technology used are HTML/CSS and JavaScript."
                ghLink="https://github.com/Eduhub-Community/conference"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist